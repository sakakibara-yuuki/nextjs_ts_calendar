import styles from "../molecules.module.css";
import { EventButton } from "@components/atoms/EventButton";

interface WeeklyCalendarCellProps {
  day: Date;
  className?: string;
}

export function WeeklyCalendarCell({
  day = new Date(),
  className,
  ...props
}: WeeklyCalendarCellProps) {
  return (
    <div className={styles.weeklyCalendarCell} {...props}>
      <EventButton />
      <EventButton />
    </div>
  );
}
