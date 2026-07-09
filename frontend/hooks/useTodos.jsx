import axios from "axios";
import { useEffect, useState } from "react";

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/todos',
                    {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    }
                )
                setTodos(response.data.todos)
            } catch (err) {
                console.log(err)
            }
        }
        fetchTodos();
    }, [])

    return [todos, setTodos];
}

export default useTodos;