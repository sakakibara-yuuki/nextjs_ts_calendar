import { Button } from "@components/atoms/Button";

export interface PaginationButtonProps {
  className?: string[];
  leftAndRight?: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function PaginationButton({
  className = [],
  leftAndRight = "left",
  onClick = () => {},
}: PaginationButtonProps) {
  return (
    <Button
      className={className}
      onClick={onClick}
      label={leftAndRight === "left" ? "<" : ">"}
    />
  );
}
