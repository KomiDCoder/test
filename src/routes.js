import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Farnoosh from "./pages/farnoosh";
import AllMovies from "./pages/allMovies";
import Movies from "./pages/movies";
import {createBrowserRouter} from "react-router-dom"
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/all",
      element: <AllMovies />,
    },
    {
      path: "/farnoosh",
      element: <Farnoosh />,
    },
    {
      path: "/aboutus",
      element: <ContactUs />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
  ]);
  export default router