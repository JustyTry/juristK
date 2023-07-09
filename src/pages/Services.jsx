import ContactForm from "../components/ContactForm";
import Record from "../components/Record";

const Services = () => {

    return (
        <div className="w-full">
            <div className="w-full bg-light flex justify-center">
                <div className="w-8/12 max-lg:w-full my-8">
                    <h2 className="w-full text-center text-7xl mb-8">
                        <span className="text-darkblue">Физическим </span>
                        <span className="text-beige">лицам</span>
                    </h2>

                    <div className="w-full flex justify-between after:content-[''] after:w-30% max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">
                        <Record title="семейное право" image="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        <Record title="наследственное право" image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <Record title="жилищное право" image="https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
                        <Record title="споры с банками" image="https://media2.malaymail.com/uploads/articles/2014-04/visa_mastercard.png" />
                        <Record title="споры со страховыми и кредитными организациями" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="защита авторских прав" image="https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        <Record title="судебное установление фактов" image="https://images.unsplash.com/photo-1555374018-13a8994ab246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80" />
                        <Record title="сопровождение сделок" image="https://www.viqu.co.uk/wp-content/uploads/2015/09/38826275042_abcea30792_b.jpg" />
                        <Record title="защита прав потребителей" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="возмещение вреда здоровью" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="земельное право и недвижимость" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="банкротство" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="авто право" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="гражданское право" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                    </div>
                </div>
            </div>
            <div className="w-full bg-darkblue flex justify-center">
                <div className="w-8/12 max-lg:w-full my-8">
                    <h2 className="w-full text-center text-7xl mb-8">
                        <span className="text-white">Юридическим </span>
                        <span className="text-beige">лицам</span>{' '}
                    </h2>
                    <div className="w-full flex justify-between max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">
                        <Record title="сопровождение сделок" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="арбитраж" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="договорное право" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="взыскание долгов и убытков" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="восстановление утраченных документов" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="юридическое сопровождение бизнеса" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="бухгалтерское сопровождение бизнеса" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="налоговые дела" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="кадровое делопроизводство" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                    </div>

                </div>
            </div>
            <div className="w-full bg-light flex justify-center">
                <div className="w-8/12 mt-8 max-lg:w-full">
                    <h2 className="text-7xl max-md:text-center">
                        <span className="mr-2 text-darkblue">Напишите </span>
                        <span className="text-beige">нам</span>
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </div>

        //Регистрация и ликвидация предприятий:регистрация НОУ, АНО, регистрация АО, перерегистрация, ликвидация фирм, регистрация ООО, внесение изменений в документы, регистрация ИП, банкротство
    );
};

export default Services;
