"use client";
import type { ParamsProps } from "types/params";
import { WeeklyCalendar } from "@components/organisms/WeeklyCalendar";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addMonths } from "date-fns";

export default function Page({ params }: ParamsProps) {
  const date = new Date(params.year, params.month - 1, params.day);
  const router = useRouter();
  const [viewDate, setViewDate] = useState(date);

  return (
    <div>
      <WeeklyCalendar />
    </div>
  );
}
