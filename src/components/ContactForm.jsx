import { useForm } from "react-hook-form";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const ContactForm = ({ formRef }) => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setSent(true);
    const formData = {
      name: data.name,
      fullname: data.fullname,
      email: data.email,
      number: data.number,
      description: data.description,
    };

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    reset();
  };

  return (
    <div
      className="mb-8 flex w-full gap-x-8 max-md:flex-col max-md:px-8"
      ref={formRef}
    >
      <div className="w-6/12 max-md:w-full">
        <div>
          <h2 className="h-16  [font-size:_clamp(2.9rem,5vw,4em)] max-md:text-center">
            <span className="mr-2 text-darkblue">Напишите </span>
            <span className="text-beige">нам</span>
          </h2>
          <p className="mt-6 h-12 max-sm:h-20">
            Если у вас имеется какой-либо вопрос или проблема, вы можете
            связаться с нами. Мы ответим как можно скорей.
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-2 flex h-96 flex-wrap justify-center"
            action="https://formspree.io/f/mgejprdb"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="relative h-12 w-1/2 pr-6 max-sm:pr-2">
              <input
                {...register("name", { required: true })}
                placeholder="Имя"
                className="h-full w-full border-2 pl-3"
              />
              {errors.name && (
                <span className="absolute -bottom-5 left-0 text-red-600">
                  Заполните поле
                </span>
              )}
            </div>

            <div className="relative h-12 w-1/2 pl-6 max-sm:pl-2">
              <input
                {...register("fullname", { required: true })}
                placeholder="Фамилия"
                className="h-full w-full border-2 pl-3"
              />
              {errors.fullname && (
                <span className="absolute -bottom-5 left-6 text-red-600">
                  Заполните поле
                </span>
              )}
            </div>
            <div className="relative h-12 w-1/2 pr-6 max-sm:pr-2">
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="h-full w-full border-2 pl-3"
              />
              {errors.email && (
                <span className="absolute -bottom-5 left-0 text-red-600">
                  Заполните поле
                </span>
              )}
            </div>
            <div className="relative h-12 w-1/2 pl-6 max-sm:pl-2">
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="Номер телефона"
                className="h-full w-full border-2 pl-3"
              />
              {errors.phone && (
                <span className="absolute -bottom-5 left-6 text-red-600">
                  Заполните поле
                </span>
              )}
            </div>
            <div className="relative  mb-1 w-full">
              <textarea
                {...register("description", { required: true })}
                className="block h-full w-full resize-none pl-3 pt-2"
                placeholder="Описание"
              ></textarea>
              {errors.description && (
                <span className="absolute -bottom-5 left-0 text-red-600">
                  Заполните поле
                </span>
              )}
            </div>

            <div className="flex w-full items-center justify-end text-white max-md:justify-center">
              <input
                type="submit"
                value={`${sent ? "Отправлено" : "Отправить"}`}
                className={`h-12 w-40 cursor-pointer bg-beige text-lg ${
                  sent && "transform bg-gray-600 delay-200 duration-500"
                }`}
                disabled={sent}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4 w-6/12 max-md:w-full">
        <ul className="flex flex-col justify-start text-xl text-gray-800">
          <li>
            <MdLocationPin className="mr-1 inline" /> г. Красноярск,
            ул.Копылова, 66
          </li>
          <li>
            <MdMail className="mr-2 inline" />
            u2151066@mail.ru
          </li>
          <li>
            <MdPhone className="mr-2 inline" />
            +7-933-335-10-66
          </li>
        </ul>
        <div className="w-full">
          <YMaps>
            {" "}
            <Map
              defaultState={{
                center: [56.01278755471133, 92.81413307970227],
                zoom: 19,
              }}
              className="mt-5 h-96 w-full"
            >
              <Placemark geometry={[56.01278755471133, 92.81413307970227]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
