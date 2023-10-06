import { Link } from 'react-router-dom'
import Logo from '/images/logo.png';

const Menu = ({ visible, setVisible }) => {

    return (
        <div className={`overflow-hidden whitespace-nowrap h-screen z-40 fixed right-0 bg-darkblue text-white ${visible ? 'h-screen transition-width duration-500 ease-in-out max-md:w-6/12  max-sm:w-full' : 'max-sm:w-full max-sm:h-0 max-md:w-0 transition-width duration-500 ease-in-out '}`}>
            <div className='w-full h-full text-4xl flex flex-col justify-between items-center'>
                <div className='mt-8'>
                    <img src={Logo} alt="Logo" className='h-12' />
                </div>
                <div className='hidden max-sm:block absolute right-6 top-11 text-lg' onClick={() => setVisible(!visible)}>
                    ╳
                </div>
                <ul className='w-full h-full gap-y-6 mt-24 flex flex-col justify-start items-center'>
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
                <div className='mb-8'>
                    <Link to="/contacts">+7-933-335-10-66</Link>
                </div>
            </div>
        </div>
    );
};
export default Menu