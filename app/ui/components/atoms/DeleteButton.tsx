/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "./Button";
import type { ButtonProps } from "./Button";

interface DeleteButtonProps extends Omit<ButtonProps, "label"> {}

export function DeleteButton({ primary = false, ...props }: DeleteButtonProps) {
  return (
    <Button
      primary={primary}
      onClick={() => {
        console.log("hello");
      }}
      label="削除🗑"
    />
  );
}
