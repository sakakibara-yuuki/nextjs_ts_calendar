"use client";
import { MonthlyCalendar } from "@components/organisms/MonthlyCalendar";
import { useParamsToDate } from "@hooks/useParamsToDate";

export default function Page() {
  const date = useParamsToDate();
  console.log("= from app/calendar/view/month/[...date]/page.tsx =====");
  console.log(date);

  return <MonthlyCalendar date={date} />;
}
