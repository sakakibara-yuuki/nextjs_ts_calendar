/*
 * EventEditModalForm.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import { CloseButton } from "@components/atoms/CloseButton";
import { TitleInput } from "@components/atoms/TitleInput";
import { SaveButton } from "@components/atoms/SaveButton";

interface EventEditModalFormProps {
  children: React.ReactNode;
}

export function EventEditModalForm({ children }: EventEditModalFormProps) {
  return (
    <>
      <CloseButton />
      <TitleInput title="hoge" setTitle={() => console.log("hoge")} />
      <SaveButton />
    </>
  );
}
