import { Button } from "../Button";

interface TaskButtonProps {
  label: string;
  id?: string;
  className?: string;
  openEditModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function TaskButton({
  label,
  id,
  openEditModal,
  className,
}: TaskButtonProps) {
  return (
    <Button
      data-id={id}
      className={className}
      onClick={openEditModal}
      label={label}
    />
  );
}
