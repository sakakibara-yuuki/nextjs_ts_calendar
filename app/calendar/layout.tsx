"use client";
import { Header } from "@components/organisms/Header";
import { Sidebar } from "@components/organisms/Sidebar";
import styles from "./page.module.css";
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
    <div className={styles.container}>
      <Header className={[styles.header]} />
      <Sidebar className={[styles.sidebar]} />
      <div className={`${styles.calendar}`} id="calendarContainer">
        <TaskListContext.Provider value={{ taskList, setTaskList }}>
          {children}
        </TaskListContext.Provider>
      </div>
    </div>
  );
}
