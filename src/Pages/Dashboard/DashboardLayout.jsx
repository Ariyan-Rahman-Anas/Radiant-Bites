import { Outlet } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import usePageTitle from "../../Hooks/usePageTitle";

const DashboardLayout = () => {
  //updating the page title
  usePageTitle("Dashboard");
  return (
    <div className="flex items-start gap- ">
      <DashboardSideBar></DashboardSideBar>
      <Outlet></Outlet>
    </div>
  );
};
export default DashboardLayout;