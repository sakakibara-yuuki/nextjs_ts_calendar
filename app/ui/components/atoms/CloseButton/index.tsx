/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import styles from "./styles.module.css";

interface CloseButtonProps extends Omit<ButtonProps, "label"> {}

export function CloseButton({
  onClick,
  className,
  ...props
}: CloseButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={
        Array.isArray(className)
          ? [...className, styles.closeButton]
          : `${className} ${styles.closeButton}`
      }
      label="閉じるx"
      {...props}
    />
  );
}
