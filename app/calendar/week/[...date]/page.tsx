"use client";
import { WeeklyCalendar } from "@components/organisms/WeeklyCalendar";
import { useParamsToDate } from "@hooks/useParamsToDate";
import { useState } from "react";

export default function Page() {
  const date = useParamsToDate();
  const [viewDate] = useState(date);

  return <WeeklyCalendar date={viewDate} />;
}
