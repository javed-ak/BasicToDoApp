import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="shadow-sm bg-white">
            <div className="flex justify-between p-5 container m-auto">
                <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Todo App</div>
                <div className="flex gap-5">
                    <Button onClick={() => navigate('/signin')} title={"Login"}/>
                    <Button onClick={() => navigate('/signup')} title={"Signup"}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;