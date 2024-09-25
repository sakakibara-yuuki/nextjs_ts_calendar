"use client";
import styles from "./organisms.module.css";
import { Pagination } from "../molecules/Pagination";
import { CalendarModeSelector } from "../atoms/CalendarModeSelector";
import { useParams } from "next/navigation";
import type { ParamsProps } from "../../../layout";

interface HeaderProps {
  className?: string[];
}

export function Header({ className }: HeaderProps) {
  if (className === undefined) {
    className = [];
  }
  type Params = {
    calendarView: string;
    year: string;
    month: string;
    day: string;
  };
  const params = useParams<Params>();

  const date = new Date(
    parseInt(params.year),
    parseInt(params.month) - 1,
    parseInt(params.day),
  );

  return (
    <header className={[...className, styles.headerContainer].join(" ")}>
      <div className={styles.pagination}>
        <Pagination date={date} />
      </div>
      <div className={styles.selector}>
        <CalendarModeSelector />
      </div>
    </header>
  );
}
