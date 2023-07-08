const Record = (data) => {
    return (
        <div className="w-30% h-64 max-md:w-2/5 max-sm:w-full">
            <img
                src={data.image}
                alt={data.title}
                loading='lazy'
                className="w-full h-5/6 object-cover"
                height={256}
                width={256}
            />
            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover whitespace-nowrap relative overflow-hidden">
                {data.title} <span className="pr-3 font-bold text-xl absolute right-0 bg-beige">→</span>
            </div>
        </div>
    )
}

export default Record