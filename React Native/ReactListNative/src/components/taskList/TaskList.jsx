import { Alert, ScrollView } from 'react-native';
import { TaskListStyle } from './TaskListStyle';
import TaskItem from '../taskItem/TaskItem.jsx';
import { useContext, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext.jsx'
import api from '../../services/FakeAPIServices.js';


export default function TaskList() {
  const {taskValue, setTaskValue, listaTarefas, setListaTarefas, setEdit, setTaskEditId} = useContext(TaskContext)

  useEffect(() => {
   try {
    funcGet()
   } catch (error) {
    console.log(error)
   }
  }, [])

  const funcGet = async() => {
    try {
      const tarefa = {
       nome: taskValue
      }
      
      const apiResponse = await api.get('/tasklist')
      setListaTarefas(apiResponse.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async(task) => {
      Alert.alert(`Deletando tarefa`, `Você tem certeza que deseja deletar a tarefa ${task.nome}`, [{
        text: 'Cancelar',
        style: 'cancel'
      }, 
      {
        text: 'Sim',
        onPress: async() => {
          try{
          await api.delete(`/tasklist/${task.id}`)
          funcGet()
        } catch (error) {
      console.log(error)
      }}

      }])
  }

  const preEditTask = async(task) => {
    try {
      setEdit(true)
      setTaskValue(task.nome)
      setTaskEditId(task.id)
    } catch (error) {
      console.log(error)
      setEdit(false)
    }
  }

  return (
    <>
    <ScrollView style={TaskListStyle.taskListContainer}>
     {listaTarefas.map((task)=>{
      return(
        <TaskItem id={task.id} key={task.id} nome={task.nome} funcEdit={() => preEditTask(task)} funcDelete={() => deleteTask(task)}/>
      )
     })}
    </ScrollView>
    </>
  );
}