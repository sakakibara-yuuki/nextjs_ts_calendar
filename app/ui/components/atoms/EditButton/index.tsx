/*
 * EditButton.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { Button } from "../Button";
import type { ButtonProps } from "../Button";

interface EditButtonProps extends Omit<ButtonProps, "label"> {}

export function EditButton({ onClick, ...props }: EditButtonProps) {
  return <Button primary={false} onClick={onClick} label="編集✎" {...props} />;
}
