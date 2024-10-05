export interface ButtonProps {
  className?: string[];
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({
  label,
  className = [],
  onClick = () => {},
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[...className].join(" ")}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}
