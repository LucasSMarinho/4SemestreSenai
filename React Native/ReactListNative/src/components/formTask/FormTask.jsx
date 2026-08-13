import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FormTaskStyles } from './FormTaskStyle';
import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import api from '../../services/FakeAPIServices';

function FormTask() {
  const {listaTarefas, setListaTarefas, taskValue, setTaskValue, edit, setEdit, taskEditId} = useContext(TaskContext)
  
  const funcGet = async() => {
    try {
      const apiResponse = await api.get('/tasklist')
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
        
        
        await api.post('/tasklist', tarefa)
        setListaTarefas([...listaTarefas, tarefa])
        funcGet()

      } catch (error) {
        console.log(error)
      }
    }

    const updateTask = async() => {
      try {
        const tarefa = {
          nome: taskValue
        }
        
        await api.put(`/tasklist/${taskEditId}`, tarefa)
        setListaTarefas([...listaTarefas, tarefa])
        funcGet()

        setEdit(false)
        setTaskValue("")

      } catch (error) {
        console.log(error)
        setEdit(false)
        setTaskValue("")
      }
    }

    const cancelUpdate = () => {
      setEdit(false)
      setTaskValue("")
    }

  return (
    <View style={FormTaskStyles.frmCadTask}>
      <TextInput style={FormTaskStyles.taskInputName} placeholder='Adicione uma tarefa' value={taskValue} onChangeText={(textWrote) => {setTaskValue(textWrote)}}/>
      <TouchableOpacity style={FormTaskStyles.taskBottom} onPress={() => {edit != true ? saveTask() : updateTask()}}>
      <Text style={FormTaskStyles.taskBottomText}> {edit != true ? "Adicionar" : "Atualizar" }</Text>
      </TouchableOpacity>
      <TouchableOpacity style={edit == true ? FormTaskStyles.cancelBottomShow : FormTaskStyles.cancelBottomHide} onPress={() => cancelUpdate()}>
      <Text style={FormTaskStyles.taskBottomText}> Cancelar Edição</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FormTask;