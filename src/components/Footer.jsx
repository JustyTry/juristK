import VkIcon from "../assets/vkIcon.png"
import InstaIcon from "../assets/instIcon.png"
import WaIcon from "../assets/waIcon.png"
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="w-full min-h-32 flex justify-end items-center flex-col gap-2 bg-darkblue text-white">
            <h6 className=" pt-4">Безвыходных ситуаций не бывает</h6>
            <div className=" flex justify-start gap-8"><img src={VkIcon} alt="VK" />
                <img src={InstaIcon} alt="Insta" />
                <img src={WaIcon} alt="Insta" />
            </div>
            <div className="flex justify-between gap-10">
                <div>Услуги</div>
                <div>О нас</div>
                <div>Контакты</div>
            </div>
            <h6>© Copyright ЮристК {currentYear}</h6>
        </div>
    )
}

export default Footer