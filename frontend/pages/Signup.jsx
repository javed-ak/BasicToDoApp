import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from 'axios'
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../src/store/atoms/isLogin';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const [login, setLogin] = useRecoilState(isLoginAtom);

    const userSignup = async () => {
    const userSignup = await axios.post('http://localhost:3000/api/v1/signup', {
            username: username,
            firstName: firstName,
            lastName: lastName,
            password: password
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('firstName', response.data.firstName)
            setLogin(true);
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="h-[100vh] flex flex-col gap-5 justify-center items-center">
            <div className="p-20 border border-slate-200 shadow-sm max-w-lg rounded-lg text-center flex flex-col gap-5">
                <div>
                    <div className="text-2xl font-bold">Sign up</div>
                    <div className="text-md text-slate-600 font-bold">Sign up to continue</div>
                </div>
                <div className="flex flex-col gap-2">
                    <input type="text" name="email" id="email" placeholder="Email" required className="border border-slate-200 p-2 rounded" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" name="fname" id="fname" placeholder="First Name" required className="border-slate-200 p-2 border rounded" onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" name="lname" id="lname" placeholder="Last Name" className="border-slate-200 p-2 border rounded" onChange={(e) => setLastName(e.target.value)}/>
                    <input type="text" name="password" id="password" placeholder="Password" required className="border-slate-200 p-2 border rounded" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="">
                    <Button onClick={userSignup} title={"Sign up"} />
                </div>
            </div>
            <div>
                Already have an account? <span className="underline text-sky-600 cursor-pointer" onClick={() => navigate('/signin')}>Sign in</span>
            </div>
        </div>
    )
}

export default Signup;