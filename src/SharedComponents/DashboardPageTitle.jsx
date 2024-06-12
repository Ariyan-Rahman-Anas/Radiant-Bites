import { useContext } from "react";
import { ThemeContext } from "../useContext/allContext";

const DashboardPageTitle = ({ icon, value }) => {
  const { darkMode } = useContext(ThemeContext);
    
    return (
      <div
        className={` ${
          darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
        }  w-full rounded-md shadow-md p-3 mb-2 flex items-center gap-1.5 text-xl text-primary font-semibold `}
      >
        {icon}
        <h1>{value}</h1>
      </div>
    );
};
export default DashboardPageTitle;