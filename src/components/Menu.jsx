import { Link } from 'react-router-dom'
import Logo from '/images/logo.png';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Menu = ({ visible, setVisible }) => {
    useEffect(() => {
        if (document) {
            document.body.style.overflow = visible ? 'hidden' : 'auto'
        }
    }, [visible])
    return (
        <div className={`overflow-hidden whitespace-nowrap w-full z-40 fixed right-0 bg-darkblue text-white ${visible ? 'h-full transition-width duration-500 ease-in-out' : 'h-0 transition-width duration-500 ease-in-out '}`}>
            <div className='w-full h-full text-4xl flex flex-col justify-between items-center'>
                <div className='mt-8'>
                    <Link to="/" onClick={() => setVisible(!visible)} > <LazyLoadImage src={Logo} alt="Logo" className='h-12' /></Link>
                </div>
                <div className='hidden max-md:block absolute right-6 top-11 text-lg' onClick={() => setVisible(!visible)}>
                    ╳
                </div>
                <ul className='w-full h-full gap-y-6 mt-32 flex flex-col justify-start items-center'>
                    <li>
                        <Link to="/" onClick={() => setVisible(!visible)}>Главная</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setVisible(!visible)}>Кто мы</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={() => setVisible(!visible)}>Услуги</Link>
                    </li>
                    <li>
                        <Link to="/contacts" onClick={() => setVisible(!visible)}>Контакты</Link>
                    </li>
                </ul>
                <div className='mb-16'>
                    <Link to="/contacts">+7-933-335-10-66</Link>
                </div>
            </div>
        </div >
    );
};
export default Menu