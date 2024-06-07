import { useContext } from "react";
import { ThemeContext } from "../../useContext/allContext";

const Dashboard = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 `}
    >
      <h1>h1dddddddd</h1>
    </div>
  );
};
export default Dashboard;