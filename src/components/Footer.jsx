import VkIcon from "/images/vkIcon.png";
import InstaIcon from "/images/instIcon.png";
import WaIcon from "/images/waIcon.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-32 flex w-full flex-col items-center justify-end gap-2 border-t-2 border-t-gray-700 bg-darkblue text-white">
      <h6 className=" pt-4 text-xl">Безвыходных ситуаций не бывает</h6>
      <div className=" flex justify-start gap-10">
        <div className="flex flex-col items-center text-center">
          <a href="https://vk.com/u2151066" aria-label="VK">
            <LazyLoadImage src={VkIcon} effect="blur" alt="VK" />
          </a>
          <Link to="/about" className="mt-2 w-full">
            Кто мы
          </Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <a href="https://instagram.com/u2151066" aria-label="Instagram">
            <LazyLoadImage src={InstaIcon} effect="blur" alt="Instagram" />
          </a>
          <Link to="/services" className="mt-2 w-full">
            Услуги
          </Link>
        </div>
        <div className="flex flex-col items-center text-center">
          <a href="https://wa.me/+79333351066" aria-label="WhatsApp">
            <LazyLoadImage src={WaIcon} effect="blur" alt="Insta" />
          </a>
          <Link to="/contacts" className="mt-2 w-full">
            Контакты
          </Link>
        </div>
      </div>

      <h6 className="text-md w-8/12 border-t-2 border-t-gray-700 py-3 text-center text-gray-200">
        © Copyright ЮристК {currentYear}
      </h6>
    </div>
  );
};

export default Footer;
