/*
 * EventDisplayModalHeader.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { EditButton } from "@components/atoms/EditButton";
import { DeleteButton } from "@components/atoms/DeleteButton";
import { CloseButton } from "@components/atoms/CloseButton";

interface EventDisplayModalHeaderProps {
  children?: React.ReactNode;
}

export function EventDisplayModalHeader({
  children,
}: EventDisplayModalHeaderProps) {
  return (
    <>
      <EditButton />
      <DeleteButton />
      <CloseButton />
    </>
  );
}
