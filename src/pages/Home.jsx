import { Link } from 'react-router-dom';
import Record from '../components/Record';

import FamilylawImage from "/images/familylaw.webp"
import InheritancelawImage from "/images/inheritancelaw.webp"
import FactfindingImage from "/images/factfinding.webp"
import ContractlawImage from "/images/contractlaw.webp"
import CollectionImage from "/images/collection.webp"
import DocumentrecoveryImage from "/images/documentrecovery.webp"

import HomeImage1 from "/images/home-1.png"
import HomeImage2 from "/images/home-2.jpg"
import HomeImage3 from "/images/home-3.jpg"
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Юрист К";
    });
    return (
        <div className="w-full bg-light">
            <div className="w-full flex justify-center max-md:my-8">
                <ul className="w-8/12 max-xl:w-full my-16 max-md:my-4 flex justify-between text-darkblue text-center flex-wrap max-md:gap-y-8 ">
                    <li className='max-md:w-1/2 max-sm:w-full'>
                        <div className="text-7xl">500+</div>
                        <div>Довольных клиентов</div>
                    </li>
                    <li className='max-md:w-1/2 max-sm:w-full'>
                        <div className="text-7xl  ">5+</div>
                        <div>Лет выслуги</div>
                    </li>
                    <li className='max-md:w-1/2 max-sm:w-full'>
                        <div className="text-7xl ">15+</div>
                        <div>Лет опыта сотрудников</div>
                    </li>
                    <li className='max-md:w-1/2 max-sm:w-full'>
                        <div className="text-7xl">1000+</div>
                        <div>Успешных дел</div>
                    </li>
                </ul>
            </div>
            <div className="w-full  mt-8 flex justify-center mb-24 ">
                <div className="w-8/12 max-xl:w-full relative">
                    <h2 className="flex text-7xl justify-between max-md:flex-col">
                        <div className="w-5/12 px-8 max-md:text-center max-md:w-full">
                            <span className=" text-darkblue mr-2">Кто </span>
                            <span className="text-beige ">мы</span>
                        </div>
                        <p className=" text-base w-7/12 max-md:w-full pt-6 px-8">
                            Добро пожаловать в фирму ЮристК, юридическую фирму созданную для защиты прав и
                            интересов наших клиентов
                        </p>
                    </h2>
                    <div className="mt-8 px-8 flex justify-between max-md:flex-col overflow-hidden ">
                        <img
                            src={HomeImage1}
                            alt=""
                            loading="lazy"
                            className="w-5/12 h-128 max-sm:h-96  overflow-hidden object-cover object-right max-md:w-full"
                        />
                        <div className="flex flex-col w-7/12 max-md:w-full pl-8 max-md:pl-0">
                            <div className="w-full flex ">
                                <img
                                    src={HomeImage2}
                                    alt=""
                                    loading="lazy"
                                    className="w-1/2 h-64 overflow-hidden object-cover object-center max-md:hidden"
                                />
                                <img
                                    src={HomeImage3}
                                    alt=""
                                    loading="lazy"
                                    className="w-1/2 h-64 overflow-hidden object-cover object-center ml-8 max-md:hidden"
                                />
                            </div>
                            <ul className="text-lg flex flex-col gap-3 mt-8">
                                <li>✓ Защита прав и интересов</li>
                                <li>✓ Персональный подход</li>
                                <li>✓ Опытные сотрудники</li>
                                <li>✓ Быстрое достижение результата</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-darkblue w-full flex justify-center">
                <div className=" w-8/12 max-xl:w-full">
                    <h2 className="text-5xl font-light mb-6 mt-8 px-8  max-md:text-center">
                        <span className="text-white mr-2">Сферы </span>
                        <span className=" text-beige">услуг</span>
                    </h2>
                    <div className="w-full flex justify-between max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">
                        <Record title="семейное право" type="individuals" link="familylaw" image={FamilylawImage} />
                        <Record title="наследственное право" type="individuals" link="inheritancelaw" image={InheritancelawImage} />
                        <Record title="судебное установление фактов" type="individuals" link="factfinding" image={FactfindingImage} />
                        <Record title="договорное право" type="legalentities" link="сontractlaw" image={ContractlawImage} />
                        <Record title="взыскание долгов и убытков" type="legalentities" link="collection" image={CollectionImage} />
                        <Record title="восстановление утраченных документов" type="legalentities" link="documentrecovery" image={DocumentrecoveryImage} />

                    </div>

                    <div className="w-full flex justify-center items-center mb-24 mt-8 ">
                        <Link
                            to="/services"
                            className=" bg-beige p-6 flex justify-center items-center text-white w-40 h-12">
                            <span> Посмотреть всё</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
