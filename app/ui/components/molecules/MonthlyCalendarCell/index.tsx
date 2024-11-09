import styles from "./styles.module.css";
import molecules from "../molecules.module.css";
import { format, isSameDay } from "date-fns";
import { TaskType } from "types/task";
import { TaskButton } from "@components/atoms/TaskButton";

interface MonthlyCalendarCellProps {
  date: Date;
  className?: string[] | string;
  modalOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
  tasks?: TaskType[];
  openEditModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function MonthlyCalendarCell({
  date = new Date(),
  className = [],
  modalOpen,
  tasks = [],
  openEditModal,
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
      {isSameDay(new Date(), date) ? (
        <p className={styles.today}>{date.getDate()}</p>
      ) : (
        <p>{date.getDate()}</p>
      )}

      {tasks.map((task) => (
        <TaskButton
          className={molecules.taskButton}
          label={`${task.title} ${format(date, "yyyy/MM/dd")}`}
          key={task.id}
          id={task.id}
          openEditModal={openEditModal}
        />
      ))}
    </div>
  );
}
