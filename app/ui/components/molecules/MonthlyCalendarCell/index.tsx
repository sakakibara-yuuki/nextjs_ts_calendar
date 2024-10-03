import styles from "./styles.module.css";
import { format } from "date-fns";

interface MonthlyCalendarCellProps {
  date: Date;
  className?: string[] | string;
  modalOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function MonthlyCalendarCell({
  date = new Date(),
  className = [],
  modalOpen,
}: MonthlyCalendarCellProps) {
  return (
    <div
      className={
        Array.isArray(className)
          ? [...className, styles.monthlyCalendarCell].join(" ")
          : `${className} ${styles.monthlyCalendarCell}`
      }
      id={format(date, "yyyy-MM-dd")}
      onClick={modalOpen}
    >
      <p>{date.getDate()}</p>
    </div>
  );
}
