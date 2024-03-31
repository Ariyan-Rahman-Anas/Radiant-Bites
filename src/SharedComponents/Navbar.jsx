import { Link, NavLink } from "react-router-dom";
import logo1 from "./../assets/Logos/1.svg";
import useAuth from "../Hooks/useAuth";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const hidingMenu = () => {
    setMenu(!menu);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <nav className="flex md:flex-row items-center justify-between bg-gradient-to-b from-green-200 to-green-50 bg-opacity-50 p-2 ">
        <div className="navbar-start">
          <div className="w-[8rem] ">
            <Link to={"/"}>
              <img src={logo1} alt="Radiant Bites's Logo" className="w-full" />
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 absolute md:static ${
              menu
                ? "left-0 top-[5.5rem] right-0 bg-black md:bg-transparent rounded-md text-white md:text-black w-full h-full "
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
                Specials
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
            {user ? (
              <div className="group relative ">
                <div>
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
                <div className="hidden group-hover:flex items-center justify-center h-36 w-72 rounded-md bg-black/50 text-white text-center text-sm absolute right-0 top-10 z-50 border-primary border-[.09rem] ">
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
                        link={"/login"}
                      ></PrimaryButton>
                    </button>
                  </div>
                </div>
                {/* <li onClick={handleLogOut} className="tex-white relative group">
                  <NavLink to={"/"} className="group-hover:text-primary">
                    Log out
                    <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                  </NavLink>
                </li> */}
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
        <div className="md:hidden">
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
