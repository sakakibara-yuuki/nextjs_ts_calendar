import styles from "./styles.module.css";
import { MonthlyCalendarCell } from "@components/molecules/MonthlyCalendarCell";
import { TaskAddModal } from "@components/organisms/TaskAddModal";
import { TaskEditModal } from "@components/organisms/TaskEditModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export type TaskType = {
  id: string;
  title: string;
  date: Date;
};

export function MonthlyCalendar({
  date,
  className = [],
}: MonthlyCalendarProps) {
  const router = useRouter();
  const [viewDate, setViewDate] = useState(date);

  const [taskList, setTaskList] = useState<TaskType[]>([]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  function modalOpen(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    const selected = (event.target as HTMLElement).closest("div");
    const selectedDate = new Date(Date.parse(selected!.id));
    setSelectedDate(selectedDate);
    setIsModalOpen(true);
  }

  function modalClose(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsModalOpen(false);
  }

  function addTask(event: React.MouseEvent<HTMLButtonElement>) {
    const newTask = {
      id: crypto.randomUUID(),
      title: (event.currentTarget.form!.elements[1] as HTMLInputElement).value,
      date: selectedDate,
    };
    setTaskList([...taskList, newTask]);
    setIsModalOpen(false);
  }

  function openEditModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    const target = event.currentTarget.closest("[data-id]");
    const taskId = (target as HTMLElement).dataset.id;
    console.log(taskId);
    setIsEditModalOpen(true);
    for (const task of taskList) {
      if (task.id === taskId) {
        setSelectedDate(task.date);
        break;
      }
    }
  }

  return (
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
            <>
              <MonthlyCalendarCell
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={modalOpen}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openEditModal}
              />
              {isSameDay(date, selectedDate) && isModalOpen && (
                <TaskAddModal
                  toggleModal={modalClose}
                  date={date}
                  addTask={addTask}
                />
              )}
              {isSameDay(date, selectedDate) && isEditModalOpen && (
                <TaskEditModal title={"hoge"} />
              )}
            </>
          ))}
      {monthDays.map((date) => (
        <>
          <MonthlyCalendarCell
            key={format(date, "yyyy/MM/dd")}
            date={date}
            modalOpen={modalOpen}
            tasks={taskList.filter((task) => isSameDay(task.date, date))}
            openEditModal={openEditModal}
          />
          {isSameDay(date, selectedDate) && isModalOpen && (
            <TaskAddModal
              toggleModal={modalClose}
              date={date}
              addTask={addTask}
            />
          )}
        </>
      ))}
      {lastDayOfMonth.getDay() === 6
        ? []
        : afterDaysOfMonth.map((date) => (
            <>
              <MonthlyCalendarCell
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={modalOpen}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openEditModal}
              />
              {isSameDay(date, selectedDate) && isModalOpen && (
                <TaskAddModal
                  toggleModal={modalClose}
                  date={date}
                  addTask={addTask}
                />
              )}
            </>
          ))}
    </div>
  );
}
