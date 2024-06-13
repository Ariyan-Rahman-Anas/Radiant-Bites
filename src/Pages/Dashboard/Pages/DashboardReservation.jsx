import { useContext, useEffect, useState } from "react";
import {  RiReservedFill} from "react-icons/ri";
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";
import Spinner from "../../../SharedComponents/Spinner";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import { getData } from "../../../Hooks/apiUtils";

const DashboardReservation = () => {
  const { darkMode } = useContext(ThemeContext);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getting all reservations
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const responseData = await getData("reservations");
        setReservations(responseData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[])


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

      {/* ..../ */}
      <div>
        <div>
          {loading ? (
            <Spinner></Spinner>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="py-6 ">
              <SectionTitle
                heading={"Reservations"}
                subHeading={"Manage all Reservations"}
              ></SectionTitle>

              <div
                className={`${
                  darkMode ? "bg-gray-700" : ""
                } my-6 p-4 shadow-md rounded-md  `}
              >
                <div className="flex items-center justify-between font-semibold text-xl">
                  <h1>Total Reservations: {reservations?.length}</h1>
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
                          Date
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          }  px-4 border-b`}
                        >
                          Time
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Contact
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Guests
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Seating
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Type
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } py-2 px-4 border-b`}
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservations?.map((reservation, index) => (
                        <tr
                          key={reservation._id}
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
                            {reservation?.date}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            } px-4 border-b`}
                          >
                            {reservation?.time}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {reservation?.phone}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {reservation?.guests}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {reservation?.preferredSeating}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {reservation?.occasionType}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            <button
                              className=" px-2 py-1 rounded-md m-2 bg-danger text-white hover:bg-red-600 duration-500"
                              // onClick={() => handleEditUser(user?._id)}
                            >
                              Reject
                            </button>
                            <button
                              className="px-2 py-1 rounded-md text-white bg-primary hover:bg-green-600 duration-500"
                              // onClick={() => handleDeleteUser(user?._id)}
                            >
                              Confirm
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* user's table ends here */}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ..../ */}
    </div>
  );
};
export default DashboardReservation;