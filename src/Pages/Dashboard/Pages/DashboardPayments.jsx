import { useContext } from "react";
import { ThemeContext } from "../../../useContext/allContext";

const DashboardPayments = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
      <div
        className={` ${
          darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
        } min-h-screen flex-1  `}
      >
        <h1>Payments</h1>
      </div>
    );
};

export default DashboardPayments;