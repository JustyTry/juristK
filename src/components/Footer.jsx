import VkIcon from "/images/vkIcon.png"
import InstaIcon from "/images/instIcon.png"
import WaIcon from "/images/waIcon.png"
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="w-full min-h-32 flex justify-end items-center flex-col gap-2 bg-darkblue text-white border-t-gray-700 border-t-2">
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
            <h6 className="w-8/12 text-center py-3 text-md text-gray-200 border-t-gray-700 border-t-2">© Copyright ЮристК {currentYear}</h6>
        </div>
    )
}

export default Footer