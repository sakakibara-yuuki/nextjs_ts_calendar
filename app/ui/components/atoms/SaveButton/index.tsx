import type { ButtonProps } from "../Button";
import { Button } from "../Button";

interface SaveButtonProps extends Omit<ButtonProps, "label"> {}

export function SaveButton({ primary = false, onClick }: SaveButtonProps) {
  return <Button primary={primary} onClick={onClick} label="保存" />;
}
