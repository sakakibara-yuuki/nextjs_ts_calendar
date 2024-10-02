import styles from "../organisms.module.css";
import { MonthlyCalendarCell } from "@components/molecules/MonthlyCalendarCell";
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
            <MonthlyCalendarCell key={format(date, "yyyy/MM/dd")} date={date} />
          ))}
      {monthDays.map((date) => (
        <MonthlyCalendarCell key={format(date, "yyyy/MM/dd")} date={date} />
      ))}
      {lastDayOfMonth.getDay() === 6
        ? []
        : afterDaysOfMonth.map((date) => (
            <MonthlyCalendarCell key={format(date, "yyyy/MM/dd")} date={date} />
          ))}
    </div>
  );
}
