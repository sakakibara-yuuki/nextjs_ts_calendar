/*
 * TaskAddModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { CloseButton } from "@components/atoms/CloseButton";
import { TitleInput } from "@components/atoms/TitleInput";
import { DailyDisplay } from "@components/atoms/DailyDisplay";
import { SaveButton } from "@components/atoms/SaveButton";
import styles from "./styles.module.css";

interface TaskAddModalProps {
  toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  date: Date;
  addTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

//<DailyDisplay date={date} />
export function TaskAddModal({
  toggleModal,
  date,
  addTask,
}: TaskAddModalProps) {
  return (
    <div className={styles.eventAddModal}>
      <form>
        <CloseButton onClick={toggleModal} />
        <TitleInput />
        <SaveButton onClick={addTask} />
      </form>
    </div>
  );
}
