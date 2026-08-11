import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FormTaskStyles } from './FormTaskStyle';
import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import axios from 'axios';

function FormTask() {
  const [taskValue, setTaskValue] = useState("")
  const {listaTarefas, setListaTarefas} = useContext(TaskContext)
  
  const funcGet = async() => {
    try {
      const apiResponse = await axios.get('http://172.16.36.48:3000/tasklist')
      setListaTarefas(apiResponse.data)
    } catch (error) {
      console.log(error)
    }
  }


  const saveTask = async() => {
      try {
        const tarefa = {
          nome: taskValue
        }
        
        funcGet()
        await axios.post('http://172.16.36.48:3000/tasklist', tarefa)
        setListaTarefas(...listaTarefas, tarefa)

      } catch (error) {
        console.log(error)
      }
    }

  return (
    <View style={FormTaskStyles.frmCadTask}>
      <TextInput style={FormTaskStyles.taskInputName} placeholder='Adicione uma tarefa' value={taskValue} onChangeText={(textWrote) => {setTaskValue(textWrote)}}/>
      <TouchableOpacity style={FormTaskStyles.taskBottom}>
      <Text style={FormTaskStyles.taskBottomText} onPress={() => {saveTask()}}>Adicionar</Text>
      </TouchableOpacity>
      <Text style={FormTaskStyles.taskBottomText}>{taskValue}</Text>
    </View>
  );
}

export default FormTask;