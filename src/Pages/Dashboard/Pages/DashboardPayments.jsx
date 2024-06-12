// import { useContext } from "react";
// import { ThemeContext } from "../../../useContext/allContext";

// const DashboardPayments = () => {
//     const { darkMode } = useContext(ThemeContext);

//     return (
//       <div
//         className={` ${
//           darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
//         } min-h-screen flex-1 w-full  `}
//       >
//         <h1>Payments</h1>
//       </div>
//     );
// };

// export default DashboardPayments;

import { useContext } from "react";
import { MdPayments} from "react-icons/md"
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";

const DashboardPayments = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle
        icon={<MdPayments></MdPayments>}
        value={"Payments"}
      ></DashboardPageTitle>
    </div>
  );
};
export default DashboardPayments;