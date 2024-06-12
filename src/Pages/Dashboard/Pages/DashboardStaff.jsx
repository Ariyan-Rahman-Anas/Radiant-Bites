import { useContext } from "react";
import { GrUserWorker } from "react-icons/gr";
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";

const DashboardStaff = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
      <div
        className={` ${
          darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
        } md:min-h-screen flex-1 w-full z-10 p-3 `}
      >
        <DashboardPageTitle
          icon={<GrUserWorker></GrUserWorker>}
          value={"Staff"}
        ></DashboardPageTitle>
      </div>
    );
};
export default DashboardStaff;