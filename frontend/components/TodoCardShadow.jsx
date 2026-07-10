const TodoCardShadow = () => {
    return (
        <div className="relative animate-pulse p-5 shadow-sm max-w-lg rounded-lg bg-slate-50 flex flex-col gap-3">
            <span className=" absolute top-5 right-5 border rounded-lg bg-slate-200 text-white text-xs p-1 font-bold w-10 h-6"></span>
            <div className="flex gap-3">
                <div className="text-2xl font-semibold w-20 bg-slate-200 h-10"></div>
                <div className="text-2xl font-semibold w-20 bg-slate-200 h-10"></div>
            </div>
            <div className="flex gap-3">
                <div className="text-2xl font-semibold w-30 bg-slate-200 h-6"></div>
                <div className="text-2xl font-semibold w-20 bg-slate-200 h-6"></div>
                <div className="text-2xl font-semibold w-30 bg-slate-200 h-6"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-lg">
                <div className="text-2xl font-semibold bg-slate-200 h-10"></div>
                <div className="text-2xl font-semibold bg-slate-200 h-10"></div>
            </div>
        </div>
    )
}

export default TodoCardShadow;