export interface CalendarModeSelectorProps {
  viewMode: string;
  onChange?: (e: React.ChangeTask<HTMLSelectElement>) => void;
}

export function CalendarModeSelector({
  viewMode,
  onChange = () => {},
}: CalendarModeSelectorProps) {
  return (
    <select value={viewMode} onChange={(e) => onChange(e)}>
      <option value="month">月</option>
      <option value="week">週</option>
    </select>
  );
}
