"use client";
import { CloseButton } from "@components/atoms/CloseButton";
import { SaveButton } from "@components/atoms/SaveButton";
import { TitleInput } from "@components/atoms/TitleInput";
import { TaskListContext } from "context/tasklist";
import { useContext } from "react";
import { useParams } from "next/navigation";
import { DailyDisplay } from "@components/atoms/DailyDisplay";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page() {
  const { taskList, setTaskList } = useContext(TaskListContext);
  const params = useParams<{ taskId: string }>();

  const selectedTask = taskList.find((t) => t.id === params.taskId);
  const router = useRouter();

  function backClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.back();
  }

  function saveClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newtitle = event.currentTarget.form!.elements[1] as HTMLInputElement;

    setTaskList(
      taskList
        .map((task) => {
          if (task.id === selectedTask!.id) {
            return { ...task, title: newtitle.value };
          }
          return task;
        })
        .filter((task) => task.title !== ""),
    );
    backClick(event);
  }

  return (
    <form className={styles.editPage}>
      <CloseButton className={styles.closeButton} onClick={backClick} />
      <TitleInput
        className={styles.titleInput}
        defaultValue={selectedTask!.title}
      />
      <SaveButton className={styles.saveButton} onClick={saveClick} />
      <DailyDisplay date={selectedTask!.date} />
    </form>
  );
}
