"use client";

import styles from "./molecules.module.css";
import { EventButton } from "../atoms/EventButton";

interface MonthlyCalendarCellProps {
  date: Date;
  className?: string;
}

export function MonthlyCalendarCell({
  date = new Date(),
  className,
  ...props
}: MonthlyCalendarCellProps) {
  return (
    <div className={styles.monthlyCalendarCell} {...props}>
      <p>{date.getDate()}</p>
      <EventButton />
      <EventButton />
    </div>
  );
}
