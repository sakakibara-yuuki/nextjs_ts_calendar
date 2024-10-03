import styles from "./styles.module.css";
import { MonthlyCalendarCell } from "@components/molecules/MonthlyCalendarCell";
import { TaskAddModal } from "@components/organisms/TaskAddModal";
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

type TaskType = {
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
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  function modalOpen(event: React.MouseEvent<HTMLDivElement>) {
    const selected = (event.target as HTMLElement).closest("div");
    const selectedDate = new Date(Date.parse(selected!.id));
    setSelectedDate(selectedDate);
    setIsModalOpen(true);
  }

  function modalClose(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsModalOpen(false);
  }

  function addTask(e: React.MouseEvent<HTMLButtonElement>) {
    const newTask = {
      title: (e.currentTarget.form!.elements[1] as HTMLInputElement).value,
      date: date,
    };
    setTaskList([...taskList, newTask]);
    setIsModalOpen(false);
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
      {monthDays.map((date) => (
        <>
          <MonthlyCalendarCell
            key={format(date, "yyyy/MM/dd")}
            date={date}
            modalOpen={modalOpen}
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
