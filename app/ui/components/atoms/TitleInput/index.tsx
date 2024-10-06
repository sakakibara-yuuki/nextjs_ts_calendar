import styles from "./styles.module.css";

interface TitleInputProps {
  className?: string;
  defaultValue?: string;
}

export function TitleInput({ className, defaultValue = "" }: TitleInputProps) {
  return (
    <input
      type="text"
      placeholder="予定を入力してください"
      defaultValue={defaultValue}
      className={`${className} ${styles.titleInput}`}
    />
  );
}
