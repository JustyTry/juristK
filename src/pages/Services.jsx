import ContactForm from "../components/ContactForm";
import Record from "../components/Record";
import FamilylawImage from "/images/familylaw.jpg"
import InheritancelawImage from "/images/inheritancelaw.jpg"
import HousingImage from "/images/housing.jpg"
import DisputesbanksImage from "/images/disputesbanks.jpg"
import DisputesorganiztionsImage from "/images/disputesorganiztions.jpg"
import CopyrightImage from "/images/copyright.jpg"
import FactfindingImage from "/images/factfinding.jpg"
import TransactionsupportImage from "/images/transactionsupport.jpg"
import ConsumerprotectionImage from "/images/consumerprotection.jpg"
import CompensationImage from "/images/compensation.jpg"
import RealEstateImage from "/images/realestate.jpg"
import BankruptcyImage from "/images/bankruptcy.jpg"
import AutorightImage from "/images/autoright.jpg"
import CivillawImage from "/images/civillaw.jpg"
const Services = () => {

    return (
        <div className="w-full">
            <div className="w-full bg-light flex justify-center">
                <div className="w-8/12 max-lg:w-full my-8">
                    <h2 className="w-full text-center text-7xl max-md:text-6xl mb-8">
                        <span className="text-darkblue">Физическим </span>
                        <span className="text-beige">лицам</span>
                    </h2>

                    <div className="w-full flex justify-between after:content-[''] after:w-30% max-md:justify-around gap-y-12 max-sm:flex-col flex-wrap">
                        <Record title="семейное право" link="familylaw" image={FamilylawImage} />
                        <Record title="наследственное право" link="inheritancelaw" image={InheritancelawImage} />
                        <Record title="жилищное право" link="housing" image={HousingImage} />
                        <Record title="споры с банками" link="disputesbanks" image={DisputesbanksImage} />
                        <Record title="споры со страховыми и кредитными организациями" link="disputesorganiztions" image={DisputesorganiztionsImage} />
                        <Record title="защита авторских прав" link="copyright" image={CopyrightImage} />
                        <Record title="судебное установление фактов" link="factfinding" image={FactfindingImage} />
                        <Record title="сопровождение сделок" link="transactionsupport" image={TransactionsupportImage} />
                        <Record title="защита прав потребителей" link="consumerprotection" image={ConsumerprotectionImage} />
                        <Record title="возмещение вреда здоровью" link="compensation" image={CompensationImage} />
                        <Record title="земельное право и недвижимость" link="realestate" image={RealEstateImage} />
                        <Record title="банкротство" link="bankruptcy" image={BankruptcyImage} />
                        <Record title="авто право" link="autoright" image={AutorightImage} />
                        <Record title="гражданское право" link="civillaw" image={CivillawImage} />
                    </div>
                </div>
            </div>
            <div className="w-full bg-darkblue flex justify-center">
                <div className="w-8/12 max-lg:w-full my-8">
                    <h2 className="w-full text-center text-7xl max-md:text-6xl mb-8">
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
