import { Link } from 'react-router-dom'

const Menu = ({ visible, setVisible }) => {
    return (
        <div className=' w-screen h-screen z-40 overflow-hidden fixed bg-darkblue text-white '>
            <div className='w-full h-full text-4xl flex flex-col justify-between items-center'>
                <div className='mt-8'>
                    logo
                </div>
                <div className='absolute right-4 top-7 text-lg' onClick={() => setVisible(!visible)}>
                    ╳
                </div>
                <ul className='w-full h-full gap-y-6 flex flex-col justify-center items-center'>
                    <li>
                        <Link to="/about">Кто мы</Link>
                    </li>
                    <li>
                        <Link to="/services">Услуги</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
                <div className='mb-8'>
                    <Link to="/contacts">+7-933-335-10-66</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu