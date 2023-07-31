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
                        <Record title="семейное право" link="familylaw" image="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        <Record title="наследственное право" link="inheritancelaw" image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <Record title="жилищное право" link="housing" image="https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
                        <Record title="споры с банками" link="disputesbanks" image="https://images.freeimages.com/images/large-previews/f94/credit-cards-1411613.jpg" />
                        <Record title="споры со страховыми и кредитными организациями" link="disputesorganiztions" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="защита авторских прав" link="copyright" image="https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        <Record title="судебное установление фактов" link="factfinding" image="https://images.freeimages.com/variants/QuuC9UEPkX1XXr86bipUSZKZ/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d" />
                        <Record title="сопровождение сделок" link="transactionsupport" image="https://images.freeimages.com/variants/FVn9Dhjn2zgftnfG3BbG6Dvd/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d" />
                        <Record title="защита прав потребителей" link="consumerprotection" image="https://images.freeimages.com/variants/SBjon3NemmLF68cMF7nqHrag/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d" />
                        <Record title="возмещение вреда здоровью" link="compensation" image="https://images.freeimages.com/images/large-previews/910/stethoscope-6-1533096.jpg" />
                        <Record title="земельное право и недвижимость" link="realestate" image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80" />
                        <Record title="банкротство" link="bankruptcy" image="https://images.unsplash.com/photo-1624811532681-e58a7e25f273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <Record title="авто право" link="autoright" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
                        <Record title="гражданское право" link="civillaw" image="https://obrazovaka.ru/wp-content/uploads/2018/07/nalogovoe-pravo-e1530494918344.jpg" />
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
