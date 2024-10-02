/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface CloseButtonProps extends Omit<ButtonProps, "label"> {}

export function CloseButton({
  primary = false,
  onClick,
  ...props
}: CloseButtonProps) {
  return (
    <Button primary={primary} onClick={onClick} label="閉じるx" {...props} />
  );
}
