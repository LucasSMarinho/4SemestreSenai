import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [taskValue, setTaskValue] = useState("")
  const [listaTarefas, setListaTarefas] = useState([])
  const [edit, setEdit] = useState(false)
  const [taskEditId, setTaskEditId] = useState("")

  
  return (
    <TaskContext.Provider value={ {taskValue, setTaskValue, setListaTarefas, listaTarefas, edit, setEdit, taskEditId, setTaskEditId} }>
      {children}
    </TaskContext.Provider>
  )
}