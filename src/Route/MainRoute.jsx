import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from './../Pages/Registration/Registration';

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/login",
                element:<LogIn></LogIn>
            },
            {
                path: "/registration",
                element:<Registration></Registration>
            },
        ]
    }
])

export default MainRoute;