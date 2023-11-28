import clockIcon from "/images/clockIcon.png";
import contactIcon from "/images/contactIcon.png";
import locationIcon from "/images/locationIcon.png";
import vkIcon from "/images/vkIcon.png";
import instaIcon from "/images/instIcon.png";
import waIcon from "/images/waIcon.png";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    document.title = "Контакты";
  });
  return (
    <div className=" bg-light ">
      <div className="flex w-full flex-col items-center ">
        <h1 className=" mt-8 w-8/12 text-center text-4xl text-darkblue max-md:w-full">
          Мы расположены в Красноярске, Копылова 66
        </h1>
        <h6 className=" mt-8 w-6/12  text-center text-lg text-gray-500 max-xl:w-8/12 max-md:w-full">
          Для связи с нами используйте представленные ниже номер телефона или
          контакную форму, либо напишите нам на почту u2151066@mail.ru
        </h6>
        <div className=" my-16 flex w-full justify-center">
          <ul className="flex w-8/12 justify-between gap-8 max-xl:w-full max-md:flex-col">
            <li>
              <div className="flex flex-col items-center">
                <img src={locationIcon} alt="" className="h-16" />
                <div className="mt-4 text-gray-500">
                  г. Красноярске ул.Копылова, 66
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <img src={clockIcon} alt="" className="h-16" />
                <ul className="mt-4 text-center text-gray-500">
                  <li>Рабочие дни:</li>
                  <li>09:00–19:00</li>
                  <li>суббота: 10:00–15:00</li>
                  <li>воскресенье: выходной</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <img src={contactIcon} alt="" className="h-16" />
                <div className="mt-4">Тел: 7-933-335-10-66</div>
                <ul className="mt-2 flex justify-center gap-4  text-gray-500">
                  <li>
                    <a href="https://vk.com/u2151066">
                      <img src={vkIcon} alt="VK" className="w-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/u2151066">
                      <img src={instaIcon} alt="instagram" className="w-6" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+79333351066">
                      <img src={waIcon} alt="Whatsapp" className="w-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
