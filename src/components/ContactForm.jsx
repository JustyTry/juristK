import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className=" flex justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full  bg-blue-100 bg-opacity-70 rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Имя
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...register("name", { required: true })}
                        className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                    {errors.name && <span className="text-red-500">Обязательное поле</span>}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Почта
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        {...register("email", { required: true })}
                        className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                    {errors.email && <span className="text-red-500">Обязательное поле</span>}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="phone"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Телефон
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        {...register("phone", { required: true })}
                        className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                    {errors.phone && <span className="text-red-500">Обязательное поле</span>}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Описание
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        {...register("description", { required: true })}
                        className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                    {errors.description && <span className="text-red-500">Обязательное поле</span>}
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;