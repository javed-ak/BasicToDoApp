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
    const [isFocus, setIsFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const notify = () => toast.success('Todo created successfully');
    const notifyError = () => toast.error('Something went wrong!');
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceTitle(title)
            setDebounceDescription(description)
        }, 500);

        return () => {
            clearTimeout(timer)
        }
    }, [title, description])

    useEffect(() => {
            if(title.length > 2) {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
    }, [title])

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
            setTitle('');
            setDescription('');
            document.getElementById('todoTitle').value = ""
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
                    <div>
                        <input type="text" name="todoTitle" id="todoTitle" placeholder="Title*" required className="border border-slate-200 focus:outline-none p-2 rounded w-full" value={title} onChange={(e) => setTitle(e.target.value)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}/>
                        {(isEmpty && isFocus) && <div className="text-xs text-red-500">Minimum 3 character required</div>}
                    </div>
                    <input type="text" name="todoDescription" id="todoDescription" placeholder="Description" value={description} required className="border focus:outline-none border-slate-200 p-2 rounded" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    {isEmpty ? (
                        <button className="w-full px-5 py-2 rounded border cursor-not-allowed bg-slate-600/50 text-white" disabled>Add Todo</button>
                    ) : (
                        <Button onClick={handleTodo} loading={isLoading} title={"Add Todo"}/>
                    )}
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