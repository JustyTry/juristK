import { useForm } from "react-hook-form";
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md'
import { useState } from 'react';

const ContactForm = ({ formRef }) => {
    const [sent, setSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();

    const onSubmit = (data) => {
        setSent(true);
        const formData = {
            name: data.name,
            fullname: data.fullname,
            email: data.email,
            number: data.number,
            description: data.description
        };

        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Письмо успешно отправлено');
                } else {
                    console.log('Ошибка при отправке письма');
                }
            })
            .catch(error => {
                console.log('Ошибка при отправке письма:', error);
            });
        reset()
    };

    return (
        <div className="w-full flex max-md:flex-col gap-x-8 mb-8" ref={formRef}>

            <div className="w-6/12 max-md:w-full">
                <div className="">
                    <h2 className="[font-size:_clamp(3rem,5vw,4em)]  max-md:text-center h-16">
                        <span className="mr-2 text-darkblue">Напишите </span>
                        <span className="text-beige">нам</span>
                    </h2>
                    <p className="mt-6 h-12">
                        Если у вас имеется какой-либо вопрос или проблема, вы можете связаться с нами. Мы
                        ответим как можно скорей.
                    </p>
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex justify-center flex-wrap h-96 mt-2"
                        action="https://formspree.io/f/mgejprdb"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div className="w-1/2 pr-6 h-12 relative">
                            <input
                                {...register('name', { required: true })}
                                placeholder="Имя"
                                className="w-full h-full border-2 pl-3"
                            />
                            {errors.name && (
                                <span className="absolute left-0 -bottom-5 text-red-600">Заполните поле</span>
                            )}
                        </div>

                        <div className="w-1/2 pl-6 h-12 relative">
                            <input
                                {...register('fullname', { required: true })}
                                placeholder="Фамилия"
                                className="w-full h-full border-2 pl-3"
                            />
                            {errors.fullname && (
                                <span className="absolute left-6 -bottom-5 text-red-600">Заполните поле</span>
                            )}
                        </div>
                        <div className="w-1/2 pr-6 h-12 relative">
                            <input
                                {...register('email', { required: true })}
                                placeholder="Email"
                                className="w-full h-full border-2 pl-3"
                            />
                            {errors.email && (
                                <span className="absolute left-0 -bottom-5 text-red-600">Заполните поле</span>
                            )}
                        </div>
                        <div className="w-1/2 pl-6 h-12 relative">
                            <input
                                {...register('phone', { required: true })}
                                type="number"
                                placeholder="Номер телефона"
                                className="w-full h-full border-2 pl-3"
                            />
                            {errors.phone && (
                                <span className="absolute left-6 -bottom-5 text-red-600">Заполните поле</span>
                            )}
                        </div>
                        <div className="w-full  mb-1 relative">
                            <textarea
                                {...register('description', { required: true })}
                                className="w-full resize-none h-full pl-3 pt-2 block"
                                placeholder="Описание"></textarea>
                            {errors.description && (
                                <span className="absolute left-0 -bottom-5 text-red-600">Заполните поле</span>
                            )}
                        </div>

                        <div className="w-full flex justify-end max-md:justify-center items-center text-white">
                            <input
                                type="submit"
                                value={`${sent ? 'Отправлено' : 'Отправить'}`}
                                className={`w-40 bg-beige h-12 cursor-pointer text-lg ${sent && 'bg-gray-600 transform delay-200 duration-500'
                                    }`}
                                disabled={sent}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-6/12 max-md:w-full mt-4">
                <ul className="flex flex-col justify-start text-xl text-gray-800">

                    <li><MdLocationPin className='inline mr-1' /> г. Красноярск, ул.Копылова, 66</li>
                    <li><MdMail className='inline mr-2' />u2151066@mail.ru</li>
                    <li><MdPhone className='inline mr-2' />+7-933-335-10-66</li>
                </ul>
                <div className="w-full">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6529b819bb76ed533b5f0284c9b21b934b28507b3cde31c12fa0fdc5632af94e&amp;source=constructor"
                        className="w-full mt-5 h-96"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;