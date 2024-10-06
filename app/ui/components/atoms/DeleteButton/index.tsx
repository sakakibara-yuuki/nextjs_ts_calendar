/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import styles from "./styles.module.css";

interface DeleteButtonProps extends Omit<ButtonProps, "label"> {}

export function DeleteButton({ onClick, ...props }: DeleteButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={styles.deleteButton}
      label="削除🗑"
      {...props}
    />
  );
}
