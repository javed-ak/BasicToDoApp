import { useEffect, useState } from "react"
import TodoCard from "./TodoCard"
import axios from "axios"
import useTodos from "../hooks/useTodos"

const AllTodos = () => {
    const [todos, setTodos] = useTodos();

    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) => <TodoCard key={todo._id} todo={todo} todos={todos} setTodos={setTodos}/>)}
        </div>
    )
}

export default AllTodos;