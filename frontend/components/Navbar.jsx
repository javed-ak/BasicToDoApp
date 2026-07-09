import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../src/store/atoms/isLogin";

const Navbar = () => {
    const navigate = useNavigate();
    const [verifyUser, setVerifyUser] = useRecoilState(isLoginAtom);

    return (
        <div className="shadow-sm bg-white">
            <div className="flex justify-between p-5 container m-auto">
                <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Todo App</div>
                <div>
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