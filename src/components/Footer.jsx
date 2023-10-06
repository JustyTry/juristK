import VkIcon from '/images/vkIcon.png';
import InstaIcon from '/images/instIcon.png';
import WaIcon from '/images/waIcon.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full min-h-32 flex justify-end items-center flex-col gap-2 bg-darkblue text-white border-t-gray-700 border-t-2">
            <h6 className=" pt-4 text-xl">Безвыходных ситуаций не бывает</h6>
            <div className=" flex justify-start gap-10">
                <div className='flex flex-col items-center text-center'>
                    <a href="https://vk.com/u2151066"><img src={VkIcon} alt="VK" /></a>
                    <Link to="/about" className="w-full mt-2">Кто мы</Link>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <a href="https://instagram.com/u2151066"><img src={InstaIcon} alt="Insta" /></a>
                    <Link to="/services" className="w-full mt-2">Услуги</Link>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <a href="https://wa.me/+79333351066"><img src={WaIcon} alt="Insta" /></a>
                    <Link to="/contacts" className="w-full mt-2">Контакты</Link>
                </div>
            </div>

            <h6 className="w-8/12 text-center py-3 text-md text-gray-200 border-t-gray-700 border-t-2">
                © Copyright ЮристК {currentYear}
            </h6>
        </div>
    );
};

export default Footer;
