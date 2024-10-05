import styles from "../organisms.module.css";
import { CreateTaskButton } from "@components/atoms/CreateTaskButton";
import { useRouter } from "next/navigation";

interface SidebarProps {
  className?: string[];
}

export function Sidebar({ className = [] }: SidebarProps) {
  const router = useRouter();

  function createNewTask() {
    router.push("/calendar/view/week/2024/11/3");
  }

  return (
    <aside className={[...className, styles.sidebar].join(" ")}>
      <CreateTaskButton onClick={createNewTask} />
    </aside>
  );
}
