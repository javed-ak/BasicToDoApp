import { useNavigate } from "react-router-dom";
import Button from "./Button";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col w-full h-[70vh] justify-center items-center gap-5">
            <div className="font-black text-slate-900 text-7xl">Manage Your Daily Tasks</div>
            <div className="font-md text-xl text-slate-600">Never miss an important task. Create, organize and complete your todos with ease.</div>
            <div className="flex gap-5 min-w-xl">
                <Button onClick={() => navigate('/signup')} title={'Get Started'}/>
                <Button onClick={() => navigate('/signin')} title={'Login'}/>
            </div>
        </div>
    )
}

export default HeroSection;