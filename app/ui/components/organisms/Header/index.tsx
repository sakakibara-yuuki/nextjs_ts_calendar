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
  const [routeDate, setRouteDate] = useState(date);

  function routeNext() {
    let nextDate: Date;

    if (viewMode === "month") {
      nextDate = addMonths(date, 1);
    } else {
      nextDate = addWeeks(date, 1);
    }
    setRouteDate(nextDate);
  }

  function routePrevious() {
    let prevDate: Date;

    if (viewMode === "month") {
      prevDate = subMonths(date, 1);
    } else {
      prevDate = subWeeks(date, 1);
    }
    setRouteDate(prevDate);
  }

  function switchViewMode(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    setViewMode(event.target.value);
  }

  useEffect(() => {
    router.push(
      `/calendar/view/${viewMode}/${routeDate.getFullYear()}/${routeDate.getMonth() + 1}/${routeDate.getDate()}`,
    );
  }, [viewMode, routeDate]);

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
