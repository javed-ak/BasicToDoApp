const Button = ({title, onClick, loading}) => {
    return (
        <button onClick={onClick} disabled={loading} className={`w-full px-5 py-2 rounded border cursor-pointer hover:bg-slate-900 hover:text-slate-100 transition-all disabled:cursor-not-allowed disabled:bg-slate-600`}>
            {loading? "Please wait..." : title}
        </button>
    )
}

export default Button;