import Header from "./components/Header"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";


function App() {
  const Layout = ({ Page }) => {
    return (
      <div className='flex flex-col h-screen justify-between font-lato'>
        <Header />
        <Page />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout Page={Home} />,
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
      path: "/service",
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
  )
}

export default App
