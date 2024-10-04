/*
 * TaskEditPage.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { CloseButton } from "@components/atoms/CloseButton";
import { SaveButton } from "@components/atoms/SaveButton";

export function TaskEditPage({ title }: { title: string }) {
  return (
    <>
      <CloseButton />
      <p>{title}</p>
      <SaveButton />
    </>
  );
}
