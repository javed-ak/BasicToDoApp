import { useEffect, useState } from "react";
import axios from 'axios';
import Button from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [debounceTitle, setDebounceTitle] = useState('')
    const [debounceDescription, setDebounceDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const notify = () => toast.success('Todo created successfully');
    const notifyError = () => toast.error('Something went wrong!')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceTitle(title)
            setDebounceDescription(description)
        }, 500);

        return () => {
            clearTimeout(timer)
        }
    }, [title, description])

    const handleTodo = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('token')
        try {
            const response = await axios.post('http://localhost:3000/api/v1/todo', 
                {
                    title,
                    description
                }, 
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            setIsLoading(false);
            notify();
        } catch (err) {
            console.log(err);
            notifyError();
        } finally{
            setIsLoading(false);
            console.log("Request completed");
        }
    }

    return (
        <div className="p-10 border-slate-200 shadow-sm rounded-lg min-w-sm grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-3" >
                <div className="font-semibold text-xl text-slate-900">Input</div>
                <div className="flex flex-col gap-3">
                    <input type="text" name="todoTitle" id="todoTitle" placeholder="Title" required className="border border-slate-200 p-2 rounded" onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" name="todoDescription" id="todoDescription" placeholder="Description" required className="border border-slate-200 p-2 rounded" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <Button onClick={handleTodo} loading={isLoading} title={"Add Todo"}/>
                    <ToastContainer />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="font-semibold text-xl text-slate-900">Preview</div>
                <div>
                    <div><span className="font-medium">Title:</span> {debounceTitle}</div>
                    <div><span className="font-medium">Description:</span> {debounceDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo;