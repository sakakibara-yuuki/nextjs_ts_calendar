import styles from './styles.module.css';
import { format, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import { WeeklyCalendarHeader } from '../molecules/WeeklyCalendarHeader';
import { WeeklyCalendarCell } from '../molecules/WeeklyCalendarCell';

export function WeeklyCalendar() {

  const today: Date = new Date();
  const firstDayOfWeek: Date = startOfWeek(today);
  const lastDayOfWeek: Date = endOfWeek(today);
  const weeklyDays = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  })

  return (
    <div className={styles.weeklyContainer}>
      <WeeklyCalendarHeader
        className={styles.weeklyCalendarHeader}
        firstDayOfWeek={firstDayOfWeek}
      />
      <div className={styles.weeklyCalendarCells}>
        {
          weeklyDays.map((day) => {
            return (
              <WeeklyCalendarCell
                className={styles.weeklyCalendarCell}
                key={format(day, "yyyy/MM/dd")} day={day} />
            );
          })
        }
      </div>
    </div>
  );
}
