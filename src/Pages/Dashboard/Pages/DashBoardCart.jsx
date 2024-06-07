import { useContext } from "react";
import { ThemeContext } from "../../../useContext/allContext";

const DashBoardCart = () => {
  const { darkMode } = useContext(ThemeContext);

    return (
      <div
        className={` ${
          darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
        } min-h-screen flex-1 w-full  `}
      >
        <h1>Dashboard Cart</h1>
      </div>
    );
};

export default DashBoardCart;