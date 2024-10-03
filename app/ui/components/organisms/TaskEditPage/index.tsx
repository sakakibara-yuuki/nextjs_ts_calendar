/*
 * TaskEditPage.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { TaskEditModalForm } from "@components/molecules/TaskEditModalForm";

interface TaskEditPageProps {
  children: React.ReactNode;
}

export function TaskEditPage({ children }: TaskEditPageProps) {
  return <TaskEditModalForm>hoge</TaskEditModalForm>;
}
