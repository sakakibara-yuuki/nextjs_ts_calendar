"use client";
import type { ParamsProps } from "types/params";
import { MonthlyCalendar } from "@components/organisms/MonthlyCalendar";
import { WeeklyCalendar } from "@components/organisms/WeeklyCalendar";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addMonths } from "date-fns";

export default function Page({ params }: ParamsProps) {
  const date = new Date(params.year, params.month - 1, params.day);
  const router = useRouter();
  const [viewDate, setViewDate] = useState(date);

  // for monthly
  function scrollHandler(e: React.WheelEvent<HTMLDivElement>) {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const day = viewDate.getDate();
    setViewDate(addMonths(viewDate, e.deltaY > 0 ? 1 : -1));
    router.prefetch(`/month/${year}/${month + 1 - 1}/${day}`);
    router.prefetch(`/month/${year}/${month + 1 + 1}/${day}`);
    router.replace(`/month/${year}/${month + 1}/${day}`);
  }

  if (params.calendarView === "month") {
    return (
      <div onWheel={(e) => scrollHandler(e)}>
        <MonthlyCalendar date={viewDate} />
      </div>
    );
  } else {
    return (
      <div>
        <WeeklyCalendar />
      </div>
    );
  }
}
