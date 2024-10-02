/*
 * EventEditModal.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */

import { TitleDisplay } from "@components/atoms/TitleDisplay";
import { EventDisplayModalHeader } from "@components/molecules/EventDisplayModalHeader";

interface EventEditModalProps {
  children: React.ReactNode;
}

export function EventEditModal({ children }: EventEditModalProps) {
  return (
    <>
      <EventDisplayModalHeader />
      <TitleDisplay />
    </>
  );
}
