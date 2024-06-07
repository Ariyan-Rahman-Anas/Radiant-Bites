import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo2 from "./../../assets/Logos/2.svg";
import { ThemeContext } from "../../useContext/allContext";
import { useContext, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsers, FaCartPlus, FaCheckCircle } from "react-icons/fa";
import { PiNewspaperFill } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import Avatar from "./../../assets/images/Avatar.png";

const DashboardSideBar = () => {
    const location = useLocation()
    const { darkMode } = useContext(ThemeContext);
    const { user } = useAuth();

  const [menu, setMenu] = useState(false);

  const handleHidingMenu = () => {
    setMenu(!menu);
  }
  
  
  
    return (
      <>
        <div
          className={`hidden md:block sidebar bg-gray-800 text-gray-400 min-h-screen w-[20rem] shadow-r-md px-2 text-center `}
        >
          <div className="w-[10rem] border-b-2 border-primary px-4 pb-1 rounded-md mt-4 mb-5 mx-auto ">
            <Link to={"/"}>
              <img src={logo2} alt="Radiant Bites's Logo" className="w-full" />
            </Link>
          </div>

          {/* admin */}
          <div className="mt-12">
            <div className="w-[5rem] mx-auto">
              <img
                src={user.photoURL ? user.photoURL : Avatar}
                alt="admin's image"
                className="h-full w-full rounded-full mx-auto "
              />
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-center gap-2 text-gray-100 ">
                <h1 className="font-semibold text-xl">
                  {user.displayName ? user.displayName : "Mr. Not Given"}
                </h1>
                <FaCheckCircle className="text-sm"></FaCheckCircle>
              </div>
              <h2 className="text-sm mt-1.5 -1 ">{user?.email} </h2>
              <h3>Admin ID: 12334455</h3>
            </div>
          </div>
          {/* admin */}

          <div className="mt-5 ">
            <ul className="flex flex-col gap-2 px-2 ">
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

        {/* this is for small devices */}
        <div
          className={`bg-gray-800 sticky top-0 z-[100] md:hidden min-w-full  `}
        >
          <div className="top-section  p-1.5 flex items-center justify-between">
            <div className="w-[8rem] ">
              <NavLink to={"/"}>
                <img src={logo2} alt="radiant bite's logo" />
              </NavLink>
            </div>
            <div onClick={() => setMenu(!menu)}>
              {menu ? (
                <RxCross2 className="text-4xl text-primary"></RxCross2>
              ) : (
                <IoMenuOutline className="text-4xl text-gray-400 "></IoMenuOutline>
              )}
            </div>
          </div>
          <div
            className={`${
              menu ? "top-14 left-0 " : "-left-[100rem]"
            } absolute nav-items min-h-screen bg-gray-700 text-gray-400 min-w-full duration-700 `}
          >
            <div className="mx- rounded-b-md bg-gray-800 p-5 shadow-md shadow-gray-200">
              <ul className="flex flex-col gap-2 px-2  ">
                <li onClick={handleHidingMenu} className="group">
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
                <li onClick={handleHidingMenu} className=" group">
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
                <li onClick={handleHidingMenu} className=" group">
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
                <li onClick={handleHidingMenu} className=" group">
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
                <li onClick={handleHidingMenu} className=" group">
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
            {/* admin */}
            <div className="my-6 text-center">
              <div className="">
                <img
                  src={user?.photoURL}
                  alt="admin's image"
                  className="rounded-full mx-auto "
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-center gap-2 text-gray-100 ">
                  <h1 className="font-semibold">{user?.displayName}</h1>
                  <FaCheckCircle className="text-sm"></FaCheckCircle>
                </div>
                <h2 className="text-sm mt-1.5 -1 ">{user?.email} </h2>
                <h3>Admin ID: 12334455</h3>
              </div>
            </div>
            {/* admin */}
          </div>
        </div>
      </>
    );
};
export default DashboardSideBar;







