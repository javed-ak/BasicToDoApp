import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = () => {

    }

    return <div>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="description"/>

        <button onClick={addTodo}>Add Todo</button>
    </div>
}