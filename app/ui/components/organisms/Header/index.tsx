import styles from "../organisms.module.css";
import { Pagination } from "@components/molecules/Pagination";
import { CalendarModeSelector } from "@components/atoms/CalendarModeSelector";
import { useParamsToDate } from "@hooks/useParamsToDate";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { addMonths, subMonths, addWeeks, subWeeks } from "date-fns";

interface HeaderProps {
  className?: string[];
}

export function Header({ className = [] }: HeaderProps) {
  const date = useParamsToDate();
  const pathname = usePathname();
  const firstViewMode = pathname.split("/")[3];
  const [viewMode, setViewMode] = useState(firstViewMode);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const router = useRouter();

  function routeNext() {
    if (viewMode === "month") {
      const nextMonthDate = addMonths(date, 1);
      const year = nextMonthDate.getFullYear();
      const month = nextMonthDate.getMonth() + 1;
      const day = nextMonthDate.getDate();
      router.push(`/calendar/view/month/${year}/${month}/${day}`);
    } else {
      const nextWeekDate = addWeeks(date, 1);
      const year = nextWeekDate.getFullYear();
      const month = nextWeekDate.getMonth() + 1;
      const day = nextWeekDate.getDate();
      router.push(`/calendar/view/week/${year}/${month}/${day}`);
    }
  }

  function routePrevious() {
    if (viewMode === "month") {
      const prevMonthDate = subMonths(date, 1);
      const year = prevMonthDate.getFullYear();
      const month = prevMonthDate.getMonth() + 1;
      const day = prevMonthDate.getDate();
      router.push(`/calendar/view/${viewMode}/${year}/${month}/${day}`);
    } else {
      const prevWeekDate = subWeeks(date, 1);
      const year = prevWeekDate.getFullYear();
      const month = prevWeekDate.getMonth() + 1;
      const day = prevWeekDate.getDate();
      router.push(`/calendar/view/${viewMode}/${year}/${month}/${day}`);
    }
  }

  function switchViewMode(event: React.ChangeEvent<HTMLSelectElement>) {
    setViewMode(event.target.value);
  }

  useEffect(() => {
    router.push(`/calendar/view/${viewMode}/${year}/${month}/${day}`);
  }, [viewMode, year, month, day, router]);

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
