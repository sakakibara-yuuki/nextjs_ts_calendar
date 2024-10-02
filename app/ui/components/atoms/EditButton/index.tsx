/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface EditButtonProps extends Omit<ButtonProps, "label"> {}

export function EditButton({ primary = false, ...props }: EditButtonProps) {
  return (
    <Button
      primary={primary}
      onClick={() => {
        console.log("hello");
      }}
      label="編集✎"
    />
  );
}
