import type { ButtonProps } from "../Button";
import { Button } from "../Button";

interface SaveButtonProps extends Omit<ButtonProps, "label"> {}

export function SaveButton({ primary = false, ...props }: SaveButtonProps) {
  return (
    <Button
      primary={primary}
      onClick={() => {
        console.log("hello");
      }}
      label="保存"
    />
  );
}
