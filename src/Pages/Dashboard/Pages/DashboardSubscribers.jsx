import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../useContext/allContext';
import DashboardPageTitle from '../../../SharedComponents/DashboardPageTitle';
import { MdUnsubscribe } from "react-icons/md";
import Spinner from '../../../SharedComponents/Spinner';
import { getData } from '../../../Hooks/apiUtils';
import SectionTitle from './../../../SharedComponents/SectionTitle';

const DashboardSubscribers = () => {
  const { darkMode } = useContext(ThemeContext);
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  //getting all subscriber
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const responseData = await getData("subscribers");
        setSubscribers(responseData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle
        icon={<MdUnsubscribe></MdUnsubscribe>}
        value={"Subscribers"}
      ></DashboardPageTitle>

      <div className='mt-8 mb-6'>
        <SectionTitle
          heading={"Reservations"}
          subHeading={"Manage all Reservations"}
        ></SectionTitle>
      </div>

      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div
            className={`${
              darkMode ? "bg-gray-700" : ""
            } p-4 shadow-md rounded-md  `}
          >
            <div className="flex items-center justify-between font-semibold text-xl">
              <h1>Total Subscriber: {subscribers?.length}</h1>
              <h2>Radiant Bites</h2>
            </div>

            {/*user table start here */}
            <div className="overflow-x-auto mt-6 text-sm rounded-md">
              <table
                className={`${
                  darkMode ? "border-gray-400" : "border-gray-200"
                } border min-w-full`}
              >
                <thead>
                  <tr>
                    <th
                      className={`${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      } py-4 px-4 border-b`}
                    >
                      #
                    </th>
                    <th
                      className={`${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      }  px-4 border-b`}
                    >
                      Name
                    </th>
                    <th
                      className={`${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      } px-4 border-b`}
                    >
                      Email
                    </th>
                    <th
                      className={`${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      } px-4 border-b`}
                    >
                      Reply
                    </th>
                    <th
                      className={`${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      } py-2 px-4 border-b`}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers?.map((subscriber, index) => (
                    <tr
                      key={subscriber._id}
                      className={`${
                        index % 2 === 0
                          ? `${darkMode ? "bg-gray-500" : ""}`
                          : `${darkMode ? "bg-gray-600" : "bg-white"} `
                      }`}
                    >
                      <td
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } py-5 px-4 border-b`}
                      >
                        {index + 1}
                      </td>
                      <td
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } px-4 border-b`}
                      >
                        {subscriber?.name}
                      </td>
                      <td
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        }  px-4 border-b`}
                      >
                        {subscriber?.email}
                      </td>
                      <td
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        }  px-4 border-b`}
                      >
                        <button
                          className="px-2 py-1 rounded-md mr-2 bg-primary text-white  hover:bg-green-600 duration-500"
                          // onClick={() => updateUserRole(subscriber._id)}
                        >
                          Message
                        </button>
                      </td>
                      <td
                        className={`${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        }  px-4 border-b`}
                      >
                        <button
                          className="px-2 py-1 rounded-md text-white bg-danger hover:bg-red-600 duration-500"
                          // onClick={() => handleDeleteAdmin(subscriber?._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* user's table ends here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSubscribers;