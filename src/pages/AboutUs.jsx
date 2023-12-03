import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Кто мы";
  });
  return (
    <div className="flex w-full flex-col items-center bg-light text-xl text-darkblue">
      <div className="my-8 w-8/12 text-left text-xl max-lg:w-full">
        <h2 className="h-16 text-center  [font-size:_clamp(2.9rem,5vw,4em)] max-md:text-center">
          <span className="mr-2 text-darkblue">Кто </span>
          <span className="text-beige">мы</span>
        </h2>
        <p className="indent-8">
          Компания ЮристⓀ существует уже более трех лет и на сегодняшний день
          имеет более сотни довольных клиентов. Наша компания основана двумя
          высококвалифицированными специалистами, которые имеют более чем
          15-летний опыт работы в сфере юриспруденции.
        </p>

        <p className="indent-8">
          Мы предоставляем широкий спектр юридических услуг, включая
          корпоративное право, налоговое право, трудовое право, гражданское
          право, семейное право, интеллектуальную собственность, арбитраж,
          недвижимость и международное право. Мы готовы предоставить комплексные
          решения для любых юридических вопросов. Наша команда юристов
          гарантирует профессиональный подход к каждому клиенту, а также строгое
          соблюдение этических принципов и стандартов в работе. Мы готовы дать
          нашим клиентам квалифицированную помощь в любых юридических вопросах,
          включая консультации, составление документов, представление интересов
          в суде и арбитраже, а также другие виды юридических услуг. В нашей
          работе мы используем индивидуальный подход к каждому клиенту и
          стремимся разработать оптимальную стратегию, которая удовлетворит все
          потребности наших клиентов. Мы готовы работать с физическими и
          юридическими лицами, независимо от сложности вопроса.
        </p>
        <p className="indent-8">
          Мы уделяем особое внимание общению с нашими клиентами и гарантируем
          полную конфиденциальность и защиту данных. Мы ценим доверие, которое
          наши клиенты оказывают нам, и всегда готовы предоставить лучшее
          качество услуг. Если вы ищете надежного партнера в области юридических
          услуг, обращайтесь к нам. Мы готовы предоставить вам
          высококачественную и профессиональную помощь в любых юридических
          вопросах. Свяжитесь с нами сегодня, чтобы получить консультацию и
          начать работу с нашей компанией.
        </p>
      </div>
      <div className="my-8 w-8/12 text-xl max-lg:w-full">
        <h2 className="h-16 text-center  [font-size:_clamp(2.6rem,5vw,4em)] max-md:text-center">
          <span className="mr-2 text-darkblue">Наши </span>
          <span className="text-beige">специалисты</span>
        </h2>
        <div className="my-8 flex w-full gap-x-6 max-md:flex-col max-md:items-center">
          <div className="h-60 w-60 overflow-hidden rounded-full">
            <LazyLoadImage
              src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg?imwidth=680"
              className="h-full w-60 object-cover object-top"
              width={240}
              height={240}
              alt="Иван"
            />
          </div>
          <div className="flex w-full flex-col justify-center max-md:items-center max-md:text-center">
            <h2 className="text-4xl text-beige">Иван</h2>
            <span className="text-lg">
              Иван - талантливый и преданный своей профессии юрист. Он обладает
              глубокими знаниями в различных областях права и имеет значительный
              опыт работы. Иван проявляет высокую ответственность и
              внимательность к деталям, что позволяет ему эффективно разрешать
              правовые вопросы своих клиентов. Он обладает отличными навыками
              коммуникации и способностью находить компромиссы, что позволяет
              ему успешно представлять интересы своих клиентов.
            </span>
          </div>
        </div>
        <div className="my-8 flex w-full gap-x-6 max-md:flex-col-reverse max-md:items-center">
          <div className="flex w-full flex-col justify-center text-right max-md:items-center max-md:text-center">
            <h2 className="text-4xl text-beige">Светлана</h2>
            <span className="text-lg">
              Светлана - опытный и компетентный юрист с глубокими знаниями в
              различных областях права. Она обладает высоким профессионализмом и
              стремится предоставить своим клиентам качественные юридические
              услуги. Светлана отличается внимательным и индивидуальным подходом
              к каждому клиенту, помогая им разрешать правовые вопросы и
              достигать своих целей.
            </span>
          </div>
          <div className="h-60 w-60 overflow-hidden rounded-full">
            <LazyLoadImage
              src={"../public/images/face1.jpg"}
              className="h-full w-60 object-cover object-top"
              width={240}
              height={240}
              alt="Светлана"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
