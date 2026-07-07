import axios from "axios"
import Button from "./Button"

const TodoCard = ({todo, todos, setTodos}) => {
    const todoId = todo._id;
    const deleteTodo = async () => {
        await axios.delete(`http://localhost:3000/api/v1/todo/${todoId}`, 
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        setTodos(todos.filter(t => t._id !== todo._id))
    }

    const markAsDone = async () => {
        await axios.put(`http://localhost:3000/api/v1/todo/${todoId}`,
            {
                isDone: true
            },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        
        setTodos(todos.map(t => t._id === todo._id ? {...t, isDone: true} : t))
    }

    return (
        <div className="p-5 shadow-sm max-w-lg rounded-lg bg-slate-50 flex flex-col gap-3">
            <div className="text-2xl font-semibold">{todo.title}</div>
            <div>{todo.description}</div>
            <div className="flex gap-3 max-w-lg">
                {!todo.isDone && <Button onClick={markAsDone} title={'Mark as Done'}/>}
                <Button onClick={deleteTodo} title={'Delete'}/>
            </div>
        </div>
    )
}

export default TodoCard;