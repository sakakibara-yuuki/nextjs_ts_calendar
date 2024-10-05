"use client";
import { TaskListContext } from "context/tasklist";
import { useState } from "react";
import { TaskType } from "types/task";

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
}
