import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "./../Pages/Registration/Registration";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import ChefSpecial from "../Pages/Menu/Chef Special/ChefSpecial";
import Chicken from "../Pages/Menu/Chicken/Chicken";
import TodayOffer from "../Pages/Menu/Today Offer/TodayOffer";
import BDTraditional from "../Pages/Menu/BD Traditional/BDTraditional";
import Appetizers from "../Pages/Menu/Appetizers/Appetizers";
import App from "../App";
import PrivateRoute from './PrivateRoute';
import ShoppingCart from "../Pages/Shopping Cart/ShoppingCart";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        element: (
          <PrivateRoute>
            <ChefSpecial></ChefSpecial>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/todayOffer",
        element: (
          <PrivateRoute>
            <TodayOffer></TodayOffer>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/bdTraditional",
        element: (
          <PrivateRoute>
            <BDTraditional></BDTraditional>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/appetizer",
        element: (
          <PrivateRoute>
            <Appetizers></Appetizers>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/chicken",
        element: (
          <PrivateRoute>
            <Chicken></Chicken>
          </PrivateRoute>
        ),
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
      {
        path: "/shoppingCart",
        element:<ShoppingCart></ShoppingCart>
      },
    ],
  },
]);

export default MainRoute;