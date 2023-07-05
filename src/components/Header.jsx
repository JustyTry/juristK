import Bgimage from '../assets/lawer.jpg'
import Logo from '../assets/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="w-full mb-128 text-white">

            <div className='w-full h-20 flex justify-around items-center max-md:justify-between bg-opacity-100 shadow-sm'>
                <Link to="/" className='h-full'><img className='h-full py-3 max-md:ml-4 brightness-150' src={Logo} alt="Logo" /></Link>
                <nav className='max-md:hidden'>
                    <ul className="text-lg flex gap-10 ">
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
                <div className='max-md:hidden'>
                    Тел: 7-933-335-10-66
                </div>
                <div className='hidden max-md:block '>
                    <RxHamburgerMenu className='w-5 h-5 mr-4' />
                </div>

            </div>
            <img src={Bgimage} alt='' className='fixed left-0 top-0 h-screen w-full object-cover -z-10 overflow-hidden brightness-50' />
        </header>
    )
}

export default Header