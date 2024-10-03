import styles from "../organisms.module.css";
import { CreateTaskButton } from "@components/atoms/CreateTaskButton";

interface SidebarProps {
  className?: string[];
}

export function Sidebar({ className }: SidebarProps) {
  if (className === undefined) {
    className = [];
  }
  return (
    <aside className={[...className, styles.sidebar].join(" ")}>
      <CreateTaskButton />
    </aside>
  );
}
