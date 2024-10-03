interface TitleInputProps {
  setTitle?: (title: string) => void;
}

export function TitleInput({}: TitleInputProps) {
  return <input type="text" placeholder="予定を入力してください" />;
}
