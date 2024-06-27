import { Outlet } from "react-router-dom";
import usePageTitle from "../../Hooks/usePageTitle";
import UserDashboardSidebar from "./UserDashboardSidebar";

const UserDashboardLayout = () => {
  //updating the page title
  usePageTitle("User Dashboard");
  return (
    <div className="flex flex-col md:flex-row items-start  ">
      {/* <DashboardSideBar></DashboardSideBar> */}
      <UserDashboardSidebar></UserDashboardSidebar>
      <Outlet></Outlet>
    </div>
  );
};
export default UserDashboardLayout;