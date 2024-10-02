import styles from "../organisms.module.css";
import { format, eachDayOfInterval, startOfWeek, endOfWeek } from "date-fns";
import { WeeklyCalendarHeader } from "@components/molecules/WeeklyCalendarHeader";
import { WeeklyCalendarCell } from "@components/molecules/WeeklyCalendarCell";

interface WeeklyCalendarProps {
  date?: Date;
}

export function WeeklyCalendar({ date = new Date() }: WeeklyCalendarProps) {
  const firstDayOfWeek: Date = startOfWeek(date);
  const lastDayOfWeek: Date = endOfWeek(date);
  const weeklyDays = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  return (
    <div className={styles.weeklyContainer}>
      <WeeklyCalendarHeader
        className={[styles.weeklyCalendarHeader]}
        firstDayOfWeek={firstDayOfWeek}
      />
      <div className={styles.weeklyCalendarCells}>
        {weeklyDays.map((day) => {
          return (
            <WeeklyCalendarCell
              className={styles.weeklyCalendarCell}
              key={format(day, "yyyy/MM/dd")}
              day={day}
            />
          );
        })}
      </div>
    </div>
  );
}
