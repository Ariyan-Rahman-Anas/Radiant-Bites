import { useContext } from "react";
import { Chart } from "chart.js/auto";
import { Chart as chartJS } from "react-chartjs-2";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { ThemeContext } from "../../useContext/allContext";
import { BiFoodMenu } from "react-icons/bi";
import ProgressBar from "../../SharedComponents/ProgressBar";
import { BsInboxes } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import DashboardPageTitle from "../../SharedComponents/DashboardPageTitle";
import SectionTitle from "../../SharedComponents/SectionTitle";


const Dashboard = () => {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle
        icon={<RiDashboardFill></RiDashboardFill>}
        value={"Dashboard"}
      ></DashboardPageTitle>
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
              <BiFoodMenu
                className={`${darkMode ? "" : "text-primary"} text-lg`}
              ></BiFoodMenu>
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
              <BsInboxes
                className={`${darkMode ? "" : "text-primary"} text-lg `}
              ></BsInboxes>
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
              <FaUsers
                className={`${darkMode ? "" : "text-primary"} text-lg `}
              />
            </div>
          </div>
          <ProgressBar value={80}></ProgressBar>
        </div>
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } box-d p-4 shadow-md rounded-md w-full `}
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
              <GiProgression
                className={`${darkMode ? "" : "text-primary"} text-lg `}
              />
            </div>
          </div>
          <ProgressBar value={85}></ProgressBar>
        </div>
      </div>

      {/* middle */}
      <div>
        {/* bar */}
        <div
          // className="yearly-revenue-loss-expense  "
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } bar-chart rounded-md shadow-md w-full my-3 border4 `}
        >
          <div className="pt-6">
            <SectionTitle
              heading={"Yearly Report"}
              subHeading={"Expense-Revenue-Loss"}
            ></SectionTitle>
          </div>

          <Bar
            className={`${darkMode ? "" : ""} p-6 pb-3 `}
            // className="border- p-6 pb-3 "
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Revenue",
                  data: [
                    100000, 160000, 210000, 300000, 399000, 450000, 400000,
                    545000, 399000, 578000, 546000, 597000,
                  ],
                  backgroundColor: ["rgba(64, 185, 60, 1)"],
                  borderRadius: 5,
                },
                {
                  label: "Loss",
                  data: [
                    94000, 99000, 80000, 65000, 34000, 86000, 104000, 112000,
                    33000, 66000, 186000, 119000,
                  ],
                  backgroundColor: ["rgba(255, 56, 17, 1)"],
                  borderRadius: 5,
                },
                {
                  label: "Expense",
                  data: [
                    160000, 240000, 310000, 323000, 396000, 402000, 235000,
                    375000, 306000, 298000, 396000, 280000,
                  ],
                  backgroundColor: ["rgba(255, 199, 0, 0.5)"],
                  borderRadius: 5,
                },
              ],
            }}
          ></Bar>
        </div>
        {/* bar */}
        {/* d... */}
        {/* <div
          // className="yearly-revenue-loss-expense  "
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } bar-chart rounded-md shadow-md w-full my-3 border4 `}
        >
          <div className="pt-6">
            <SectionTitle
              heading={"Yearly Report"}
              subHeading={"Expense-Revenue-Loss"}
            ></SectionTitle>
          </div>

          <Doughnut
            className={`${darkMode ? "" : ""} p-6 pb-3 `}
            // className="border- p-6 pb-3 "
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Revenue",
                  data: [
                    100000, 160000, 210000, 300000, 399000, 450000, 400000,
                    545000, 399000, 578000, 546000, 597000,
                  ],
                  backgroundColor: ["rgba(64, 185, 60, 1)"],
                  borderRadius: 5,
                },
                {
                  label: "Loss",
                  data: [
                    94000, 99000, 80000, 65000, 34000, 86000, 104000, 112000,
                    33000, 66000, 186000, 119000,
                  ],
                  backgroundColor: ["rgba(255, 56, 17, 1)"],
                  borderRadius: 5,
                },
                {
                  label: "Expense",
                  data: [
                    160000, 240000, 310000, 323000, 396000, 402000, 235000,
                    375000, 306000, 298000, 396000, 280000,
                  ],
                  backgroundColor: ["rgba(255, 199, 0, 0.5)"],
                  borderRadius: 5,
                },
              ],
            }}
          ></Doughnut>
        </div>{" "} */}
        {/* d... */}
      </div>
      {/* middle */}
    </div>
  );
};
export default Dashboard;