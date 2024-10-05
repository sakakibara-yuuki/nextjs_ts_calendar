import styles from "../molecules.module.css";
import { addDays } from "date-fns";

interface WeeklyCalendarHeaderProps {
  firstDayOfWeek: Date;
  className?: string[];
}

export function WeeklyCalendarHeader({
  firstDayOfWeek = new Date(),
  className = [],
}: WeeklyCalendarHeaderProps) {
  return (
    <div className={[...className, styles.weeklyCalendarHeader].join(" ")}>
      <div>
        日<p>{addDays(firstDayOfWeek, 0).getDate()}</p>
      </div>
      <div>
        月<p>{addDays(firstDayOfWeek, 1).getDate()}</p>
      </div>
      <div>
        火<p>{addDays(firstDayOfWeek, 2).getDate()}</p>
      </div>
      <div>
        水<p>{addDays(firstDayOfWeek, 3).getDate()}</p>
      </div>
      <div>
        木<p>{addDays(firstDayOfWeek, 4).getDate()}</p>
      </div>
      <div>
        金<p>{addDays(firstDayOfWeek, 5).getDate()}</p>
      </div>
      <div>
        土<p>{addDays(firstDayOfWeek, 6).getDate()}</p>
      </div>
    </div>
  );
}
