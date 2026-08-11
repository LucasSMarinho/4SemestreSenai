import { ScrollView } from 'react-native';
import { TaskListStyle } from './TaskListStyle';
import TaskItem from '../taskItem/TaskItem.jsx';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from './context/TaskContext'
import axios from 'axios'


export default function TaskList() {
  const {listaTarefas, setListaTarefas} = useContext(TaskContext)

  useEffect(() => {
   try {
    funcGet()
   } catch (error) {
    console.log(error)
   }
  }, [])

  const funcGet = async() => {
    try {
      const apiResponse = await axios.get('http://172.16.36.48:3000/tasklist')
      setListaTarefas(apiResponse.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <ScrollView style={TaskListStyle.taskListContainer}>
     {listaTarefas.map((task)=>{
      return(
        <TaskItem nome={task.nome}/>
      )
     })}
    </ScrollView>
    </>
  );
}