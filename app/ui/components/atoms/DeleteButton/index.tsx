/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface DeleteButtonProps extends Omit<ButtonProps, "label"> {}

export function DeleteButton({ onClick, ...props }: DeleteButtonProps) {
  return <Button primary={false} onClick={onClick} label="削除🗑" {...props} />;
}
