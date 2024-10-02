/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface CloseButtonProps extends Omit<ButtonProps, "label"> {}

export function CloseButton({ primary = false, ...props }: CloseButtonProps) {
  return (
    <Button
      primary={primary}
      onClick={() => {
        console.log("hello");
      }}
      label="閉じるx"
    />
  );
}
