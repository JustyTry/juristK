import Bgimage from '/images/contact-bg.jpg'
import Logo from '/images/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="w-full text-darkblue flex justify-center">
            <div className='w-8/12 max-lg:w-full absolute h-20 flex justify-around items-center max-md:justify-between'>
                <Link to="/" className='h-full w-3/12'><img className='h-full py-3 max-md:ml-4 brightness-150' src={Logo} alt="Logo" /></Link>
                <nav className='max-md:hidden w-6/12 flex justify-center'>
                    <ul className="text-xl flex gap-10">
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
                <div className='max-md:hidden w-3/12 text-right text-xl'>
                    7-933-335-10-66
                </div>
                <div className='hidden max-md:block '>
                    <RxHamburgerMenu className='w-5 h-5 mr-4' />
                </div>

            </div>
            <div>
                <img src={Bgimage} alt="" className=' select-none pointer-events-none' />
            </div>
        </header>
    )
}

export default Header