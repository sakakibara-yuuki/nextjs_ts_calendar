import { TaskType } from "types/task";
import { createContext } from "react";

type TaskListContextType = {
  taskList: TaskType[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

export const TaskListContext = createContext<TaskListContextType>({
  taskList: [],
  setTaskList: () => {},
});
