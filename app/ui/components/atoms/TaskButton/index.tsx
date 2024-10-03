import { Button } from "../Button";

//export interface TaskButtonProps {
//  primary?: boolean;
//  backgroundColor?: string;
//  size?: 'small' | 'medium' | 'large';
//  label: string;
//  onClick?: () => void;
//}

interface TaskButtonProps {
  label: string;
  id?: string;
  openEditModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function TaskButton({ label, id, openEditModal }: TaskButtonProps) {
  return (
    <div data-id={id}>
      <Button
        primary={true}
        size="medium"
        backgroundColor="blue"
        onClick={openEditModal}
        label={label}
      />
    </div>
  );
}
