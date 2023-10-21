import { useEffect, useRef } from "react";
import services from "../services.json";
import { useParams } from "react-router-dom";

const Service = () => {
    const { name } = useParams();
    const { type } = useParams()
    const titleRef = useRef(null)
    const title = services[type][name].title
    const desc = services[type][name].description.split("\n").map((text, index) => <p className="mt-2" key={index}>{text}</p>)

    useEffect(() => {
        document.title = title;
        titleRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
    return (
        <div className="w-full bg-light flex items-center flex-col">
            <div className="w-8/12 max-lg:w-full">
                <div ref={titleRef} className=" [font-size:_clamp(3rem,5vw,4em)] mt-16 max-lg:mt-4  max-md:text-center text-darkblue">
                    <h1>{title}</h1>
                </div>
                <div className="text-xl mt-8 indent-8">
                    <span> {desc}</span>
                </div>

            </div>

        </div>
    )
}

export default Service
