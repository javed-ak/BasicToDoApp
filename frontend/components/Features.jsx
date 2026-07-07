import FeaturesCard from "./FeaturesCard"

const Features = () => {
    return (
        <div className="py-20 bg-slate-50">
            <div className=" text-center container m-auto flex flex-col gap-10">
            <div className="text-4xl font-bold">Features</div>
            <div>
                <div className="flex justify-around">
                    <FeaturesCard title={"Create"} description={"Add unlimited todos quickly."} />
                    <FeaturesCard title={"Mark Done"} description={"Complete tasks with one click."} />
                    <FeaturesCard title={"Delete"} description={"Remove old todos anytime."} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Features;