import { Dispatch, SetStateAction } from "react"

export type TaskType = {
  id: string,
  status: string,
  name: string,
  description: string
}

export interface TasksDataModel {
  Tasks: TaskType[]
  setTasks: Dispatch<SetStateAction<TaskType[]>>
}