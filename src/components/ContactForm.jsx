import { useForm } from "react-hook-form";
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md'
import { useState } from 'react';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [sent, setSent] = useState(false);
    const onSubmit = (data) => {
        setSent(true);
        console.log(data);
    };

    return (
        <div className="w-full flex max-md:flex-col gap-x-8">

            <div className="w-6/12 max-md:w-full">
                <p className="mt-6">
                    Если у вас имеется какой-либо вопрос или проблема, вы можете связаться с нами. Мы
                    ответим как можно скорей.
                </p>
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex justify-between flex-wrap gap-y-6 my-8">
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

                        <div className="w-1/2 pl-6 h-12">
                            {' '}
                            <input
                                {...register('fullname', { required: true })}
                                placeholder="Фамилия"
                                className="w-full h-full border-2 pl-3"
                            />
                        </div>
                        <div className="w-1/2 pr-6 h-12">
                            {' '}
                            <input
                                {...register('email', { required: true })}
                                placeholder="Email"
                                className="w-full h-full border-2 pl-3"
                            />
                        </div>
                        <div className="w-1/2 pl-6 h-12">
                            {' '}
                            <input
                                {...register('phone', { required: true })}
                                type="number"
                                placeholder="Номер телефона"
                                className="w-full h-full border-2 pl-3"
                            />
                        </div>
                        <div className="w-full">
                            <textarea
                                {...register('description', { required: true })}
                                className="w-full h-32 pl-3 pt-2"
                                placeholder="Описание"></textarea>
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
            <div className="w-6/12 max-md:w-full">
                <ul className="flex flex-col justify-start text-xl text-gray-800">

                    <li><MdLocationPin className='inline mr-1' /> г. Красноярск, ул.Копылова, 66</li>
                    <li><MdMail className='inline mr-2' />test@test.com</li>
                    <li><MdPhone className='inline mr-2' />+7-933-335-10-66</li>
                </ul>
                <div className="w-full">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6529b819bb76ed533b5f0284c9b21b934b28507b3cde31c12fa0fdc5632af94e&amp;source=constructor"
                        className="w-full pb-8 mt-5 h-96"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;