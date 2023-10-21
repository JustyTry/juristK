import { memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const ImageComponent = memo(function ImageComponent(data) {
    return (
        <LazyLoadImage
            src={data[0]}
            alt={data[1]}
            effect="opacity"
            height={"100%"}
            width={"100%"}
            className="w-full h-full object-cover hover:scale-110 transform duration-300"

        />
    )
})

export default ImageComponent