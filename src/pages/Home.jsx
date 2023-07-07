import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Home = () => {
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
        <div className="w-full bg-light">
            <div className="w-full flex justify-center my-32 max-lg:my-24 max-md:my-8">
                <ul className="w-8/12 max-lg:w-full flex justify-between text-darkblue text-center max-md:flex-col max-md:gap-8 ">
                    <li>
                        <div className="text-7xl">500+</div>
                        <div>Довольных клиентов</div>
                    </li>
                    <li>
                        <div className="text-7xl border-x ">5+</div>
                        <div>Лет выслуги</div>
                    </li>
                    <li>
                        <div className="text-7xl border-x ">15+</div>
                        <div>Лет опыта сотрудников</div>
                    </li>
                    <li>
                        <div className="text-7xl">1000+</div>
                        <div>Успешных дел</div>
                    </li>
                </ul>
            </div>
            <div className="w-full  mt-8 flex justify-center mb-24 ">
                <div className="w-8/12 max-lg:w-full relative">
                    <h2 className="flex text-7xl justify-between max-md:flex-col">
                        <div className='w-5/12 max-md:text-center max-md:w-full'>
                            <span className=" text-darkblue mr-2">Кто </span>
                            <span className="text-beige ">мы</span>
                        </div>
                        <p className=" text-base w-7/12 max-md:w-full pt-6 pl-8">
                            Добро пожаловать в фирму ЮристК, юридическую фирму созданную для защиты прав и
                            интересов наших клиентов
                        </p>
                    </h2>
                    <div className="mt-8 flex justify-between max-md:flex-col overflow-hidden ">
                        <img
                            src="https://bogatyr.club/uploads/posts/2023-03/1677848619_bogatyr-club-p-femida-boginya-foni-instagram-15.png"
                            alt=""
                            className="w-5/12 h-128 overflow-hidden object-cover object-right max-md:w-full"
                        />
                        <div className="flex flex-col w-7/12 pl-8">
                            <div className="w-full flex ">
                                <img
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/0e/94/ef/d1/caption.jpg"
                                    alt=""
                                    className="w-1/2 h-64 overflow-hidden object-cover object-center"
                                />
                                <img
                                    src="https://media.istockphoto.com/id/910852368/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%BA%D0%BD%D0%B8%D0%B3.jpg?s=612x612&w=0&k=20&c=qih28uJoLA_IWIdW1uVVIXQ2kQlNyJGh5qbH9FvvBhc="
                                    alt=""
                                    className="w-1/2 h-64 overflow-hidden object-cover object-center ml-8"
                                />
                            </div>
                            <ul className="text-lg flex flex-col gap-3 mt-8">
                                <li>✓ Защита прав и интересов</li>
                                <li>✓ Персональный подход</li>
                                <li>✓ Опытные сотрудники</li>
                                <li>✓ Быстрое достижение результата</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-darkblue w-full flex justify-center">
                <div className=" w-8/12 max-lg:w-full">
                    <h2 className="text-5xl font-light mb-6 mt-8 max-md:text-center">
                        <span className="text-white mr-2">Сферы </span>
                        <span className=" text-beige">услуг</span>
                    </h2>
                    <div className="w-full flex justify-between max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">
                        <div className="w-30% max-md:w-2/5 max-sm:w-full">
                            <img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" className="h-10/12 object-cover" />
                            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover">
                                Criminal Defence <span className="pr-6 font-bold text-xl">→</span>
                            </div>
                        </div>
                        <div className="w-30% max-md:w-2/5 max-sm:w-full">
                            <img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" className="h-10/12 object-cover" />
                            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover">
                                Criminal Defence <span className="pr-6 font-bold text-xl">→</span>
                            </div>
                        </div> <div className="w-30% max-md:w-2/5 max-sm:w-full">
                            <img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" className="h-10/12 object-cover" />
                            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover">
                                Criminal Defence <span className="pr-6 font-bold text-xl">→</span>
                            </div>
                        </div> <div className="w-30% max-md:w-2/5 max-sm:w-full">
                            <img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" className="h-10/12 object-cover" />
                            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover">
                                Criminal Defence <span className="pr-6 font-bold text-xl">→</span>
                            </div>
                        </div> <div className="w-30% max-md:w-2/5 max-sm:w-full">
                            <img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" className="h-10/12 object-cover" />
                            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover">
                                Criminal Defence <span className="pr-6 font-bold text-xl">→</span>
                            </div>
                        </div> <div className="w-30% max-md:w-2/5 max-sm:w-full">
                            <img src="https://media.istockphoto.com/id/171574845/photo/criminal-law.jpg?s=612x612&w=0&k=20&c=xAGV2RfcnfSrh0qa0y4L7hX9sAZiExBrfNEuCN_YCps=" className="h-10/12 object-cover" />
                            <div className="capitalize bg-beige w-full text-white text-lg pl-6 py-3 flex justify-between h-2/12 object-cover">
                                Criminal Defence <span className="pr-6 font-bold text-xl">→</span>
                            </div>
                        </div>


                    </div>

                    <div className="w-full flex justify-center items-center mb-24 mt-8 ">
                        <Link
                            to="/services"
                            className=" bg-beige p-6 flex justify-center items-center text-white w-40 h-12">
                            <span> Посмотреть всё</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-light flex justify-center">
                <div className="w-8/12 mt-8 max-lg:w-full">
                    <h2 className="text-7xl max-md:text-center">
                        <span className="mr-2 text-darkblue">Напишите </span>
                        <span className="text-beige">нам</span>
                    </h2>
                    <div className="w-full flex max-md:flex-col gap-x-8">
                        <div className="w-6/12 max-md:w-full">
                            <p className="mt-6">
                                Если у вас имеется какой-либо вопрос или проблема, вы можете связаться с нами. Мы
                                ответим как можно скорей
                            </p>
                            <div>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex justify-between flex-wrap gap-y-6 my-8">
                                    <div className="w-1/2 pr-6 h-12 relative">
                                        {' '}
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
                                <li>г. Красноярск, ул.Копылова, 66</li>
                                <li>test@test.com</li>
                                <li>+7-933-335-10-66</li>
                            </ul>
                            <div className="w-full">
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A6529b819bb76ed533b5f0284c9b21b934b28507b3cde31c12fa0fdc5632af94e&amp;source=constructor"
                                    className="w-full pb-8 mt-5 h-96"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
