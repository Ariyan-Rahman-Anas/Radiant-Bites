import { Link, NavLink, useLocation } from "react-router-dom";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import { toast } from "react-hot-toast";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import logo1 from "./../assets/Logos/1.svg";
import logo2 from "./../assets/Logos/2.svg";
import useAuth from "../Hooks/useAuth";
import { CartContext, ThemeContext } from "../useContext/allContext";
import Avatar from "./../assets/images/Avatar.png";
import { getData } from "../Hooks/apiUtils";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [userFromDB, setUserFromDB] = useState([])
  const [menu, setMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [toggleOpen, setToggleOpen] = useState(false);
  const [eligibleForDashB, setEligibleForDashB] = useState(false);
  const { cartItems } = useContext(CartContext);
  const location = useLocation()
  

//fetching all users from db to get the logged in user
  useEffect(() => {
    const fetchData = async () => {
    try {
      const responseData = await getData("users")
      setUserFromDB(responseData)
    } catch (error) {
      console.log("error is: ", error)
    }
  };
    fetchData();
  }, [])

//catching the user by find
  const catchingCurrentUserByDB = userFromDB?.find(currentUser => currentUser?.email === user?.email)

  // checking the eligibility for admin dashboard
  useEffect(() => {
    const isEligibleForDashboard = catchingCurrentUserByDB?.role === "admin";
    setEligibleForDashB(isEligibleForDashboard);
  }, [catchingCurrentUserByDB?.role]);


  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleToggleClick = () => {
    setToggleOpen(true);
    setTimeout(() => {
      setToggleOpen(false);
    }, 3000);
  };

  //for small devices, menu opening and closing
  const handleMenu = () => {
    setMenu(!menu);
  };

  //for small devices, when user clicked on an nav items the whole nav menu will hide automatically
  const hidingMenu = () => {
    setMenu(!menu);
  };

  //log out the user
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out Successfully!");
      })
      .catch(() => {});
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 shadow-gray-700" : ""
      } sticky top-0 w-full z-[1000] shadow-md `}
    >
      <nav
        className={`${
          darkMode
            ? ""
            : "bg-gradient-to-b from-green-200 to-green-50 bg-opacity-50"
        } flex md:flex-row items-center justify-between p-2  `}
      >
        <div className="navbar-start">
          <div className="w-[8rem] ">
            <Link to={"/"}>
              <img
                src={darkMode ? logo2 : logo1}
                alt="Radiant Bites's Logo"
                className="w-full"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <ul
            className={`${
              darkMode ? "text-gray-400" : "text-gray-400 md:text-black "
            } flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 absolute md:static ${
              menu
                ? "left-0 top-[3.8rem] py-10 md:py-0 right-0 bg-black md:bg-transparent rounded-md w-full min-h-screen md:min-h-0 "
                : "-left-[69rem]"
            }  duration-700 z-10 `}
          >
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/"
                    ? "border-b-2 border-b-primary rounded-sm text-primary duration-500 "
                    : "border-b-2 border-b-transparent duration-500"
                }
                // className={({ isActive }) =>
                //   isActive && location.pathname === "/"
                //     ? "px-2 py-1 rounded-sm text-white bg-green-500 duration-500 "
                //     : "px-2 py-1 group-hover:text-primary"
                // }
              >
                Homes
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/about"
                    ? "border-b-2 border-b-primary rounded-sm text-primary duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                About Us
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink
                to={"/menu"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/menu"
                    ? "border-b-2 border-b-primary rounded-sm text-primary duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                Menu
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/blog"
                    ? "border-b-2 border-b-primary rounded-sm text-primary duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                Blogs
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink
                to={"/reservation"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/reservation"
                    ? "border-b-2 border-b-primary rounded-sm text-primary duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                Reservation
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink
                to={"/shoppingCart"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/shoppingCart"
                    ? "flex items-center gap-2 border-b-2 border-b-primary rounded-sm text-primary duration-500 "
                    : "flex items-center gap-2 border-b-2 border-b-transparent duration-500 "
                }
              >
                <PiShoppingCart className="text-xl"></PiShoppingCart>
                <p className="text-white bg-primary  text-sm font-semibold px-1 rounded-md ">
                  {`+${cartItems.length}`}
                </p>
              </NavLink>
            </li>
            <li
              onClick={toggleDarkMode}
              className="text-xl cursor-pointer hidden md:block "
            >
              {darkMode ? (
                <BsSun className="text-white"></BsSun>
              ) : (
                <BsMoonStars></BsMoonStars>
              )}
            </li>
            {user ? (
              <div className="group relative bg-gray-500 rounded-md md:bg-transparent ">
                <div onClick={handleToggleClick} className="py-2 md:py-0">
                  <img
                    src={user.photoURL ? user.photoURL : Avatar}
                    alt="user picture"
                    className="w-16 md:w-10 h-16 md:h-10 rounded-full mx-auto border-[.09rem] border-primary  "
                  />
                </div>
                <div
                  className={`${
                    toggleOpen ? "md:flex" : "md:hidden"
                  } items-center justify-center h-36 w-72 rounded-md bg-black text-white text-center text-sm md:absolute md:right-0 md:top-12 z-50 border-b-[.16rem] border-b-primary pt-2 md:py-0 `}
                >
                  <div>
                    <h1 className="text-xl">
                      {user.displayName !== null
                        ? user.displayName
                        : "Mr. Not Given"}
                    </h1>
                    <h2 className="mb-3">
                      {user ? user.email : "mrNotGiven@email.com"}
                    </h2>
                    {eligibleForDashB ? (
                      <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    ) : (
                      ""
                    )}
                    <br />
                    <button onClick={handleLogOut} className="mt-5">
                      <PrimaryButton
                        value={"Logout"}
                        link={"/logIn"}
                      ></PrimaryButton>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // <li className="tex-white relative group">
              //   <NavLink to={"/logIn"} className="group-hover:text-primary">
              //     Sign in
              //     <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              //   </NavLink>
              // </li>
              <PrimaryButton value={"Log In"} link={"/logIn"}></PrimaryButton>
            )}
          </ul>
        </div>
        <div className="md:hidden flex items-center justify-center gap-6">
          <li
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl list-none "
          >
            {darkMode ? (
              <BsSun className="text-white"></BsSun>
            ) : (
              <BsMoonStars></BsMoonStars>
            )}
          </li>
          <li className="list-none">
            {user ? (
              <NavLink to={"/shoppingCart"}>
                <NavLink to={"/shoppingCart"}>
                  <div
                    className={`${
                      darkMode ? "bg-gray-700 " : "bg-white"
                    } p-1.5 rounded-md flex items-center gap-2`}
                  >
                    <PiShoppingCart className="text-xl"></PiShoppingCart>
                    <p className="bg-primary text-white text-sm font-semibold px-1 rounded-md ">
                      {`+${cartItems.length}`}
                    </p>
                  </div>
                </NavLink>
              </NavLink>
            ) : (
              <NavLink to={"logIn"}>
                <NavLink to={"/shoppingCart"}>
                  <div
                    className={`${
                      darkMode ? "bg-gray-700 " : "bg-white"
                    } p-1.5 rounded-md flex items-center gap-2`}
                  >
                    <PiShoppingCart className="text-xl"></PiShoppingCart>
                    <p className="bg-primary text-white text-sm font-semibold px-1 rounded-md ">
                      {`+${cartItems.length}`}
                    </p>
                  </div>
                </NavLink>
              </NavLink>
            )}
          </li>
          {menu ? (
            <button onClick={handleMenu}>
              <RxCross2 className="text-4xl text-primary"></RxCross2>{" "}
            </button>
          ) : (
            <button onClick={handleMenu}>
              <IoMenuOutline className="text-4xl "></IoMenuOutline>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;