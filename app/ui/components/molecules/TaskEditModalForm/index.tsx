/*
 * TaskEditModalForm.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import { CloseButton } from "@components/atoms/CloseButton";
import { TitleInput } from "@components/atoms/TitleInput";
import { SaveButton } from "@components/atoms/SaveButton";

interface TaskEditModalFormProps {
  children: React.ReactNode;
}

export function TaskEditModalForm({ children }: TaskEditModalFormProps) {
  return (
    <>
      <CloseButton />
      <TitleInput title="hoge" setTitle={() => console.log("hoge")} />
      <SaveButton />
    </>
  );
}
