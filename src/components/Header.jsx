import Logo from '/images/logo.png';
import BgImage from '/images/bg.jpeg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = ({ handleScrollToContactForm }) => {
    const [visible, setVisible] = useState(false)



    return (
        <>
            <header className="w-full  text-white flex flex-col items-center justify-center">

                <div className={`md:hidden ${visible ? "max-md:w-full" : "max-md:w-0"}`}>
                    <Menu visible={visible} setVisible={setVisible} />
                </div>
                <div className='w-full flex justify-center bg-darkblue bg-opacity-10 absolute top-0'>
                    <div className="w-8/12 max-lg:w-full h-20 flex justify-around items-center max-md:justify-between ">
                        <Link to="/" className="h-full w-3/12 max-md:w-8/12">
                            <LazyLoadImage visibleByDefault="true" className="py-3 max-md:scale-75 " width={"180px"} height={"100px"} src={Logo} effect="blur" alt="Logo" />
                        </Link>
                        <nav className="max-md:hidden w-6/12 flex justify-center">
                            <ul className="text-xl flex justify-between gap-10">
                                <li className='flex flex-col relative after:h-px after:bg-white after:w-0 hover:after:w-full after:transform after:duration-300'>
                                    <Link to="/about" >Кто мы</Link>

                                </li>
                                <li className='flex flex-col relative after:h-px after:bg-white  after:w-0 hover:after:w-full after:transform after:duration-300'>
                                    <Link to="/services">Услуги</Link>
                                </li>
                                <li className='flex flex-col relative after:h-px after:bg-white  after:w-0 hover:after:w-full after:transform after:duration-300'>
                                    <Link to="/contacts">Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="max-md:hidden w-3/12 flex justify-end text-xl"><a href="tel:+7-933-335-10-66" className='w-fit flex flex-col relative after:h-px after:bg-white  after:w-0 hover:after:w-full after:transform after:duration-300'>+7-933-335-10-66</a></div>
                        <div className="hidden max-md:block">
                            <RxHamburgerMenu className="w-5 h-5 mr-4" onClick={() => setVisible(!visible)} />
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-[16rem] max-h-[48rem]  brightness-75 -z-20">
                    <LazyLoadImage
                        visibleByDefault="true"
                        src={BgImage}
                        alt=""
                        width={"100%"}
                        height={"100%"}
                        className="select-none pointer-events-none object-cover object-center min-h-[16rem] max-h-[48rem] "
                    />

                </div>
                <div className='absolute [font-size:_clamp(1.5rem,5vw,4em)] z-10 text-center w-full '>
                    <h1 className='text-gray-100' >Первая консультация - бесплатно</h1>

                    <button onClick={handleScrollToContactForm} ><h2 className='text-blue-300'>Свяжитесь с нами</h2></button>
                </div>
            </header>
        </>
    );
};

export default Header;
