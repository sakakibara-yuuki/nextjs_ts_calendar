import styles from "./organisms.module.css";
import { Pagination } from "@components/molecules/Pagination";
import { CalendarModeSelector } from "@components/atoms/CalendarModeSelector";
import { useParamsToDate } from "@hooks/useParamsToDate";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addMonths, subMonths, addWeeks, subWeeks } from "date-fns";

interface HeaderProps {
  className?: string[];
}

export function Header({ className }: HeaderProps) {
  if (className === undefined) {
    className = [];
  }

  const date = useParamsToDate();
  const [viewMode, setViewMode] = useState("month");

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/calendar/${viewMode}/${year}/${month}/${day}`);
  }, [viewMode]);

  function routeNext() {
    if (viewMode === "month") {
      const nextMonthDate = addMonths(date, 1);
      const year = nextMonthDate.getFullYear();
      const month = nextMonthDate.getMonth() + 1;
      const day = nextMonthDate.getDate();
      router.push(`/calendar/month/${year}/${month}/${day}`);
    } else {
      const nextWeekDate = addWeeks(date, 1);
      const year = nextWeekDate.getFullYear();
      const month = nextWeekDate.getMonth() + 1;
      const day = nextWeekDate.getDate();
      router.push(`/calendar/week/${year}/${month}/${day}`);
    }
  }

  function routePrevious() {
    if (viewMode === "month") {
      const prevMonthDate = subMonths(date, 1);
      const year = prevMonthDate.getFullYear();
      const month = prevMonthDate.getMonth() + 1;
      const day = prevMonthDate.getDate();
      router.push(`/calendar/${viewMode}/${year}/${month}/${day}`);
    } else {
      const prevWeekDate = subWeeks(date, 1);
      const year = prevWeekDate.getFullYear();
      const month = prevWeekDate.getMonth() + 1;
      const day = prevWeekDate.getDate();
      router.push(`/calendar/${viewMode}/${year}/${month}/${day}`);
    }
  }

  return (
    <header className={[...className, styles.headerContainer].join(" ")}>
      <div className={styles.pagination}>
        <Pagination
          date={date}
          routePrevious={routePrevious}
          routeNext={routeNext}
        />
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
