export interface PaginationButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  leftAndRight?: 'left' | 'right';
  onClick?: () => void;
}

export function PaginationButton({
  primary = false,
  size = 'medium',
  backgroundColor,
  leftAndRight = 'left',
  ...props
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      {...props}
    >
      {leftAndRight === 'left' ? '<' : '>'}
    </button>
  );
}
