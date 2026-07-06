const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full p-2">
            <h1 className="font-bold text-xl">Todo App</h1>
            <div className="flex gap-5">
                <button className="py-2 px-3 rounded bg-cyan-300 font-bold text-md">Login</button>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default Navbar;