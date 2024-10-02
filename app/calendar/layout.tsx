"use client";
import { Header } from "@components/organisms/Header";
import { Sidebar } from "@components/organisms/Sidebar";
import styles from "./page.module.css";

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <Header className={[styles.header]} />
      <Sidebar className={[styles.sidebar]} />
      <div id="calendarContainer">{children}</div>
    </div>
  );
}
