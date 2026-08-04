import { useEffect, useState } from 'react'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import './App.css'
import axios from 'axios'

function App() {
  const [tarefa, setTarefa] = useState("")
  const [tasklist, setTaskList] = useState([])
  const [edit, setEdit] = useState(false)
  const [idEdit, setIdEdit] = useState("")
  
  useEffect(() => {
    funcGet()
  }, [])


  const funcGet = async() => {
    try{
    const apiReturn = await axios.get("http://localhost:3000/tasklist")
    setTaskList(apiReturn.data)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  const funcPost = async() => {
    try{
    
    if(tarefa.length > 0)
    {
    await axios.post("http://localhost:3000/tasklist", {"nome": tarefa})
    setTarefa("")
    funcGet()
    }
    else
    {
      alert("Voce deve preencher a descrição da tarefa")
    }
    }
    catch(error)
    {
      console.log(error)
    }
  }  

  const funcDelete = async(id, nome) => {
    try{
    
    const returnPrompt = confirm(`Você deseja apagar essa a tarefa "${nome}"?`)
    
    if(returnPrompt == true)
    {
    await axios.delete(`http://localhost:3000/tasklist/${id}`)
    funcGet()
    }
    }
    catch(error)
    {
      console.log(error)
    }
  }

  const cancelEdit = () => {
   setTarefa("")
   setEdit(false)
  }


  const funcPreEdit = async(idEdit, nome) => {
    setEdit(true)
    setIdEdit(idEdit)    
    setTarefa(nome)
  }

  const funcEdit = async() => {
    try{

    const updatedTask = {
      "id": idEdit,
      "nome": tarefa
    }
    
    if(tarefa.length > 0)
    {
    await axios.put(`http://localhost:3000/tasklist/${idEdit}`, updatedTask)
    funcGet()

    setEdit(false)
    setTarefa("")
    }
    else
    {
      alert("preencha a descrição da tarefa que será atualizada")
    }

    }
    catch(error)
    {
      console.log(error)
    }
  }
  

  
  return (
    <>
    <header className='header-section'>
      <h1 className='header-section__title'>To do List</h1>
    </header>
    <main className='body-section'>
      <form>
      <input className='body-section__input' placeholder="Adicione uma tarefa" value={tarefa} onChange={(e) => {setTarefa(e.target.value)}}/>
      
       <Button buttonClass="add" buttonType="button" buttonFunc={edit == true? () => funcEdit(idEdit) : funcPost} buttonText={edit == true? "Editar tarefa" : "Adicionar"} buttonColor="#60A771"/>
        <Button buttonClass="cancel" buttonType="button" buttonFunc={() => cancelEdit(false)} buttonText="Cancelar edição" buttonColor="#f69400" buttonDisplay={edit == true ? "block" : "none"}/>
 
       </form>

       <section className='cadlist'>
        <ul>
         {tasklist.map((task) => (
    
            <Card key={task.id} cardText={task.nome} funcEdit={() => funcPreEdit(task.id, task.nome)} funcDelete={() => funcDelete(task.id, task.nome)}/>
           
         ))}
        </ul>
       </section>
    </main>
    <footer className='footer-section'>
      <p className='footer-section__right-text'> 2026 React List - Todos os direitos reservados</p>
    </footer>
    </>
  )
}

export default App
