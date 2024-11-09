import { format } from "date-fns";

interface DailyDisplayProps {
  date?: Date;
}

export function DailyDisplay({ date = new Date() }: DailyDisplayProps) {
  return (
    <div>
      <p>{format(date, "yyyy/MM/dd")}</p>
    </div>
  );
}
