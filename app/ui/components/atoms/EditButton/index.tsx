/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import styles from "./styles.module.css";

interface EditButtonProps extends Omit<ButtonProps, "label"> {}

export function EditButton({ className, onClick, ...props }: EditButtonProps) {
  return (
    <Button
      className={[`${className}`, styles.editButton]}
      onClick={onClick}
      label="編集✎"
      {...props}
    />
  );
}
