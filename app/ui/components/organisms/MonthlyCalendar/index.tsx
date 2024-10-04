import styles from "./styles.module.css";
import { MonthlyCalendarCell } from "@components/molecules/MonthlyCalendarCell";
import { TaskAddModal } from "@components/organisms/TaskAddModal";
import { Portal } from "@components/molecules/Portal";
import { TaskEditModal } from "@components/organisms/TaskEditModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TaskType } from "types/task";
import { TaskListContext } from "context/tasklist";
import { useContext } from "react";

import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  isSameDay,
} from "date-fns";

interface MonthlyCalendarProps {
  date: Date;
  className?: string[] | string;
}

export function MonthlyCalendar({
  date,
  className = [],
}: MonthlyCalendarProps) {
  const router = useRouter();
  const [viewDate, setViewDate] = useState(date);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTask, setSelectedTask] = useState<TaskType>();

  const { taskList, setTaskList } = useContext(TaskListContext);

  const firstDayOfMonth: Date = startOfMonth(date);
  const lastDayOfMonth: Date = endOfMonth(date);

  const monthDays = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const beforeDaysOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: addDays(firstDayOfMonth, -1),
  });

  const afterDaysOfMonth = eachDayOfInterval({
    start: addDays(lastDayOfMonth, 1),
    end: endOfWeek(lastDayOfMonth),
  });

  function scrollHandler(e: React.WheelEvent<HTMLDivElement>) {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const day = viewDate.getDate();
    setViewDate(addMonths(viewDate, e.deltaY > 0 ? 1 : -1));
    router.prefetch(`/calendar/month/${year}/${month + 1 - 1}/${day}`);
    router.prefetch(`/calendar/month/${year}/${month + 1 + 1}/${day}`);
    router.replace(`/calendar/month/${year}/${month + 1}/${day}`);
  }

  function closeAllModal() {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  }

  function openTaskAddModal(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    closeAllModal();
    const selected = (event.target as HTMLElement).closest("div");
    const selectedDate = new Date(Date.parse(selected!.id));
    setSelectedDate(selectedDate);
    setIsAddModalOpen(true);
  }

  function closeTaskAddModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    closeAllModal();
  }

  function addTask(event: React.MouseEvent<HTMLButtonElement>) {
    const newTask = {
      id: crypto.randomUUID(),
      title: (event.currentTarget.form!.elements[1] as HTMLInputElement).value,
      date: selectedDate,
    };
    setTaskList([...taskList, newTask]);
    closeAllModal();
  }

  function openEditModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    const target = event.currentTarget.closest("[data-id]");
    const taskId = (target as HTMLElement).dataset.id;
    setIsEditModalOpen(true);
    for (const task of taskList) {
      if (task.id === taskId) {
        setSelectedTask(task);
        break;
      }
    }
  }

  function closeTaskEditModal() {
    closeAllModal();
  }

  function deleteTask() {
    setTaskList(taskList.filter((task) => task.id !== selectedTask!.id));
    closeAllModal();
  }

  function editTask() {
    closeAllModal();
    router.push(`/edit/${selectedTask!.id}`);
  }

  return (
    <>
      <div
        className={
          Array.isArray(className)
            ? [...className, styles.monthlyContainer].join(" ")
            : `${className} ${styles.monthlyContainer}`
        }
        id="modal"
        onWheel={(e) => scrollHandler(e)}
      >
        {firstDayOfMonth.getDay() === 0
          ? []
          : beforeDaysOfMonth.map((date) => (
              <MonthlyCalendarCell
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={openTaskAddModal}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openEditModal}
              />
            ))}
        {monthDays.map((date) => (
          <MonthlyCalendarCell
            key={format(date, "yyyy/MM/dd")}
            date={date}
            modalOpen={openTaskAddModal}
            tasks={taskList.filter((task) => isSameDay(task.date, date))}
            openEditModal={openEditModal}
          />
        ))}
        {lastDayOfMonth.getDay() === 6
          ? []
          : afterDaysOfMonth.map((date) => (
              <MonthlyCalendarCell
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={openTaskAddModal}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openEditModal}
              />
            ))}
      </div>
      {isAddModalOpen && (
        <Portal>
          <TaskAddModal
            toggleModal={closeTaskAddModal}
            date={selectedDate}
            addTask={addTask}
          />
        </Portal>
      )}
      {isEditModalOpen && (
        <Portal>
          <TaskEditModal
            title={selectedTask!.title}
            date={selectedTask!.date}
            editTask={editTask}
            deleteTask={deleteTask}
            closeTaskEditModal={closeTaskEditModal}
          />
        </Portal>
      )}
    </>
  );
}
