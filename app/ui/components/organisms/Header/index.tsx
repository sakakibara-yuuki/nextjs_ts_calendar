import styles from "../organisms.module.css";
import { Pagination } from "@components/molecules/Pagination";
import { CalendarModeSelector } from "@components/atoms/CalendarModeSelector";
import { useParamsToDate } from "@hooks/useParamsToDate";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addMonths, subMonths, addWeeks, subWeeks } from "date-fns";
import { useContext } from "react";
import { ViewContext } from "context/view";

interface HeaderProps {
  className?: string[];
}

export function Header({ className = [] }: HeaderProps) {
  const date = useParamsToDate();
  const { viewMode, setViewMode } = useContext(ViewContext);

  const router = useRouter();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());

  function routeNext() {
    let newYear: number;
    let newMonth: number;
    let newDay: number;

    if (viewMode === "month") {
      const nextMonthDate = addMonths(date, 1);
      newYear = nextMonthDate.getFullYear();
      newMonth = nextMonthDate.getMonth() + 1;
      newDay = nextMonthDate.getDate();
    } else {
      const nextWeekDate = addWeeks(date, 1);
      newYear = nextWeekDate.getFullYear();
      newMonth = nextWeekDate.getMonth() + 1;
      newDay = nextWeekDate.getDate();
    }
    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);
  }

  function routePrevious() {
    let newYear: number;
    let newMonth: number;
    let newDay: number;

    if (viewMode === "month") {
      const prevMonthDate = subMonths(date, 1);
      newYear = prevMonthDate.getFullYear();
      newMonth = prevMonthDate.getMonth() + 1;
      newDay = prevMonthDate.getDate();
    } else {
      const prevWeekDate = subWeeks(date, 1);
      newYear = prevWeekDate.getFullYear();
      newMonth = prevWeekDate.getMonth() + 1;
      newDay = prevWeekDate.getDate();
    }
    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);
  }

  function switchViewMode(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    setViewMode(event.target.value);
  }

  useEffect(() => {
    router.push(`/calendar/view/${viewMode}/${year}/${month}/${day}`);
  }, [viewMode, year, month, day]);

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
        <CalendarModeSelector viewMode={viewMode} onChange={switchViewMode} />
      </div>
    </header>
  );
}
