import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "./../../assets/Logos/1.svg";
import logo2 from "./../../assets/Logos/2.svg";
import { ThemeContext } from "../../useContext/allContext";
import { useContext } from "react";
import useAuth from "../../Hooks/useAuth";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsers, FaCartPlus } from "react-icons/fa";
import { PiNewspaperFill } from "react-icons/pi";
import { MdPayments } from "react-icons/md";

const DashboardSideBar = () => {
    const location = useLocation()
    const { darkMode } = useContext(ThemeContext);
    const { user } = useAuth();

    return (
      <div
        className={` ${
          darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
        } sidebar min-h-screen w-[20rem] shadow-md px-2 text-center `}
      >
        <div className="w-[10rem] border-b-2 border-primary px-4 pb-1 rounded-md mt-4 mb-5 mx-auto ">
          <Link to={"/"}>
            <img
              src={darkMode ? logo2 : logo1}
              alt="Radiant Bites's Logo"
              className="w-full"
            />
          </Link>
        </div>

        {/* admin */}
        <div className="mt-12">
          <div className="">
            <img
              src={user?.photoURL}
              alt="admin's image"
              className="rounded-full mx-auto "
            />
          </div>
          <div className="mt-3">
            <h1>{user?.displayName}</h1>
            <h2 className="text-sm mt-1.5 -1 ">{user?.email} </h2>
            <h3>Admin ID: 12334455</h3>
          </div>
        </div>
        {/* admin */}

        <div className="mt-5 ">
          <ul className="flex flex-col gap-2">
            <li className="group">
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/dashboard"
                    ? "px-4 py-1.5 rounded-md text-primary bg-white flex items-center gap-3 duration-500"
                    : "px-4 py-1.5 rounded-md group-hover:text-white flex items-center gap-3 duration-500"
                }
              >
                <RiDashboardFill></RiDashboardFill>
                Dashboard
              </NavLink>
            </li>
            <li className=" group">
              <NavLink
                to={"/dashboard/payments"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/dashboard/payments"
                    ? "px-4 py-1.5 rounded-md text-primary bg-white flex items-center gap-3 duration-500"
                    : "px-4 py-1.5 rounded-md group-hover:text-white flex items-center gap-3 duration-500"
                }
              >
                <MdPayments></MdPayments>
                Payments
              </NavLink>
            </li>
            <li className=" group">
              <NavLink
                to={"/dashboard/reviews"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/dashboard/reviews"
                    ? "px-4 py-1.5 rounded-md text-primary bg-white flex items-center gap-3 duration-500"
                    : "px-4 py-1.5 rounded-md group-hover:text-white flex items-center gap-3 duration-500"
                }
              >
                <PiNewspaperFill></PiNewspaperFill>
                Reviews
              </NavLink>
            </li>
            <li className=" group">
              <NavLink
                to={"/dashboard/users"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/dashboard/users"
                    ? "px-4 py-1.5 rounded-md text-primary bg-white flex items-center gap-3 duration-500"
                    : "px-4 py-1.5 rounded-md group-hover:text-white flex items-center gap-3 duration-500"
                }
              >
                <FaUsers></FaUsers>
                Users
              </NavLink>
            </li>
            <li className=" group">
              <NavLink
                to={"/dashboard/cart"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/dashboard/cart"
                    ? "px-4 py-1.5 rounded-md text-primary bg-white flex items-center gap-3 duration-500"
                    : "px-4 py-1.5 rounded-md group-hover:text-white flex items-center gap-3 duration-500"
                }
              >
                <FaCartPlus></FaCartPlus>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};
export default DashboardSideBar;







