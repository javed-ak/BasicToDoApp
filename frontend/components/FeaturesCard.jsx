const FeaturesCard = ({title, description}) => {
    return (
        <div className="p-20 border border-slate-200 rounded-lg shadow-xs bg-white text-center flex flex-col gap-3">
            <div className="font-bold text-2xl">{title}</div>
            <div className="text-slate-600">{description}</div>
        </div>
    )
}

export default FeaturesCard;