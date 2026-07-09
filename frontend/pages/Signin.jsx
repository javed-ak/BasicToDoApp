import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useRecoilState, useResetRecoilState } from "recoil";
import { firstNameAtom, isLoginAtom } from "../src/store/atoms/isLogin";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const [login, setLogin] = useRecoilState(isLoginAtom);
    const [firstName, setFirstName] = useRecoilState(firstNameAtom);

    const userSignin = async () => {
        await axios.post('http://localhost:3000/api/v1/signin', {
            username,
            password
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('firstName', response.data.firstName);
            setFirstName(response.data.firstName);
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
                    <div className="text-2xl font-bold">Login</div>
                    <div className="text-md text-slate-600 font-bold">Login up to continue</div>
                </div>
                <div className="flex flex-col gap-2">
                    <input type="text" name="email" id="email" placeholder="Email" required className="border border-slate-200 p-2 rounded" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" name="password" id="password" placeholder="Password" required className="border-slate-200 p-2 border rounded" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="">
                    <Button onClick={userSignin} title={"Login"} />
                </div>
            </div>
            <div className="text-slate-600">
                Doesn't have an account? <span className="underline text-sky-600 cursor-pointer" onClick={() => navigate('/signup')}>Sign up</span>
            </div>
        </div>
    )
}

export default Signin;