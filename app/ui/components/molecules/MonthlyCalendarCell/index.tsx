import styles from "./styles.module.css";
import { format } from "date-fns";
import { TaskType } from "@components/organisms/MonthlyCalendar";
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
      <p>{date.getDate()}</p>
      {tasks.map((task) => (
        <TaskButton
          label={`${task.title} ${format(date, "yyyy/MM/dd")}`}
          id={task.id}
          openEditModal={openEditModal}
        />
      ))}
    </div>
  );
}
