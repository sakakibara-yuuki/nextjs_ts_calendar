import { useParams } from "next/navigation";

export function useParamsToDate() {
  // custom hook
  type Params = {
    date: string[];
  };

  const params = useParams<Params>();
  const dates = params.date.map((item) => parseInt(item));
  let date: Date;

  if (dates[0] == undefined) {
    date = new Date();
  }
  if (dates[1] == undefined) {
    date = new Date(dates[0]);
  }
  if (dates[2] == undefined) {
    date = new Date(dates[0], dates[1] - 1);
  }

  date = new Date(dates[0], dates[1] - 1, dates[2]);

  return date;
}
