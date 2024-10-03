/*
 * TaskEditModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import { TitleDisplay } from "@components/atoms/TitleDisplay";
import { TaskDisplayModalHeader } from "@components/molecules/TaskDisplayModalHeader";

interface TaskEditModalProps {
  children: React.ReactNode;
}

export function TaskEditModal({ children }: TaskEditModalProps) {
  return (
    <>
      <TaskDisplayModalHeader />
      <TitleDisplay />
    </>
  );
}
