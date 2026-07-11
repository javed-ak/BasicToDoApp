import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { firstNameAtom, isLoginAtom } from "../src/store/atoms/isLogin";

const Navbar = () => {
    const navigate = useNavigate();
    const [verifyUser, setVerifyUser] = useRecoilState(isLoginAtom);
    const username = useRecoilValue(firstNameAtom);

    return (
        <div className="shadow-sm bg-white">
            <div className="flex justify-between items-center p-5 container m-auto">
                <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Todo App</div>
                <div className="flex gap-5 items-center">
                    {verifyUser && <div className="flex gap-3 items-center">
                        <div className="bg-slate-600 text-white p-3 rounded-full font-black ring-2 ring-slate-900 hover:scale-90 hover:text-slate-900 hover:bg-slate-50 transition-all">{username[0]}</div>
                        <Button onClick={() => navigate('/dashboard')} title={'Dashboard'}/>
                    </div>}
                    {!verifyUser ? (
                        <div className="flex gap-5">
                            <Button onClick={() => navigate('/signin')} title={"Login"}/>
                            <Button onClick={() => navigate('/signup')} title={"Signup"}/>
                        </div>
                    ) : (
                        <div>
                            <Button onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('firstName');
                                setVerifyUser(false)
                                navigate('/');
                            }} title={"Logout"}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;