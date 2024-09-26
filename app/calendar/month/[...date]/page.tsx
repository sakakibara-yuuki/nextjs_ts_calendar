"use client";
import { MonthlyCalendar } from "@components/organisms/MonthlyCalendar";
import { useParamsToDate } from "@hooks/useParamsToDate";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addMonths } from "date-fns";

export default function Page() {
  const date = useParamsToDate();
  const router = useRouter();
  const [viewDate, setViewDate] = useState(date);

  // for monthly
  function scrollHandler(e: React.WheelEvent<HTMLDivElement>) {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const day = viewDate.getDate();
    setViewDate(addMonths(viewDate, e.deltaY > 0 ? 1 : -1));
    router.prefetch(`/calendar/month/${year}/${month + 1 - 1}/${day}`);
    router.prefetch(`/calendar/month/${year}/${month + 1 + 1}/${day}`);
    router.replace(`/calendar/month/${year}/${month + 1}/${day}`);
  }

  return (
    <div onWheel={(e) => scrollHandler(e)}>
      <MonthlyCalendar date={viewDate} />
    </div>
  );
}
