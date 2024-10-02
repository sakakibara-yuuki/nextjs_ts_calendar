"use client";
import { MonthlyCalendar } from "@components/organisms/MonthlyCalendar";
import { useParamsToDate } from "@hooks/useParamsToDate";

export default function Page() {
  const date = useParamsToDate();

  return <MonthlyCalendar date={date} />;
}
