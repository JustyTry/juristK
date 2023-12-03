import { Link } from "react-router-dom";
import Logo from "/images/logo.png";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Menu = ({ visible, setVisible }) => {
  useEffect(() => {
    if (document) {
      document.body.style.overflow = visible ? "hidden" : "auto";
    }
  }, [visible]);
  return (
    <div
      className={`fixed  right-0 z-40 w-full overflow-hidden whitespace-nowrap bg-darkblue text-white ${
        visible
          ? "transition-width h-full duration-500 ease-in-out"
          : "transition-width h-0 duration-500 ease-in-out "
      }`}
    >
      <div className="flex h-full w-full flex-col items-center justify-between text-4xl">
        <div className="mt-8">
          <Link to="/" onClick={() => setVisible(!visible)}>
            {" "}
            <LazyLoadImage src={Logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        <div
          className="absolute right-6 top-11 hidden text-lg max-md:block"
          onClick={() => setVisible(!visible)}
        >
          ╳
        </div>
        <ul className="mt-32 flex h-full w-full flex-col items-center justify-start gap-y-6">
          <li>
            <Link to="/" onClick={() => setVisible(!visible)}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setVisible(!visible)}>
              Кто мы
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setVisible(!visible)}>
              Услуги
            </Link>
          </li>
          <li>
            <Link to="/contacts" onClick={() => setVisible(!visible)}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className="mb-16">
          <Link to="/contacts">+7-933-335-10-66</Link>
        </div>
      </div>
    </div>
  );
};
export default Menu;
