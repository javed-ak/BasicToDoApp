import axios from "axios"
import Button from "./Button"
import { toast, ToastContainer } from "react-toastify";

const TodoCard = ({todo, todos, setTodos}) => {
    const todoId = todo._id;
    const notifyTodoDeleted = () => toast.success('Todo deleted successfully')
    const notifyTodoUpdated = () => toast.success('Todo Marked as Done')
    const notifyError = () => toast.error('Something went wrong')

    const deleteTodo = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/todo/${todoId}`, 
                {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }
            )
            notifyTodoDeleted();
            setTodos(todos.filter(t => t._id !== todo._id))
        }catch (err) {
            notifyError();
            console.log('Something went wrong')
        }
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
        notifyTodoUpdated();
        setTodos(todos.map(t => t._id === todo._id ? {...t, isDone: true} : t))
    }

    return (
        <div className="relative p-5 shadow-sm max-w-lg rounded-lg bg-slate-50 flex flex-col gap-3">
            {todo.isDone && <span className=" absolute top-5 right-5 border rounded-lg bg-green-400 text-white text-xs p-1 font-bold">Done</span>}
            <div className="text-2xl font-semibold">{todo.title}</div>
            <div>{todo.description}</div>
            <div className="flex gap-3 max-w-lg">
                {!todo.isDone && <Button onClick={markAsDone} title={'Mark as Done'}/>}
                <Button onClick={deleteTodo} title={'Delete'}/>
                {/* <ToastContainer /> */}
            </div>
        </div>
    )
}

export default TodoCard;