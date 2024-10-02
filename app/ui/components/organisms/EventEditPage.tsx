/*
 * EventEditPage.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { EventEditModalForm } from "@components/molecules/EventEditModalForm";

interface EventEditPageProps {
  children: React.ReactNode;
}

export function EventEditPage({ children }: EventEditPageProps) {
  return <EventEditModalForm>hoge</EventEditModalForm>;
}
