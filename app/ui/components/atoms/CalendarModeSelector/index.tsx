import styles from "./styles.module.css";

export interface CalendarModeSelectorProps {
  viewMode: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function CalendarModeSelector({
  viewMode,
  onChange = () => {},
}: CalendarModeSelectorProps) {
  return (
    <select
      value={viewMode}
      onChange={onChange}
      className={styles.calendarModeSelector}
    >
      <option value="month">月</option>
      <option value="week">週</option>
    </select>
  );
}
