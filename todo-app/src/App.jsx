import { useEffect, useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (response) => {
        const json = await response.json();
        setTodos(json.todos);
    })
  }, [])

  return (
    <>
    <Todos todos = {todos}/>
    </>
  )
}

export default App
