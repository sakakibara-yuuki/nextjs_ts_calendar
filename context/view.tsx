/*
 * view.tsx
 * Copyright (C) 2024 sakakibara <sakakibara@organon>
 *
 * Distributed under terms of the MIT license.
 */
import { createContext } from "react";

type TaskListContextType = {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const TaskListContext = createContext<TaskListContextType>({
  viewMode: "month",
  setViewMode: () => {},
  date: new Date(),
  setDate: () => {},
});
