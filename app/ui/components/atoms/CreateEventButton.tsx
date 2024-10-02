import { Button } from "./Button";
import type { ButtonProps } from "./Button";

interface CreateEventButtonProps extends Omit<ButtonProps, "label"> {}

export function CreateEventButton({
  primary = false,
  ...props
}: CreateEventButtonProps) {
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
