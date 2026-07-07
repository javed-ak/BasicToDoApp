const Button = ({title, onClick}) => {
    return (
        <button onClick={onClick} className="w-full px-5 py-2 rounded border hover:bg-slate-900 hover:text-slate-100 transition-all">{title}</button>
    )
}

export default Button;