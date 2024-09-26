import type { ParamsProps } from "../../../../layout";
import { MonthlyCalendar } from "@components/organisms/MonthlyCalendar";

export default function Page({ params }: ParamsProps) {
  const date = new Date(params.year, params.month - 1, params.day);

  return (
    <div>
      <MonthlyCalendar date={date} />
    </div>
  );
}
