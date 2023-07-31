import Logo from '/images/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="w-full text-white flex justify-center bg-light">
            <div className='w-8/12 max-lg:w-full absolute h-20 flex justify-around items-center max-md:justify-between '>
                <Link to="/" className='h-full w-3/12 max-md:w-8/12'><img className='h-full py-3 max-md:ml-4' src={Logo} alt="Logo" /></Link>
                <nav className='max-md:hidden w-6/12 flex justify-center'>
                    <ul className="text-xl flex gap-10">
                        <li className='before:absolute before:bg-white before:bottom-6 before:h-px before:w-0 hover:before:w- before:duration-200'><Link to="/about">Кто мы</Link></li>
                        <li className='before:absolute before:bg-white before:bottom-6 before:h-px before:w-0 hover:before:w-16 before:duration-200'><Link to="/services" >Услуги</Link></li>
                        <li className='before:absolute before:bg-white before:bottom-6 before:h-px before:w-0 hover:before:w-16 before:duration-200'><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </nav>
                <div className='max-md:hidden w-3/12 text-right text-xl'>
                    7-933-335-10-66
                </div>
                <div className='hidden max-md:block '>
                    <RxHamburgerMenu className='w-5 h-5 mr-4' />
                </div>

            </div>
            <div className='w-full bg-darkblue h-[48rem]'>
                {/* <img src="https://thumbs.dreamstime.com/z/gavel-scales-justice-law-books-judge-court-66558437.jpg?w=992" alt="" className='w-full max-h-[48rem] select-none pointer-events-none ' /> */}
            </div>
        </header>
    )
}

export default Header