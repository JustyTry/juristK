import Logo from '/images/logo.png';
import BgImage from '/images/bg.jpeg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useState } from 'react';

const Header = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <div className={`hidden ${visible ? "max-md:block" : "max-md:hidden"}`}>
                <Menu visible={visible} setVisible={setVisible} />
            </div>
            <header className="w-full text-white flex flex-col items-center justify-center">

                <div className='w-full flex justify-center bg-light text-darkblue bg-opacity-10'>
                    <div className="w-8/12 max-lg:w-full h-20 flex justify-around items-center max-md:justify-between ">
                        <Link to="/" className="h-full w-3/12 max-md:w-8/12">
                            <img className="h-full py-3 max-md:ml-4" src={Logo} alt="Logo" />
                        </Link>
                        <nav className="max-md:hidden w-6/12 flex justify-center">
                            <ul className="text-xl flex justify-between gap-10">
                                <li className='flex flex-col relative after:h-px after:bg-darkblue after:w-0 hover:after:w-full after:transform after:duration-300'>
                                    <Link to="/about" >Кто мы</Link>

                                </li>
                                <li className='flex flex-col relative after:h-px after:bg-darkblue after:w-0 hover:after:w-full after:transform after:duration-300'>
                                    <Link to="/services">Услуги</Link>
                                </li>
                                <li className='flex flex-col relative after:h-px after:bg-darkblue after:w-0 hover:after:w-full after:transform after:duration-300'>
                                    <Link to="/contacts">Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="max-md:hidden w-3/12 flex justify-end text-xl"><a href="tel:+7-933-335-10-66" className='w-fit flex flex-col relative after:h-px after:bg-darkblue after:w-0 hover:after:w-full after:transform after:duration-300'>+7-933-335-10-66</a></div>
                        <div className="hidden max-md:block">
                            <RxHamburgerMenu className="w-5 h-5 mr-4" onClick={() => setVisible(!visible)} />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img
                        src={BgImage}
                        alt=""
                        className="w-full select-none pointer-events-none object-cover object-right"
                    />
                </div>

            </header>
        </>
    );
};

export default Header;
