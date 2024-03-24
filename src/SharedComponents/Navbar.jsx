import { Link, NavLink } from "react-router-dom";
import logo1 from "./../assets/Logos/1.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row items-end justify-between bg-gradient-to-b from-green-200 to-green-50 bg-opacity-50 p-2 ">
        <div className="navbar-start">
          <div className="w-[10rem] ">
            <Link to={"/"}>
              <img src={logo1} alt="Radiant Bites's Logo" className="w-full" />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="flex space-x-8">
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#40b93c]">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#40b93c] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#40b93c]">
                Menu
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#40b93c] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#40b93c]">
                Shop
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#40b93c] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#40b93c]">
                Contact
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#40b93c] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#40b93c]">
                Dashboard
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#40b93c] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;