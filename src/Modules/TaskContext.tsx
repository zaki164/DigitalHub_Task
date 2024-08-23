import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TasksDataModel, TaskType } from "../config/types";
import { data } from "../Constants";

const TasksData = createContext<TasksDataModel>({
  Tasks: localStorage?.getItem("Tasks_List") ? JSON.parse(localStorage?.getItem("Tasks_List") || '') : data?.Tasks,
  setTasks: () => { },
});

const useTasksData = () => {
  return useContext(TasksData);
};

const TasksContext = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(localStorage?.getItem("Tasks_List") ? JSON.parse(localStorage?.getItem("Tasks_List") || '') : data?.Tasks);

  return (
    <TasksData.Provider value={{ Tasks: tasks, setTasks }}>
      {children}
    </TasksData.Provider>
  );
};

export { TasksContext, useTasksData };