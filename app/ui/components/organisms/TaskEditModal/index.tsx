/*
 * TaskEditModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import styles from "./styles.module.css";
import { TitleDisplay } from "@components/atoms/TitleDisplay";
import { TaskDisplayModalHeader } from "@components/molecules/TaskDisplayModalHeader";
import { format } from "date-fns";

interface TaskEditModalProps {
  title: string;
  date: Date;
  editTask?: () => void;
  deleteTask?: () => void;
  closeTaskEditModal: () => void;
}

export function TaskEditModal({
  title,
  date,
  editTask,
  deleteTask,
  closeTaskEditModal,
}: TaskEditModalProps) {
  return (
    <div className={`${styles.taskEditModal}`}>
      <TaskDisplayModalHeader
        editTask={editTask}
        deleteTask={deleteTask}
        closeTaskEditModal={closeTaskEditModal}
      />
      <TitleDisplay title={title} />
      <p>{format(date, "yyyy/MM/dd")}</p>
    </div>
  );
}
