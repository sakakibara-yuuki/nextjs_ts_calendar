import styles from "./organisms.module.css";
import { CreateEventButton } from "../atoms/CreateEventButton";

interface SidebarProps {
  className?: string[];
}

export function Sidebar({ className }: SidebarProps) {
  if (className === undefined) {
    className = [];
  }
  return (
    <aside className={[...className, styles.sidebar].join(" ")}>
      <CreateEventButton />
    </aside>
  );
}
