import type { ParamsProps } from "../../../../layout";

export default function Page({ params }: ParamsProps) {
  return (
    <div>
      <h1>Calendar</h1>
      <p>Calendar view: {params.calendarView}</p>
      <p>Year: {params.year}</p>
      <p>Month: {params.month}</p>
      <p>Day: {params.day}</p>
    </div>
  );
}
