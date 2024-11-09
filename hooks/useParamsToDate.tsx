import { useParams } from "next/navigation";

export type Params = {
  date: string[];
};

export function useParamsToDate(): Date {
  // custom hook
  const params = useParams<Params>();
  const [year, month, day] = params.date.map((item) => parseInt(item));

  if (year == undefined) {
    return new Date();
  }
  if (month == undefined) {
    return new Date(year);
  }
  if (day == undefined) {
    return new Date(year, month - 1);
  }
  return new Date(year, month - 1, day);
}
