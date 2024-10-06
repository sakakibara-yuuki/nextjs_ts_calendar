import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface CreateTaskButtonProps {
  onClick: ButtonProps["onClick"];
  className?: ButtonProps["className"];
}

export function CreateTaskButton({
  onClick,
  className = [],
}: CreateTaskButtonProps) {
  return <Button className={className} onClick={onClick} label="＋新規作成" />;
}
