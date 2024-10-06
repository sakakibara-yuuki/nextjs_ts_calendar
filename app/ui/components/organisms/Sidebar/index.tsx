import styles from "../organisms.module.css";
import { CreateTaskButton } from "@components/atoms/CreateTaskButton";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { TaskListContext } from "context/tasklist";
import { useContext } from "react";

interface SidebarProps {
  className?: string[];
}

export function Sidebar({ className = [] }: SidebarProps) {
  const router = useRouter();
  const { taskList, setTaskList } = useContext(TaskListContext);

  function createNewTask() {
    const newTask = {
      id: crypto.randomUUID(),
      title: "",
      date: new Date(),
    };
    setTaskList([...taskList, newTask]);
    router.push(
      `/calendar/edit/${newTask.id}?view=month&date=${format(newTask.date, "yyyy-MM-dd")}`,
    );
  }

  return (
    <aside className={[...className, styles.sidebar].join(" ")}>
      <CreateTaskButton onClick={createNewTask} />
    </aside>
  );
}
