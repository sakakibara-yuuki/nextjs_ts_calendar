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
  children?: React.ReactNode;
}

export function TaskDisplayModalHeader({
  children,
}: TaskDisplayModalHeaderProps) {
  return (
    <>
      <EditButton />
      <DeleteButton />
      <CloseButton />
    </>
  );
}
