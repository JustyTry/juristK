import Record from "../components/Record";

import { useEffect, useState } from "react";
import services from "../services.json";
const Services = () => {
  useEffect(() => {
    document.title = "Услуги";
  });
  const [individuals] = useState(Object.values(services["individuals"]));
  const [legalentities] = useState(Object.values(services["legalentities"]));
  const [organizationalstructures] = useState(
    Object.values(services["organizationalstructures"]),
  );
  return (
    <div className="w-full">
      <div className="flex w-full justify-center bg-light">
        <div className="my-8 w-8/12 max-xl:w-full">
          <h2 className="mb-8 w-full text-center [font-size:_clamp(2.7rem,5vw,4em)] max-sm:px-6">
            <span className="text-darkblue">Физическим </span>
            <span className="text-beige">лицам</span>
          </h2>

          <div className="flex w-full flex-wrap gap-y-12 max-sm:flex-col">
            {individuals.map((item, index) => (
              <Record key={index} {...item} type={"individuals"} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-darkblue">
        <div className="my-8 w-8/12 max-xl:w-full">
          <h2 className="mb-8 w-full text-center [font-size:_clamp(2.7rem,5vw,4em)] max-sm:px-6">
            <span className="text-white">Юридическим </span>
            <span className="text-beige">лицам</span>{" "}
          </h2>
          <div className="flex w-full flex-wrap justify-between gap-y-12 max-md:justify-around max-sm:flex-col">
            {legalentities.map((item, index) => (
              <Record key={index} {...item} type="legalentities" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-light">
        <div className="my-8 w-8/12 max-xl:w-full">
          <h2 className="mb-8 w-full text-center [font-size:_clamp(2.7rem,5vw,4em)] max-sm:px-6">
            <span className="text-darkblue">Организационным </span>
            <span className="text-beige">структурам</span>
          </h2>

          <div className="flex w-full  flex-wrap gap-y-12 max-md:justify-around max-sm:flex-col">
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
