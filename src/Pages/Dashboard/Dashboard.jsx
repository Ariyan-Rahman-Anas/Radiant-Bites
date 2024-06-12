import { useContext } from "react";
import { ThemeContext } from "../../useContext/allContext";
import { BiFoodMenu } from "react-icons/bi";
import ProgressBar from "../../SharedComponents/ProgressBar";
import { BsInboxes } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import DashboardPageTitle from "../../SharedComponents/DashboardPageTitle";


const Dashboard = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle icon={<RiDashboardFill></RiDashboardFill>} value={"Dashboard"}></DashboardPageTitle>
      <div className="top-section text-sm flex flex-col md:flex-row items-center justify-between gap-3 ">
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } box-1 p-4 shadow-md rounded-md w-full `}
        >
          <div className="flex items-start justify-between ">
            <div>
              <h1 className="font-semibold text-2xl ">120</h1>
              <h2>Total Menus</h2>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-600" : ""
              } p-1 rounded-sm shadow-md `}
            >
              <BiFoodMenu></BiFoodMenu>
            </div>
          </div>
          <ProgressBar value={45}></ProgressBar>
        </div>
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } box-2 p-4 shadow-md rounded-md w-full `}
        >
          <div className="flex items-start justify-between ">
            <div>
              <h1 className="font-semibold text-2xl ">180</h1>
              <h2>Total Orders Today</h2>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-600" : ""
              } p-1 rounded-sm shadow-md `}
            >
              <BsInboxes></BsInboxes>
            </div>
          </div>
          <ProgressBar value={62}></ProgressBar>
        </div>
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } box-3 p-4 shadow-md rounded-md  w-full`}
        >
          <div className="flex items-start justify-between ">
            <div>
              <h1 className="font-semibold text-2xl ">260</h1>
              <h2>Total Guest Today</h2>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-600" : ""
              } p-1 rounded-sm shadow-md `}
            >
              <FaUsers />
            </div>
          </div>
          <ProgressBar value={80}></ProgressBar>
        </div>
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } box-1 p-4 shadow-md rounded-md w-full `}
        >
          <div className="flex items-start justify-between ">
            <div>
              <h1 className="font-semibold text-2xl ">140</h1>
              <h2>Revenue Day Ratio</h2>
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-600" : ""
              } p-1 rounded-sm shadow-md `}
            >
              <GiProgression />
            </div>
          </div>
          <ProgressBar value={85}></ProgressBar>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;