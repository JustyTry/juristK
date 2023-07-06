import Bgimage from '../assets/contact-bg.jpg'
import Logo from '../assets/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="w-full bg-darkblue text-white">

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
            <div>
                <img src={Bgimage} alt="" />
            </div>
        </header>
    )
}

export default Header