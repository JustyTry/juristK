import ContactForm from "../components/ContactForm";
import services from "../services.json";

const Service = () => {
    const title = services.services[0].name
    const desc = services.services[0].description.split("\n").map((text, index) => <p className="mt-2" key={index}>{text}</p>)
    return (
        <div className="w-full bg-light flex items-center flex-col">
            <div className="w-8/12">
                <div className=" text-7xl mt-16">
                    <h1>{title}</h1>
                </div>
                <div className="text-xl mt-8">
                    <p> {desc}</p>
                </div>
                <div className="mt-8">
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export default Service
