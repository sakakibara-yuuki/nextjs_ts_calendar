/*
 * EventAddModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { CloseButton } from "@components/atoms/CloseButton";
import { TitleInput } from "@components/atoms/TitleInput";
import { DailyDisplay } from "@components/atoms/DailyDisplay";
import { SaveButton } from "@components/atoms/SaveButton";
import styles from "./styles.module.css";

interface EventAddModalProps {
  toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function EventAddModal({ toggleModal }: EventAddModalProps) {
  return (
    <div className={styles.eventAddModal}>
      <CloseButton onClick={toggleModal} />
      <TitleInput
        title="This is a title"
        setTitle={() => console.log("hoge")}
      />
      <DailyDisplay />
      <SaveButton />
    </div>
  );
}
