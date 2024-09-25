import { Button } from "./Button";

// export interface EventButtonProps {
//   primary?: boolean;
//   backgroundColor?: string;
//   size?: 'small' | 'medium' | 'large';
//   label: string;
//   onClick?: () => void;
// }

export function EventButton({}) {
  const date = "2022";
  return (
    <Button
      primary={true}
      size="medium"
      backgroundColor="blue"
      onClick={() => {
        console.log("hello");
      }}
      label={date}
    />
  );
}
