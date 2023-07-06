import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full bg-light">
            <div className="w-full flex justify-center my-32 max-lg:my-24 max-md:my-8">
                <ul className="w-8/12 max-lg:w-full flex justify-between text-darkblue text-center max-md:flex-col max-md:gap-8 ">
                    <li >
                        <div className="text-7xl">
                            500+
                        </div>
                        <div>Довольных клиентов</div>
                    </li>
                    <li >
                        <div className="text-7xl border-x ">
                            5+
                        </div>
                        <div>Лет выслуги</div>
                    </li>
                    <li >
                        <div className="text-7xl border-x ">
                            15+
                        </div>
                        <div>Лет опыта сотрудников</div>
                    </li>
                    <li >
                        <div className="text-7xl">1000+</div>
                        <div>Успешных дел</div>
                    </li>
                </ul>
            </div>
            <div className="w-8/12 text-5xl mt-8">
                <span className=" text-darkblue">Кто </span><span className="text-beige">мы</span>
            </div>
            <div className="bg-darkblue w-full flex justify-center">
                <div className=" w-8/12 max-lg:w-full">
                    <h2 className="text-5xl font-light mb-6 mt-8">
                        <span className="text-white">Сферы </span><span className=" text-beige">услуг</span>
                    </h2>
                    <div className="w-full flex justify-between  gap-8">
                        <div className=" w-1/3 relative mb-8"><img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" />
                            <div className="capitalize absolute bottom-0 bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between">Criminal Defence <span className="pr-6 font-bold text-xl">→</span></div>
                        </div>
                        <div className=" w-1/3 relative mb-8"><img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" />
                            <div className="capitalize absolute bottom-0 bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between">Criminal Defence <span className="pr-6 font-bold text-xl">→</span></div>
                        </div>
                        <div className=" w-1/3 relative mb-8"><img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" />
                            <div className="capitalize absolute bottom-0 bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between">Criminal Defence <span className="pr-6 font-bold text-xl">→</span></div>
                        </div>
                    </div><div className="w-full flex justify-between  gap-8">
                        <div className=" w-1/3 relative mb-8"><img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" />
                            <div className="capitalize absolute bottom-0 bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between">Criminal Defence <span className="pr-6 font-bold text-xl">→</span></div>
                        </div>
                        <div className=" w-1/3 relative mb-8"><img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" />
                            <div className="capitalize absolute bottom-0 bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between">Criminal Defence <span className="pr-6 font-bold text-xl">→</span></div>
                        </div>
                        <div className=" w-1/3 relative mb-8"><img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" />
                            <div className="capitalize absolute bottom-0 bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between">Criminal Defence <span className="pr-6 font-bold text-xl">→</span></div>
                        </div>

                    </div>
                    <div className="w-full flex justify-center items-center mb-32 ">
                        <Link to="/services" className=" bg-beige p-6 flex justify-center items-center text-white w-48 h-16">
                            <span> Посмотреть всё</span>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home