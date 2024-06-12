import { useContext } from "react";
import { MdRamenDining } from "react-icons/md";
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";

const DashboardPendingOrders = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
      <div
        className={` ${
          darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
        } md:min-h-screen flex-1 w-full z-10 p-3 `}
      >
        <DashboardPageTitle
          icon={<MdRamenDining></MdRamenDining>}
          value={"Pending Orders"}
        ></DashboardPageTitle>
      </div>
    );
};
export default DashboardPendingOrders;