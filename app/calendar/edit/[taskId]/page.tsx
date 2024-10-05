"use client";
import { CloseButton } from "@components/atoms/CloseButton";
import { SaveButton } from "@components/atoms/SaveButton";
import { TitleInput } from "@components/atoms/TitleInput";
import { TaskListContext } from "context/tasklist";
import { useContext } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

export default function Page() {
  const { taskList, setTaskList } = useContext(TaskListContext);
  const params = useParams<{ taskId: string }>();

  const selectedTask = taskList.find((t) => t.id === params.taskId);

  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const dateParams = searchParams.get("date");
  const date = dateParams ? new Date(dateParams) : new Date();
  const router = useRouter();

  function backClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    router.push(`/calendar/view/${view}/${year}/${month}/${day}`);
  }

  function saveClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newtitle = event.currentTarget.form!.elements[1] as HTMLInputElement;
    setTaskList(
      taskList.map((task) => {
        if (task.id === selectedTask!.id) {
          return { ...task, title: newtitle.value };
        }
        return task;
      }),
    );
    backClick(event);
  }

  return (
    <form>
      <CloseButton onClick={backClick} />
      <TitleInput defaultValue={selectedTask!.title} />
      <SaveButton onClick={saveClick} />
      <p>{format(selectedTask!.date, "yyyy/MM/dd")}</p>
    </form>
  );
}
