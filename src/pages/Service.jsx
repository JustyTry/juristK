import { useEffect, useRef } from "react";
import services from "../services.json";
import { useParams } from "react-router-dom";

const Service = () => {
  const { name } = useParams();
  const { type } = useParams();
  const titleRef = useRef(null);
  const title = services[type][name].title;
  const desc = services[type][name].description
    .split("\n")
    .map((text, index) => (
      <p className="mt-2" key={index}>
        {text}
      </p>
    ));

  useEffect(() => {
    document.title = title;
    titleRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="flex w-full flex-col items-center bg-light">
      <div className="w-8/12 max-lg:w-full">
        <div
          ref={titleRef}
          className=" mt-16 text-darkblue [font-size:_clamp(3rem,5vw,4em)]  max-lg:mt-4 max-md:text-center"
        >
          <h1>{title}</h1>
        </div>
        <div className="mt-8 indent-8 text-xl">
          <span> {desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
