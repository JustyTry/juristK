import Record from "../components/Record";

import { useState } from "react";
import services from "../services.json"
const Services = () => {
    const [individuals] = useState(Object.values(services["individuals"]));
    const [legalentities] = useState(Object.values(services["legalentities"]))
    const [organizationalstructures] = useState(Object.values(services["organizationalstructures"]))
    return (
        <div className="w-full">
            <div className="w-full bg-light flex justify-center">
                <div className="w-8/12 max-xl:w-full my-8">
                    <h2 className="w-full text-center [font-size:_clamp(2.7rem,5vw,4em)] max-sm:px-6 mb-8">
                        <span className="text-darkblue">Физическим </span>
                        <span className="text-beige">лицам</span>
                    </h2>

                    <div className="w-full flex gap-y-12 max-sm:flex-col flex-wrap">
                        {individuals.map((item, index) => (
                            <Record key={index} {...item} type={"individuals"} />
                        ))}

                    </div>
                </div>
            </div>
            <div className="w-full bg-darkblue flex justify-center">
                <div className="w-8/12 max-xl:w-full my-8">
                    <h2 className="w-full text-center [font-size:_clamp(2.7rem,5vw,4em)] max-sm:px-6 mb-8">
                        <span className="text-white">Юридическим </span>
                        <span className="text-beige">лицам</span>{' '}
                    </h2>
                    <div className="w-full flex justify-between max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">

                        {legalentities.map((item, index) => (
                            <Record key={index} {...item} type="legalentities" />
                        ))}

                    </div>
                </div>
            </div>
            <div className="w-full bg-light flex justify-center">
                <div className="w-8/12 max-xl:w-full my-8">
                    <h2 className="w-full text-center [font-size:_clamp(2.7rem,5vw,4em)] max-sm:px-6 mb-8">
                        <span className="text-darkblue">Организационным  </span>
                        <span className="text-beige">структурам</span>
                    </h2>

                    <div className="w-full flex  max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">
                        {organizationalstructures.map((item, index) => (
                            <Record key={index} {...item} type="organizationalstructures" />
                        ))}
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Services;
