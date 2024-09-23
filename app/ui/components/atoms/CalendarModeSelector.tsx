export interface CalendarModeSelectorProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export function CalendarModeSelector({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CalendarModeSelectorProps) {
  return (
    <select {...props}>
      <option value="week">週</option>
      <option value="month">月</option>
    </select>
  );
}
