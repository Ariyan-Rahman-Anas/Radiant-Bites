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

import { useContext, useEffect, useState } from "react";
import { MdPayments} from "react-icons/md"
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import Spinner from "../../../SharedComponents/Spinner";
import { getData } from "../../../Hooks/apiUtils";

const DashboardPayments = () => {
  const { darkMode } = useContext(ThemeContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  //getting all payments history
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("payment-history");
        setPayments(responseData.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  },[])

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
                heading={"Payment History"}
                subHeading={"Manage all of Payments"}
              ></SectionTitle>

              <div
                className={`${
                  darkMode ? "bg-gray-700" : ""
                } my-6 p-4 shadow-md rounded-md  `}
              >
                <div className="flex items-center justify-between font-semibold text-xl">
                  <h1>Total Payments: {payments?.length}</h1>
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
                          Name
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Amount
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                         Trans.ID
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Method
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
                      {payments?.map((payment, index) => (
                        <tr
                          key={payment._id}
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
                            {payment?.date.slice(0,10)}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            } px-4 border-b`}
                          >
                            {payment?.name}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {payment?.amount}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {payment?.transactionId}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {payment?.method}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {payment?.occasionType}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            <button
                              className="px-2 py-1 rounded-md text-white bg-primary hover:bg-green-600 duration-500"
                              // onClick={() => handleDeleteUser(user?._id)}
                            >
                              Paid
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
export default DashboardPayments;