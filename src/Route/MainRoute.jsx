import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "./../Pages/Registration/Registration";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import ChefSpecial from "../Pages/Menu/Chef Special/ChefSpecial";
import Chicken from "../Pages/Menu/Chicken/Chicken";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/menu/chefSpecial",
        element:<ChefSpecial></ChefSpecial>
      },
      {
        path: "/menu/chicken",
        element:<Chicken></Chicken>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default MainRoute;
