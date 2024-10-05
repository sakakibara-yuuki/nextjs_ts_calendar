"use client";
import { WeeklyCalendar } from "@components/organisms/WeeklyCalendar";
import { useParamsToDate } from "@hooks/useParamsToDate";

export default function Page() {
  const date = useParamsToDate();

  return <WeeklyCalendar date={date} />;
}
