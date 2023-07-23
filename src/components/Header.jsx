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
            <div className='w-full'>
                <img src="https://images.unsplash.com/photo-1437751068958-82e6fccc9360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className='w-full select-none pointer-events-none' />
            </div>
        </header>
    )
}

export default Header