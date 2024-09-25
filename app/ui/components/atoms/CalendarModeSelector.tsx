export interface CalendarModeSelectorProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export function CalendarModeSelector({
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
