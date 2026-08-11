import { useState } from "react";
import { TemaContext } from "./TemaContext";

export const TemaProvider = ({ children }) => {
  const [tarefa, setTarefa] = useState("")
  const [listaTarefas, setListaTarefas] = useState([])

  
  return (
    <TemaContext.Provider value={ {tarefa, setTarefa, setListaTarefas, listaTarefas} }>
      {children}
    </TemaContext.Provider>
  )
}