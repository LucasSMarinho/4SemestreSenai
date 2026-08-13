import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tarefa, setTarefa] = useState("")
  const [listaTarefas, setListaTarefas] = useState([])

  
  return (
    <TaskContext.Provider value={ {tarefa, setTarefa, setListaTarefas, listaTarefas} }>
      {children}
    </TaskContext.Provider>
  )
}