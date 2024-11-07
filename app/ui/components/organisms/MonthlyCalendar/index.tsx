import styles from "./styles.module.css";
import { MonthlyCalendarCell } from "@components/molecules/MonthlyCalendarCell";
import { TaskAddModal } from "@components/organisms/TaskAddModal";
import { Portal } from "@components/molecules/Portal";
import { TaskEditModal } from "@components/organisms/TaskEditModal";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { TaskType } from "types/task";
import { TaskListContext } from "context/tasklist";

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
  date?: Date;
  className?: string[] | string;
}

export function MonthlyCalendar({
  date = new Date(),
  className = [],
}: MonthlyCalendarProps) {
  const router = useRouter();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTask, setSelectedTask] = useState<TaskType | undefined>();

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
    const year = date.getFullYear();
    const day = date.getDate();
    let month: number;
    if (e.deltaY > 0) {
      month = addMonths(date, 1).getMonth() + 1;
    } else {
      month = addMonths(date, -1).getMonth() + 1;
    }
    router.push(`/calendar/view/month/${year}/${month}/${day}`);
  }

  function closeAllModal() {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  }

  function openTaskAddModal(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    closeAllModal();
    const selected = event.currentTarget as HTMLElement;
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

  function openTaskEditModal(event: React.MouseEvent<HTMLButtonElement>) {
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
    router.push(
      `/calendar/edit/${selectedTask!.id}?view=month&date=${format(selectedTask!.date, "yyyy-MM-dd")}`,
    );
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
                className={styles.monthlyCalendarCellBefore}
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={openTaskAddModal}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openTaskEditModal}
              />
            ))}
        {monthDays.map((date) => (
          <MonthlyCalendarCell
            key={format(date, "yyyy/MM/dd")}
            date={date}
            modalOpen={openTaskAddModal}
            tasks={taskList.filter((task) => isSameDay(task.date, date))}
            openEditModal={openTaskEditModal}
          />
        ))}
        {lastDayOfMonth.getDay() === 6
          ? []
          : afterDaysOfMonth.map((date) => (
              <MonthlyCalendarCell
                className={styles.monthlyCalendarCellAfter}
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={openTaskAddModal}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openTaskEditModal}
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
