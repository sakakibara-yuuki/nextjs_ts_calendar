export interface CalendarModeSelectorProps {
  date: Date;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export function CalendarModeSelector({
  date,
  primary = false,
  size = "medium",
  backgroundColor,
  ...props
}: CalendarModeSelectorProps) {
  return (
    <select {...props}>
      <option value="week">週</option>
      <option value="month">月</option>
    </select>
  );
}
