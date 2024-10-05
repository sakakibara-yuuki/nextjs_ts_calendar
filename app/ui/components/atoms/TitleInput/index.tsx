interface TitleInputProps {
  //setTitle?: (title: string) => void;
  defaultValue?: string;
}

export function TitleInput({ defaultValue = "" }: TitleInputProps) {
  return (
    <input
      type="text"
      placeholder="予定を入力してください"
      defaultValue={defaultValue}
    />
  );
}
