import styles from "../molecules.module.css";
import { format, addDays, isSameDay } from "date-fns";

interface WeeklyCalendarHeaderProps {
  firstDayOfWeek: Date;
  className?: string[];
}

export function WeeklyCalendarHeader({
  firstDayOfWeek = new Date(),
  className = [],
}: WeeklyCalendarHeaderProps) {
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];
  const today = new Date();

  return (
    <div className={[...className, styles.weeklyCalendarHeader].join(" ")}>
      {weekDays.map((weekDay, index) => {
        const day = addDays(firstDayOfWeek, index);
        return (
          <div key={format(day, "yyyy/MM/dd")}>
            {weekDay}
            {isSameDay(today, day) ? (
              <p className={styles.today}>{day.getDate()}</p>
            ) : (
              <p>{day.getDate()}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
