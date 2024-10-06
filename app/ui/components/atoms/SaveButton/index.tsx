import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import styles from "./styles.module.css";

interface SaveButtonProps extends Omit<ButtonProps, "label"> {}

export function SaveButton({ className, onClick }: SaveButtonProps) {
  return (
    <Button
      className={[`${className}`, styles.saveButton]}
      onClick={onClick}
      label="保存"
    />
  );
}
