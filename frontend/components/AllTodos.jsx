import { useEffect, useState } from "react"
import TodoCard from "./TodoCard"
import axios from "axios"

const AllTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:3000/api/v1/todos',
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }
            )
            setTodos(response.data.todos)
        }
        fetchTodos();
    }, [])

    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) => <TodoCard key={todo._id} todo={todo} todos={todos} setTodos={setTodos}/>)}
        </div>
    )
}

export default AllTodos;