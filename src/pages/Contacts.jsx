import clockIcon from '../assets/clockIcon.png';
import contactIcon from '../assets/contactIcon.png';
import locationIcon from '../assets/locationIcon.png';
import ContactForm from '../components/ContactForm';
import vkIcon from '../assets/vkIcon.png'
import instaIcon from '../assets/instIcon.png'
import waIcon from '../assets/waIcon.png'

const Contacts = () => {
    return (
        <div className=" bg-white ">
            <div className="w-full flex items-center flex-col ">
                <h1 className=" text-4xl text-center mt-8 w-8/12 max-md:w-full">
                    Мы расположены в Красноярске, Копылова 66
                </h1>
                <h6 className=" text-lg text-gray-500  text-center mt-8 w-6/12 max-md:w-full">
                    Для связи с нами используйте представленные ниже номер телефона или контакную форму, либо
                    напишите нам на почту test@test.com
                </h6>
                <div className=" w-full flex justify-center my-16">
                    <ul className="w-8/12 flex justify-between gap-8 max-lg:w-full max-md:flex-col">
                        <li>
                            <div className="flex flex-col items-center">
                                <img src={clockIcon} alt="" className='h-16' />
                                <div className="mt-4 text-gray-500">г. Красноярске ул.Копылова, 66</div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-center">
                                <img src={locationIcon} alt="" className='h-16' />
                                <ul className="mt-4 text-gray-500 text-center">
                                    <li>Рабочие дни:</li>
                                    <li>09:00–19:00</li>
                                    <li>суббота: 10:00–15:00</li>
                                    <li>воскресенье: выходной</li>
                                </ul>
                            </div>

                        </li>
                        <li>
                            <div className="flex flex-col items-center">
                                <img src={contactIcon} alt="" className='h-16' />
                                <div>Тел: 7-933-335-10-66</div>
                                <ul className="mt-4 text-gray-500 flex justify-center  gap-4">
                                    <li><img src={vkIcon} alt="VK" className='w-6' /></li>
                                    <li><img src={instaIcon} alt="instagram" className='w-6' /></li>
                                    <li><img src={waIcon} alt="Whatsapp" className='w-6' /></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='relative w-full'>

                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6529b819bb76ed533b5f0284c9b21b934b28507b3cde31c12fa0fdc5632af94e&amp;source=constructor"
                        className="w-full mt-8 h-128"
                    ></iframe>
                    <div className=' absolute right-16 top-0 w-4/12 max-md:w-6/12 max-sm:w-full max-sm:static'>
                        <ContactForm />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contacts;
