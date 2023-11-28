import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/opacity.css";
import ImageComponent from "./ImageComponent";

const Record = (data) => {
  return (
    <div className="box-border h-64 w-1/3 overflow-hidden px-6  max-lg:w-1/2 max-sm:w-full">
      <Link to={`/service/${data.type}/${data.link}`}>
        <div className="h-5/6 w-full overflow-hidden">
          <ImageComponent {...[data.image, data.title]} />
        </div>
        <div className=" relative flex h-1/6 w-full justify-between overflow-hidden whitespace-nowrap bg-beige object-cover py-2 pl-6 text-lg text-white">
          <p className="">
            <span className="capitalize">{data.title[0]}</span>
            {data.title.slice(1)}
          </p>{" "}
          <span className="absolute right-0 bg-beige pr-3 text-xl font-bold">
            →
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Record;
