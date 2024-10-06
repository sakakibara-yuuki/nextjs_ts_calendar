export interface ButtonProps {
  className?: string[] | string;
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
      className={
        Array.isArray(className) ? [...className].join(" ") : className
      }
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}
