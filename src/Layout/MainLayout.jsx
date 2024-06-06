import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";
import Footer from "../SharedComponents/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("logIn") ||
    location.pathname.includes("registration") || location.pathname.includes("dashboard") ;
  
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </div>
  );
};
export default MainLayout;