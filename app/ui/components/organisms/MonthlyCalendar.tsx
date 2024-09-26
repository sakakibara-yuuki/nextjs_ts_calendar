import styles from "./organisms.module.css";
import { MonthlyCalendarCell } from "../molecules/MonthlyCalendarCell";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
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

  return (
    <div className={[...className, styles.monthlyContainer].join(" ")}>
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
