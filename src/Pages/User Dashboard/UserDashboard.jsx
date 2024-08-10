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
import welcome from "./../../assets/images/welcome.svg";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { deleteData, getData } from "../../Hooks/apiUtils";
import Spinner from './../../SharedComponents/Spinner';
import PrimaryButton from './../../SharedComponents/PrimaryButton';
import DangerButton from './../../SharedComponents/DangerButton';

const UserDashboard = () => {
  const { user } = useAuth();
  const { darkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userFromDB, setUserFromDB] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  //fetching users from db to get the logged in user
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("users");
        setUserFromDB(responseData.data);
      } catch (error) {
        // console.log("error is: ", error)
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //catching current user by find for user data
  const catchingCurrentUserByDB = userFromDB?.find(
    (currentUser) => currentUser?.email === user?.email
  );

  //fetching the subscriber
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("subscribers");
        setSubscribers(responseData.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //catching the subscriber
  const catchingSubscriber = subscribers?.find(
    (subscriber) => subscriber.email === user?.email
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

      <div className="welcome-membership-section my-5 grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div
          className={` ${
            darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50"
          } welcome p-4 rounded-md shadow-md  col-span-2  `}
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

      {loading ? (
        <Spinner />
      ) : (
        <div className="subscription-section grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div
            className={` ${
              darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50 shadow-md"
            }   rounded-md p-5 col-span-1`}
          >
            {catchingSubscriber ? (
              <div>
                <h1 className="text-">
                  From{" "}
                  <span className="font-semibold">
                    {catchingSubscriber?.createdAt.slice(0, 10)}
                  </span>
                </h1>
                <p className="mt-3">{`You're our `} </p>
                <p className="font-semibold text-2xl text-primary ">
                  Subscriber Member
                </p>

                {/* <DangerButton value={"Unsubscribe"} /> */}
              </div>
            ) : (
              <div className="flex items-center justify-center text-center ">
                <div>
                  <h1 className="mb-3">
                    You can subscribe the <span>Radiant Bites</span>
                  </h1>
                  <PrimaryButton value={"Let's Subscribe"} link={"/"} />
                </div>
              </div>
            )}
          </div>
          <div
            className={` ${
              darkMode ? "bg-gray-700 text-gray-400 " : "bg-green-50 shadow-md"
            }  rounded-md p-5 col-span-2`}
          >
            {catchingSubscriber ? (
              <div className="space-y-2 ">
                <h1 className="text-2xl">Dear Subscriber,</h1>
                <p className="my2">
                  {`Thank you for joining our Radiant Bites
                community! We're thrilled to have you on board and can't wait to
                share our passion for delicious food with you. As a subscriber,
                you’ll be the first to receive exclusive updates, special
                offers, and mouth-watering recipes straight to your inbox.`}
                </p>
                <p>
                  Stay tuned for exciting content, and feel free to explore our
                  website for a delightful culinary experience. If you have any
                  questions or need assistance, our team is always here to help.
                </p>
                <p>Happy eating!</p>
                <p>Warm regards,</p>
                <p className="font-semibold text-primary underline underline-offset-2 ">
                  The <span>Radiant Bites</span> Team
                </p>
              </div>
            ) : (
              <div>
                <h1 className="text-xl font-semibold">Hello Food Lover!</h1>
                <p>
                  {`We noticed you haven't subscribed to Radiant Bites yet. By
                  subscribing, you'll unlock a world of culinary delights and
                  exclusive benefits:`}
                </p>

                <p className="text-xl font-semibold mt-4 mb-1 ">
                  Why Subscribe?
                </p>
                <ul className="space-y-1 list-disc ml-5">
                  <li>
                    <span className="font-semibold">Exclusive Recipes:</span>{" "}
                    {`Get access to unique recipes you won't find anywhere else.`}
                  </li>
                  <li>
                    <span className="font-semibold">Special Offers:</span> Be
                    the first to know about our special discounts and
                    promotions.
                  </li>
                  <li>
                    <span className="font-semibold">Latest Updates:</span> Be
                    the first to know about our special discounts and
                    promotions.
                  </li>
                  <li>
                    <span className="font-semibold">Community Perks:</span> Join
                    our vibrant community of food enthusiasts and share your
                    passion for delicious meals.
                  </li>
                </ul>
                <p className="text-xl font-semibold mt-4 mb-1 ">
                  What You Get:
                </p>
                <ul className="space-y-1 list-disc ml-5 ">
                  <li>
                    <span className="font-semibold">Weekly Newsletters:</span>{" "}
                    Fresh content delivered straight to your inbox every week.
                  </li>
                  <li>
                    <span className="font-semibold">Early Access:</span> Get
                    early access to new features and updates.
                  </li>
                  <li>
                    <span className="font-semibold">Personalized Content:</span>{" "}
                    Tailored recommendations based on your preferences.
                  </li>
                </ul>
                <p className="mt-2  ">
                  📢 Don’t miss out on these amazing benefits! Click the button
                  below to subscribe and start your journey with Radiant Bites.
                </p>
                <p className="mt-2 font-semibold italic ">
                  We look forward to welcoming you to our foodie family!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserDashboard;
