import Logo from "/images/logo.png";
import BgImage from "/images/bg.jpeg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = ({ handleScrollToContactForm }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header className="flex  w-full flex-col items-center justify-center text-white">
        <div
          className={`md:hidden ${visible ? "max-md:w-full" : "max-md:w-0"}`}
        >
          <Menu visible={visible} setVisible={setVisible} />
        </div>
        <div className="-z-20 max-h-[48rem] min-h-[16rem]  w-full brightness-75">
          <LazyLoadImage
            visibleByDefault="true"
            src={BgImage}
            alt=""
            width={"2000"}
            height={"900"}
            className="pointer-events-none h-full select-none object-cover object-center"
          />
        </div>

        <div className="absolute z-10 w-full text-center [font-size:_clamp(1.5rem,5vw,4em)] ">
          <h1 className="text-gray-100">Первая консультация - бесплатно</h1>
          <button onClick={handleScrollToContactForm}>
            <h2 className="text-blue-300">Свяжитесь с нами</h2>
          </button>
        </div>

        <div className="absolute top-0 flex w-full justify-center bg-darkblue bg-opacity-10">
          <div className="flex h-20 w-8/12 items-center justify-around max-lg:w-full max-md:justify-between ">
            <Link to="/" className="h-full w-3/12 max-md:w-8/12">
              <LazyLoadImage
                className="py-3 max-md:scale-75 "
                width={"180px"}
                height={"auto"}
                src={Logo}
                alt="Logo"
              />
            </Link>
            <nav className="flex w-6/12 justify-center max-md:hidden">
              <ul className="flex justify-between gap-10 text-xl">
                <li className="relative flex flex-col after:h-px after:w-0 after:transform after:bg-white after:duration-300 hover:after:w-full">
                  <Link to="/about">Кто мы</Link>
                </li>
                <li className="relative flex flex-col after:h-px after:w-0  after:transform after:bg-white after:duration-300 hover:after:w-full">
                  <Link to="/services">Услуги</Link>
                </li>
                <li className="relative flex flex-col after:h-px after:w-0  after:transform after:bg-white after:duration-300 hover:after:w-full">
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className="flex w-3/12 justify-end text-xl max-md:hidden">
              <a
                href="tel:+7-933-335-10-66"
                className="relative flex w-fit flex-col after:h-px after:w-0  after:transform after:bg-white after:duration-300 hover:after:w-full"
              >
                +7-933-335-10-66
              </a>
            </div>
            <div className="hidden max-md:block">
              <RxHamburgerMenu
                className="mr-4 h-5 w-5"
                onClick={() => setVisible(!visible)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
