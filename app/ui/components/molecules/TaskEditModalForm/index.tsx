/*
 * TaskEditModalForm.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import { CloseButton } from "@components/atoms/CloseButton";
import { SaveButton } from "@components/atoms/SaveButton";

interface TaskEditModalFormProps {
  title: string;
}

export function TaskEditModalForm({ title }: TaskEditModalFormProps) {
  return (
    <>
      <CloseButton />
      <p>{title}</p>
      <SaveButton />
    </>
  );
}
