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
import Dessert from "../Pages/Menu/Dessert/Dessert";
import Beef from "../Pages/Menu/Beef/Beef";
import Mutton from "../Pages/Menu/Mutton/Mutton";
import Salad from "../Pages/Menu/Salad/Salad";
import FastFood from "../Pages/Menu/Fast Food/FastFood";
import SeaFood from "../Pages/Menu/Sea Food/SeaFood";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Reservation from "../Pages/Reservation/Reservation";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashBoardCart from "../Pages/Dashboard/Pages/DashBoardCart";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/menu/dessert",
        element: (
          <PrivateRoute>
            <Dessert></Dessert>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/beef",
        element: (
          <PrivateRoute>
            <Beef></Beef>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/mutton",
        element: (
          <PrivateRoute>
            <Mutton></Mutton>
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
        path: "/menu/salad",
        element: (
          <PrivateRoute>
            <Salad></Salad>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/fastFood",
        element: (
          <PrivateRoute>
            <FastFood></FastFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/menu/seaFood",
        element: (
          <PrivateRoute>
            <SeaFood></SeaFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>,
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
        element: <ShoppingCart></ShoppingCart>,
      },
      {
        path: "/shoppingCart/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <DashBoardCart></DashBoardCart>,
      },
    ],
  },
]);

export default MainRoute;