export interface PaginationButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  leftAndRight?: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function PaginationButton({
  primary = false,
  size = "medium",
  backgroundColor,
  leftAndRight = "left",
  onClick = () => {},
  ...props
}: PaginationButtonProps) {
  return (
    <button type="button" {...props} onClick={onClick}>
      {leftAndRight === "left" ? "<" : ">"}
    </button>
  );
}
