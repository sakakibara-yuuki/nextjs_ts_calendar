import styles from "../molecules.module.css";
import { TaskButton } from "@components/atoms/TaskButton";

interface WeeklyCalendarCellProps {
  day: Date;
  className?: string;
}

export function WeeklyCalendarCell({
  day = new Date(),
  className,
  ...props
}: WeeklyCalendarCellProps) {
  return <div className={styles.weeklyCalendarCell} {...props}></div>;
}
