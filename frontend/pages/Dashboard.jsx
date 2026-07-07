import AddTodo from "../components/AddTodo";
import AllTodos from "../components/AllTodos";

const Dashboard = () => {
    return (
        <div className="container m-auto py-10 flex flex-col gap-5">
            <div className="font-bold text-2xl">Welcome, User!</div>
            <AddTodo />
            <div className="font-bold text-2xl">My Todos</div>
            <AllTodos />
        </div>
    )
}

export default Dashboard;