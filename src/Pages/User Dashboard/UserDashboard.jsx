import { useContext, useEffect, useState } from "react";
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
import useAuth from "../../Hooks/useAuth";
import welcome from "./../../assets/images/welcome.svg"
import { HiOutlineUserCircle } from "react-icons/hi2";
import { deleteData, getData } from "../../Hooks/apiUtils";

const UserDashboard = () => {
  const { user } = useAuth();
  const { darkMode } = useContext(ThemeContext);
  const [userFromDB, setUserFromDB] = useState([]);

  //fetching users from db to get the logged in user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getData("users");
        setUserFromDB(responseData.data);
      } catch (error) {
        // console.log("error is: ", error)
      }
    };
    fetchData();
  }, []);

  //catching current user by find for user data
  const catchingCurrentUserByDB = userFromDB?.find(
    (currentUser) => currentUser?.email === user?.email
  );

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

      <div className="welcome-membership-section grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } welcome p-4 rounded-md shadow-md  col-span-2`}
        >
          <div
            className={` flex flex-col-reverse md:flex-row items-start gap-2  `}
          >
            <div className="w-full md:w-[70%] ">
              <h1
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }  text-2xl  `}
              >
                Hey,{" "}
                <span className="font-semibold text-2xl">
                  {user?.displayName}
                </span>
              </h1>
              <p
                className={`${
                  darkMode ? "text-gray-400" : "text-gray-500"
                } mt-5 text-4xl font-semibold `}
              >
                Welcome to <br />
                <span className="text-primary"> {`"Radiant Bites"`}</span>
              </p>
            </div>
            <div className="w-1/2  md:w-[30%] ">
              <img src={welcome} alt="welcoming" className="h-full w-full" />
            </div>
          </div>
          
          <p className="my-2">
            We're thrilled to have you here. Explore our delicious menu, enjoy
            special offers, and make reservations effortlessly.
          </p>
          <p className="font-semibold tracking-wider">
            Thank you for choosing Radiant Bites – where every bite is a
            delight!
          </p>
        </div>

        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } membership p-4 rounded-md shadow-md col-span-2 md:col-span-1 relative `}
        >
          <h1 className="text-xl">Member Since</h1>
          <div className="absolute top-1/2 left-1/4 right-1/4 ">
            <div className="flex items-center justify-between text-center gap-2 border border-primary p-2 rounded-md ">
              <HiOutlineUserCircle className="text-white bg-primary text-3xl rounded-md  " />
              <p>{catchingCurrentUserByDB?.createdAt.slice(0, 10)} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;