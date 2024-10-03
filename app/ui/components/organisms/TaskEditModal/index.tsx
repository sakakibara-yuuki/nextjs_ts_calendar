/*
 * TaskEditModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import { TitleDisplay } from "@components/atoms/TitleDisplay";
import { TaskDisplayModalHeader } from "@components/molecules/TaskDisplayModalHeader";

interface TaskEditModalProps {
  //children: React.ReactNode;
  title: string;
}

export function TaskEditModal({ title }: TaskEditModalProps) {
  return (
    <>
      <TaskDisplayModalHeader />
      <TitleDisplay title={title} />
    </>
  );
}
