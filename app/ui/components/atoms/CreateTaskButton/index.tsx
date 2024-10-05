import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface CreateTaskButtonProps extends Omit<ButtonProps, "label"> {}

export function CreateTaskButton({
  onClick,
  className = [],
}: CreateTaskButtonProps) {
  return <Button className={className} onClick={onClick} label="＋新規作成" />;
}
