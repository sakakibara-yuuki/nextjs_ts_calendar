"use client";
import styles from "./organisms.module.css";
import { Pagination } from "@components/molecules/Pagination";
import { CalendarModeSelector } from "@components/atoms/CalendarModeSelector";
import { useParamsToDate } from "@hooks/useParamsToDate";

interface HeaderProps {
  className?: string[];
}

export function Header({ className }: HeaderProps) {
  if (className === undefined) {
    className = [];
  }

  const date = useParamsToDate();

  return (
    <header className={[...className, styles.headerContainer].join(" ")}>
      <div className={styles.pagination}>
        <Pagination date={date} />
      </div>
      <div className={styles.selector}>
        <CalendarModeSelector date={date} />
      </div>
    </header>
  );
}
