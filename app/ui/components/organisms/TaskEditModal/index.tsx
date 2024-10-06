/*
 * TaskEditModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import styles from "./styles.module.css";
import { TitleDisplay } from "@components/atoms/TitleDisplay";
import { TaskDisplayModalHeader } from "@components/molecules/TaskDisplayModalHeader";
import { DailyDisplay } from "@components/atoms/DailyDisplay";

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
        className={styles.taskDisplayModalHeader}
      />
      <TitleDisplay title={title} />
      <DailyDisplay date={date} />
    </div>
  );
}
