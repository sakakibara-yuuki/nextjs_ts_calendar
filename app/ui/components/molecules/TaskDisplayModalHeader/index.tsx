/*
 * TaskDisplayModalHeader.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { EditButton } from "@components/atoms/EditButton";
import { DeleteButton } from "@components/atoms/DeleteButton";
import { CloseButton } from "@components/atoms/CloseButton";

interface TaskDisplayModalHeaderProps {
  editTask?: () => void;
  deleteTask?: () => void;
  closeTaskEditModal?: () => void;
  className?: string;
}

export function TaskDisplayModalHeader({
  editTask,
  deleteTask,
  closeTaskEditModal,
  className,
}: TaskDisplayModalHeaderProps) {
  return (
    <div className={className}>
      <EditButton onClick={editTask} />
      <DeleteButton onClick={deleteTask} />
      <CloseButton onClick={closeTaskEditModal} />
    </div>
  );
}
