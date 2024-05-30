import { Link, NavLink, Outlet } from "react-router-dom";
import logo1 from "./../../assets/Logos/1.svg"
import logo2 from "./../../assets/Logos/2.svg";

const Dashboard = () => {

  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="min-h-screen w-full md:w-1/4 shadow-lg ">
          <div>
            <div className="w-[10rem] border-b-2 border-primary px-4 pb-1 rounded-md mt-4 mb-5 mx-auto ">
              <Link to={"/"}>
                <img
                  src={logo1}
                  alt="Radiant Bites's Logo"
                  className="w-full"
                />
              </Link>
            </div>
          </div>
          <ul>
            <li className="tex-white relative group ">
              <NavLink to={""} className="group-hover:text-primary ">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary ">
                Admin
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-primary ">
                Guest user
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"cart"} className="group-hover:text-primary ">
                Cart
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="border-2">
          {/* <h1>000</h1> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;