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

interface EventAddModalProps {
  children: React.ReactNode;
}

export function EventAddModal({ children }: EventAddModalProps) {
  return (
    <>
      <CloseButton />
      <TitleInput title="hoge" setTitle={() => console.log("hoge")} />
      <DailyDisplay />
      <SaveButton />
    </>
  );
}
