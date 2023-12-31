import Header from "./components/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import ContactForm from "./components/ContactForm";
import { useRef } from "react";

function App() {
  const formRef = useRef(null);
  const handleScrollToContactForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const Layout = ({ Page }) => {
    return (
      <div className="flex h-screen flex-col justify-between font-lato font-normal">
        <Header handleScrollToContactForm={handleScrollToContactForm} />

        <Page />
        <div className="flex w-full justify-center bg-light">
          <div className="mt-8 w-8/12 max-xl:w-full">
            <ContactForm formRef={formRef} />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout Page={Home} />,
      errorElement: <Navigate to="/" replace />,
    },
    {
      path: "/about",
      element: <Layout Page={AboutUs} />,
    },
    {
      path: "/services",
      element: <Layout Page={Services} />,
    },
    {
      path: "/service/:type/:name",
      element: <Layout Page={Service} />,
    },
    {
      path: "/contacts",
      element: <Layout Page={Contacts} />,
    },
  ]);

  return (
    <div className="text-lato">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
