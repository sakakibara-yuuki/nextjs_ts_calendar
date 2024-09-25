import styles from "./molecules.module.css";

interface WeeklyCalendarHeaderProps {
  firstDayOfWeek: Date;
  className?: string[];
}

export function WeeklyCalendarHeader({
  firstDayOfWeek = new Date(),
  className,
}: WeeklyCalendarHeaderProps) {
  if (className === undefined) {
    className = [];
  }

  const day = firstDayOfWeek.getDate();

  return (
    <div className={[...className, styles.weeklyCalendarHeader].join(" ")}>
      <div>
        日<p>{day - 1}</p>
      </div>
      <div>
        月<p>{day}</p>
      </div>
      <div>
        火<p>{day + 1}</p>
      </div>
      <div>
        水<p>{day + 2}</p>
      </div>
      <div>
        木<p>{day + 3}</p>
      </div>
      <div>
        金<p>{day + 4}</p>
      </div>
      <div>
        土<p>{day + 5}</p>
      </div>
    </div>
  );
}
