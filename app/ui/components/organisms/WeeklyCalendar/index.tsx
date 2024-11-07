import styles from "../organisms.module.css";
import { format, eachDayOfInterval, startOfWeek, endOfWeek } from "date-fns";
import { WeeklyCalendarHeader } from "@components/molecules/WeeklyCalendarHeader";
import { WeeklyCalendarCell } from "@components/molecules/WeeklyCalendarCell";
import { useRouter } from "next/navigation";
import { TaskAddModal } from "@components/organisms/TaskAddModal";
import { Portal } from "@components/molecules/Portal";
import { TaskEditModal } from "@components/organisms/TaskEditModal";
import { TaskType } from "types/task";
import { useState } from "react";
import { TaskListContext } from "context/tasklist";
import { useContext } from "react";
import { isSameDay } from "date-fns";

interface WeeklyCalendarProps {
  date?: Date;
}

export function WeeklyCalendar({ date = new Date() }: WeeklyCalendarProps) {
  const router = useRouter();
  const { taskList, setTaskList } = useContext(TaskListContext);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTask, setSelectedTask] = useState<TaskType>();

  const firstDayOfWeek: Date = startOfWeek(date);
  const lastDayOfWeek: Date = endOfWeek(date);
  const weeklyDays = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  function closeAllModal() {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
  }

  function openTaskAddModal(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    closeAllModal();
    const selected = event.currentTarget.closest("[data-id]");
    const day = (selected as HTMLDivElement).dataset.id;
    const selectedDate = new Date(Date.parse(day!));
    setSelectedDate(selectedDate);
    setIsAddModalOpen(true);
  }

  function closeTaskAddModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    closeAllModal();
  }

  function openTaskEditModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    const target = event.currentTarget.closest("[data-id]");
    const taskId = (target as HTMLElement).dataset.id;
    setIsEditModalOpen(true);
    for (const task of taskList) {
      if (task.id === taskId) {
        setSelectedTask(task);
        break;
      }
    }
  }

  function closeTaskEditModal() {
    closeAllModal();
  }

  function addTask(event: React.MouseEvent<HTMLButtonElement>) {
    const title = event.currentTarget.form!.elements[1] as HTMLInputElement;
    if (title.value === "") {
      alert("Title is required");
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      title: title.value,
      date: selectedDate,
    };
    setTaskList([...taskList, newTask]);
    closeAllModal();
  }

  console.log("========");
  console.log(isAddModalOpen);
  console.log(isEditModalOpen);
  console.log("========");

  function deleteTask() {
    setTaskList(taskList.filter((task) => task.id !== selectedTask!.id));
    closeAllModal();
  }

  function editTask() {
    router.push(
      `/calendar/edit/${selectedTask!.id}?view=week&date=${format(selectedTask!.date, "yyyy-MM-dd")}`,
    );
  }

  return (
    <>
      <div className={styles.weeklyContainer} id="model">
        <WeeklyCalendarHeader
          className={[styles.weeklyCalendarHeader]}
          firstDayOfWeek={firstDayOfWeek}
        />
        <div className={styles.weeklyCalendarCells}>
          {weeklyDays.map((date) => {
            return (
              <WeeklyCalendarCell
                className={styles.weeklyCalendarCell}
                key={format(date, "yyyy/MM/dd")}
                date={date}
                modalOpen={openTaskAddModal}
                tasks={taskList.filter((task) => isSameDay(task.date, date))}
                openEditModal={openTaskEditModal}
              />
            );
          })}
        </div>
      </div>
      {isAddModalOpen && (
        <Portal>
          <TaskAddModal
            toggleModal={closeTaskAddModal}
            date={selectedDate}
            addTask={addTask}
          />
        </Portal>
      )}
      {isEditModalOpen && (
        <Portal>
          <TaskEditModal
            title={selectedTask!.title}
            date={selectedTask!.date}
            editTask={editTask}
            deleteTask={deleteTask}
            closeTaskEditModal={closeTaskEditModal}
          />
        </Portal>
      )}
    </>
  );
}
