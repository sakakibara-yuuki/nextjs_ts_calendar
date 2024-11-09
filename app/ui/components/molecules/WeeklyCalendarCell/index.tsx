import styles from "../molecules.module.css";
import { TaskType } from "types/task";
import { TaskButton } from "@components/atoms/TaskButton";
import { format } from "date-fns";

interface WeeklyCalendarCellProps {
  date: Date;
  className?: string;
  modalOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
  tasks?: TaskType[];
  openEditModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function WeeklyCalendarCell({
  date = new Date(),
  modalOpen,
  tasks = [],
  openEditModal,
}: WeeklyCalendarCellProps) {
  return (
    <div
      className={styles.weeklyCalendarCell}
      onClick={modalOpen}
      data-id={format(date, "yyyy-MM-dd")}
    >
      {tasks.map((task) => (
        <TaskButton
          className={styles.taskButton}
          label={`${task.title} ${format(date, "yyyy/MM/dd")}`}
          key={task.id}
          id={task.id}
          openEditModal={openEditModal}
        />
      ))}
    </div>
  );
}
