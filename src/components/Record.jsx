import { Link } from "react-router-dom"
import 'react-lazy-load-image-component/src/effects/opacity.css';
import ImageComponent from "./ImageComponent";

const Record = (data) => {
    return (

        <div className="w-1/3 max-lg:w-1/2 box-border px-6 h-64  max-sm:w-full overflow-hidden">
            <Link to={`/service/${data.type}/${data.link}`} >
                <div className="w-full h-5/6 overflow-hidden">
                    <ImageComponent {...[data.image, data.title]} />
                </div>
                <div className=" bg-beige w-full text-white text-lg pl-6 py-2 flex justify-between h-1/6 object-cover whitespace-nowrap relative overflow-hidden">
                    <p className=""><span className="capitalize">{data.title[0]}</span>{data.title.slice(1)}</p> <span className="pr-3 font-bold text-xl absolute right-0 bg-beige">→</span>
                </div>
            </Link>
        </div>
    )
}

export default Record