import { useEffect, useState } from "react"
import TodoCard from "./TodoCard"
import axios from "axios"
import useTodos from "../hooks/useTodos"
import { useRecoilValue } from "recoil"
import { isLoading } from "../src/store/atoms/isLogin"
import TodoCardShadow from "./TodoCardShadow"

const AllTodos = () => {
    const [todos, setTodos] = useTodos();
    const loading = useRecoilValue(isLoading);

    return (
        <div>
            {loading ? (
                <TodoCardShadow />
            ) : (
                <div className="flex flex-col gap-3">
                    {todos.map((todo) => <TodoCard key={todo._id} todo={todo} todos={todos} setTodos={setTodos}/>)}
                </div>
            )}
        </div>
    )
}

export default AllTodos;