import useAuth from "../Hooks/useAuth";
import {Navigate, useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast";
import Spinner from './../SharedComponents/Spinner';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center">
            <Spinner></Spinner>
        </div>
    }

    if (user?.email) {
        return children
    } else {
        toast.error("Please Logged in");
    }

    return <Navigate state={location.pathname} to={"/logIn"} replace ></Navigate>
};
export default PrivateRoute;