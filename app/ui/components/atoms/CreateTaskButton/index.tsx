import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface CreateTaskButtonProps extends Omit<ButtonProps, "label"> {}

export function CreateTaskButton({
  primary = false,
  ...props
}: CreateTaskButtonProps) {
  return (
    <Button
      primary={primary}
      onClick={() => {
        console.log("hello");
      }}
      label="新規作成"
    />
  );
}
