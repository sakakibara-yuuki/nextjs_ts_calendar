interface TitleDisplayProps {
  title: string;
  setTitle?: () => void;
}

export function TitleDisplay({ title }: TitleDisplayProps) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}
