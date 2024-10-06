/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import styles from "./styles.module.css";

interface EditButtonProps {
  className?: string;
  onClick: ButtonProps["onClick"];
}

export function EditButton({ className, onClick }: EditButtonProps) {
  return (
    <Button
      className={[`${className}`, styles.editButton]}
      onClick={onClick}
      label="編集✎"
    />
  );
}
