import { Link } from "react-router-dom";
import Record from "../components/Record";

import FamilylawImage from "/images/familylaw.webp";
import InheritancelawImage from "/images/inheritancelaw.webp";
import FactfindingImage from "/images/factfinding.webp";
import ContractlawImage from "/images/contractlaw.webp";
import CollectionImage from "/images/collection.webp";
import DocumentrecoveryImage from "/images/documentrecovery.webp";

import HomeImage1 from "/images/home-1.png";
import HomeImage2 from "/images/home-2.jpg";
import HomeImage3 from "/images/home-3.jpg";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Юрист К";
  });
  return (
    <div className="w-full bg-light">
      <div className="flex w-full justify-center max-md:my-8">
        <ul className="my-16 flex w-8/12 flex-wrap justify-between text-center text-darkblue max-xl:w-full max-md:my-4 max-md:gap-y-8 ">
          <li className="max-md:w-1/2 max-sm:w-full">
            <div className="text-7xl">500+</div>
            <div>Довольных клиентов</div>
          </li>
          <li className="max-md:w-1/2 max-sm:w-full">
            <div className="text-7xl  ">5+</div>
            <div>Лет выслуги</div>
          </li>
          <li className="max-md:w-1/2 max-sm:w-full">
            <div className="text-7xl ">15+</div>
            <div>Лет опыта сотрудников</div>
          </li>
          <li className="max-md:w-1/2 max-sm:w-full">
            <div className="text-7xl">1000+</div>
            <div>Успешных дел</div>
          </li>
        </ul>
      </div>
      <div className="mb-24  mt-8 flex w-full justify-center ">
        <div className="relative w-8/12 max-xl:w-full">
          <h2 className="flex justify-between text-7xl max-md:flex-col">
            <div className="w-5/12 px-8 max-md:w-full max-md:text-center">
              <span className=" mr-2 text-darkblue">Кто </span>
              <span className="text-beige ">мы</span>
            </div>
            <p className=" w-7/12 px-8 pt-6 text-base max-md:w-full">
              Добро пожаловать в фирму ЮристК, юридическую фирму созданную для
              защиты прав и интересов наших клиентов
            </p>
          </h2>
          <div className="mt-8 flex justify-between overflow-hidden px-8 max-md:flex-col ">
            <img
              src={HomeImage1}
              alt=""
              loading="lazy"
              className="h-128 w-5/12 overflow-hidden  object-cover object-right max-md:w-full max-sm:h-96"
            />
            <div className="flex w-7/12 flex-col pl-8 max-md:w-full max-md:pl-0">
              <div className="flex w-full ">
                <img
                  src={HomeImage2}
                  alt=""
                  loading="lazy"
                  className="h-64 w-1/2 overflow-hidden object-cover object-center max-md:hidden"
                />
                <img
                  src={HomeImage3}
                  alt=""
                  loading="lazy"
                  className="ml-8 h-64 w-1/2 overflow-hidden object-cover object-center max-md:hidden"
                />
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-lg">
                <li>✓ Защита прав и интересов</li>
                <li>✓ Персональный подход</li>
                <li>✓ Опытные сотрудники</li>
                <li>✓ Быстрое достижение результата</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-darkblue">
        <div className=" w-8/12 max-xl:w-full">
          <h2 className="mb-6 mt-8 px-8 text-5xl font-light  max-md:text-center">
            <span className="mr-2 text-white">Сферы </span>
            <span className=" text-beige">услуг</span>
          </h2>
          <div className="flex w-full flex-wrap justify-between gap-y-12 max-md:justify-around max-sm:flex-col">
            <Record
              title="семейное право"
              type="individuals"
              link="familylaw"
              image={FamilylawImage}
            />
            <Record
              title="наследственное право"
              type="individuals"
              link="inheritancelaw"
              image={InheritancelawImage}
            />
            <Record
              title="судебное установление фактов"
              type="individuals"
              link="factfinding"
              image={FactfindingImage}
            />
            <Record
              title="договорное право"
              type="legalentities"
              link="сontractlaw"
              image={ContractlawImage}
            />
            <Record
              title="взыскание долгов и убытков"
              type="legalentities"
              link="collection"
              image={CollectionImage}
            />
            <Record
              title="восстановление утраченных документов"
              type="legalentities"
              link="documentrecovery"
              image={DocumentrecoveryImage}
            />
          </div>

          <div className="mb-24 mt-8 flex w-full items-center justify-center ">
            <Link
              to="/services"
              className=" flex h-12 w-40 items-center justify-center bg-beige p-6 text-white"
            >
              <span> Посмотреть всё</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
