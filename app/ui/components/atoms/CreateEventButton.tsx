import { Button } from './Button';
import type { ButtonProps } from './Button';

export interface CreateEventButtonProps extends ButtonProps {
}

export function CreateEventButton({
  primary = false,
  size = 'medium',
  backgroundColor,
  label = '新規制作',
  ...props
}: CreateEventButtonProps) {
  return (
    <Button
      primary={primary}
      size="medium"
      backgroundColor="blue"
      onClick={() => {console.log("hello")}}
      label='新規制作'
    />
  );
}
