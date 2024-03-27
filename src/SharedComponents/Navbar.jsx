import { Link, NavLink } from "react-router-dom";
import logo1 from "./../assets/Logos/1.svg";
import useAuth from "../Hooks/useAuth";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => { })
    .catch(()=>{})
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
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary ">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary">
                Menu
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary">
                Shop
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary">
                Contact
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary">
                Dashboard
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            {user ? (
              <li onClick={handleLogOut} className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-primary">
                  Log out
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
            ) : (
              <li className="tex-white relative group">
                <NavLink to={"/login"} className="group-hover:text-primary">
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
