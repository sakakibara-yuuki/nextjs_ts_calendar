import styles from "./organisms.module.css";
import { Pagination } from "@components/molecules/Pagination";
import { CalendarModeSelector } from "@components/atoms/CalendarModeSelector";
import { useParamsToDate } from "@hooks/useParamsToDate";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  className?: string[];
}

export function Header({ className }: HeaderProps) {
  if (className === undefined) {
    className = [];
  }

  const { calendarView, date } = useParamsToDate();
  const [viewMode, setViewMode] = useState(calendarView);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${viewMode}/${year}/${month}/${day}`);
  }, [viewMode]);

  return (
    <header className={[...className, styles.headerContainer].join(" ")}>
      <div className={styles.pagination}>
        <Pagination date={date} />
      </div>
      <div className={styles.selector}>
        <CalendarModeSelector
          viewMode={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        />
      </div>
    </header>
  );
}
