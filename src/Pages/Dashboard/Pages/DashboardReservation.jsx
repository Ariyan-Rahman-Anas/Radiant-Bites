import { useContext } from "react";
import {  RiReservedFill} from "react-icons/ri";
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";

const DashboardReservation = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle
        icon={<RiReservedFill></RiReservedFill>}
        value={"Reservation"}
      ></DashboardPageTitle>
    </div>
  );
};
export default DashboardReservation;