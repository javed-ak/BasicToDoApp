import { useRecoilValue } from "recoil";
import AddTodo from "../components/AddTodo";
import AllTodos from "../components/AllTodos";
import { firstNameAtom } from "../src/store/atoms/isLogin";

const Dashboard = () => {
    const user = useRecoilValue(firstNameAtom);
    return (
        <div className="container m-auto py-10 flex flex-col gap-5">
            <div className="font-bold text-2xl">Welcome, {user}!</div>
            <AddTodo />
            <div className="font-bold text-2xl">My Todos</div>
            <AllTodos />
        </div>
    )
}

export default Dashboard;