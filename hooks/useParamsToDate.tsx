import { useParams } from "next/navigation";

export function useParamsToDate() {
  // custom hook
  type Params = {
    calendarView: string;
    year: string;
    month: string;
    day: string;
  };

  const params = useParams<Params>();
  const calendarView = params.calendarView;

  const date = new Date(
    parseInt(params.year),
    parseInt(params.month) - 1,
    parseInt(params.day),
  );

  return { calendarView, date };
}
