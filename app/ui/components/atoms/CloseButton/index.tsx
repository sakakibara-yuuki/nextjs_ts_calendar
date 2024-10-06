/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import styles from "./styles.module.css";

interface CloseButtonProps {
  onClick: ButtonProps["onClick"];
  className?: ButtonProps["className"];
}

export function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={
        Array.isArray(className)
          ? [...className, styles.closeButton]
          : `${className} ${styles.closeButton}`
      }
      label="閉じるx"
    />
  );
}
