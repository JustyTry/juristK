import ContactForm from "../components/ContactForm";
import services from "../services.json";
import { useParams } from "react-router-dom";

const Service = () => {
    const { name } = useParams();
    const title = services[name].name
    const desc = services[name].description.split("\n").map((text, index) => <p className="mt-2" key={index}>{text}</p>)
    return (
        <div className="w-full bg-light flex items-center flex-col">
            <div className="w-8/12 max-lg:w-full">
                <div className=" text-7xl mt-16 max-lg:text-6xl max-md:text-center text-darkblue">
                    <h1>{title}</h1>
                </div>
                <div className="text-xl mt-8 indent-8">
                    <span> {desc}</span>
                </div>
                <div className="mt-8">
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export default Service
