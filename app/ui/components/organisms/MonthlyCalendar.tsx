"use client";
import styles from "./organisms.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MonthlyCalendarCell } from "../molecules/MonthlyCalendarCell";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
} from "date-fns";

interface MonthlyCalendarProps {
  date: Date;
  className?: string[];
}

export function MonthlyCalendar({ date, className }: MonthlyCalendarProps) {
  if (className === undefined) {
    className = [];
  }

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

  const router = useRouter();

  const [viewDate, setViewDate] = useState(date);

  function scrollHandler(e: React.WheelEvent<HTMLDivElement>) {
    setViewDate(addMonths(viewDate, e.deltaY > 0 ? 1 : -1));
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const day = viewDate.getDate();
    router.replace(`/month/${year}/${month + 1}/${day}`);
    router.prefetch(`/month/${year}/${month}/${day}`);
    router.prefetch(`/month/${year}/${month + 2}/${day}`);
  }

  return (
    <div
      className={[...className, styles.monthlyContainer].join(" ")}
      onWheel={(e) => scrollHandler(e)}
    >
      {firstDayOfMonth.getDay() === 0
        ? []
        : beforeDaysOfMonth.map((date) => {
            return (
              <MonthlyCalendarCell
                key={format(date, "yyyy/MM/dd")}
                date={date}
              />
            );
          })}
      {monthDays.map((date) => {
        return (
          <MonthlyCalendarCell key={format(date, "yyyy/MM/dd")} date={date} />
        );
      })}
      {lastDayOfMonth.getDay() === 6
        ? []
        : afterDaysOfMonth.map((date) => {
            return (
              <MonthlyCalendarCell
                key={format(date, "yyyy/MM/dd")}
                date={date}
              />
            );
          })}
    </div>
  );
}
