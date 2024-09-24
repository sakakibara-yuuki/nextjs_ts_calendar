import styles from './styles.module.css';
import { EventButton } from '../atoms/EventButton';

interface WeeklyCalendarCellProps {
  day: Date;
  className?: string;
}

export function WeeklyCalendarCell({
  day = new Date(),
  className,
  ...props
}: WeeklyCalendarCellProps) {
  return (
    <div
      className={styles.weeklyCalendarCell}
      {...props}>
      <EventButton />
      <EventButton />
    </div>
  );
};
