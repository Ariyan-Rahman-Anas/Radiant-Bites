import { Link, NavLink } from "react-router-dom";
import logo1 from "./../assets/Logos/1.svg";
import logo2 from "./../assets/Logos/2.svg";
import useAuth from "../Hooks/useAuth";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { ThemeContext } from "../useContext/allContext";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import {toast} from "react-hot-toast"

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menu, setMenu] = useState(false);
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  const [toggleOpen, setToggleOpen] = useState(false);
  
  // const handleClickAnywhere = () => {
  // };
  // window.addEventListener("click", handleClickAnywhere);

  const handleToggleClick = () => {
    setToggleOpen(true)
      setTimeout(() => {
        setToggleOpen(false);
      }, 3000); 
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const hidingMenu = () => {
    setMenu(!menu);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out Successfully!")
      })
      .catch(() => {});
  };

  return (
    <div>
      <nav
        className={`${
          darkMode
            ? ""
            : "bg-gradient-to-b from-green-200 to-green-50 bg-opacity-50"
        } flex md:flex-row items-center justify-between p-2 `}
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
                ? "left-0 top-[4rem] right-0 bg-black md:bg-transparent rounded-md w-full h-full "
                : "-left-[69rem]"
            }  duration-700 z-10 `}
          >
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary ">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink to={"/menu"} className="group-hover:text-primary">
                Menu
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink to={"/about"} className="group-hover:text-primary">
                About Us
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary">
                Blogs
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li onClick={hidingMenu} className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary">
                Reservation
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink to={"/shoppingCart"}>
                <PiShoppingCart className="text-xl"></PiShoppingCart>
              </NavLink>
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
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
                <div onClick={handleToggleClick}>
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="user picture"
                      className="w-10 h-10 rounded-full "
                    />
                  ) : (
                    <FaRegUser className="text-4xl border-[.09rem] rounded p-1 border-primary "></FaRegUser>
                  )}
                </div>
                <div className={`${toggleOpen ? "md:flex" : "md:hidden"} items-center justify-center h-36 w-72 rounded-md bg-black text-white text-center text-sm md:absolute md:right-0 md:top-12 z-50 border-b-[.16rem] border-b-primary pt-5 md:pt-0 `}>
                  <div>
                    <h1 className="text-xl">
                      {user.displayName !== null
                        ? user.displayName
                        : "Mr. Not Given"}
                    </h1>
                    <h2>{user ? user.email : "mrNotGiven@email.com"}</h2>
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
              <li className="tex-white relative group">
                <NavLink to={"/logIn"} className="group-hover:text-primary">
                  Sign in
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
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
                <PiShoppingCart className="text-xl"></PiShoppingCart>
              </NavLink>
            ) : (
              <NavLink to={"logIn"}>
                <PiShoppingCart className="text-xl"></PiShoppingCart>
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
