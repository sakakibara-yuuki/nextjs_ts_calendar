export function TitleInput({
  title,
  setTitle,
}: {
  title: string;
  setTitle: (title: string) => void;
}) {
  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
