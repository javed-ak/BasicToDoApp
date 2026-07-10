import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoading } from "../src/store/atoms/isLogin";

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useRecoilState(isLoading);

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
                setLoading(false);
                setTodos(response.data.todos);
            } catch (err) {
                console.log(err)
            }
        }
        fetchTodos();
    }, [])

    return [todos, setTodos];
}

export default useTodos;