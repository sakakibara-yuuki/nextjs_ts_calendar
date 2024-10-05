"use client";
import { TaskListContext } from "context/tasklist";
import { ViewContext } from "context/view";
import { useState } from "react";
import { TaskType } from "types/task";

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [viewMode, setViewMode] = useState("month");

  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      <ViewContext.Provider
        value={{
          viewMode,
          setViewMode,
          date: new Date(),
          setDate: () => {},
        }}
      >
        {children}
      </ViewContext.Provider>
    </TaskListContext.Provider>
  );
}
