import { useContext, useEffect, useState } from "react";
import { MdRamenDining } from "react-icons/md";
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";
import { getData } from "../../../Hooks/apiUtils";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import Spinner from "../../../SharedComponents/Spinner";

const DashboardPendingOrders = () => {
  const { darkMode } = useContext(ThemeContext);
  const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const responseData = await getData("orderedItems");
        setOrders(responseData.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
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
          icon={<MdRamenDining></MdRamenDining>}
          value={"Pending Orders"}
        ></DashboardPageTitle>
        <div>
          {loading ? (
            <Spinner></Spinner>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="py-6 ">
              <SectionTitle
                heading={"Pending Orders of Radiant Bites"}
                subHeading={"Manage all pending orders"}
              ></SectionTitle>

              <div
                className={`${
                  darkMode ? "bg-gray-700" : ""
                } my-6 p-4 shadow-md rounded-md  `}
              >
                <div className="flex items-center justify-between font-semibold text-xl">
                  <h1>Total Orders: {orders?.length}</h1>
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
                          }  px-4 border-b`}
                        >
                          Date
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Items
                        </th>
                        <th
                          className={`${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } px-4 border-b`}
                        >
                          Price
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
                      {orders?.map((order, index) => (
                        <tr
                          key={order._id}
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
                            {order?.name}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            } px-4 border-b`}
                          >
                            {order?.createdAt}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            {order?.totalItems}
                          </td>
                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            ${order?.totalPrice}
                          </td>

                          <td
                            className={`${
                              darkMode ? "border-gray-700" : "border-gray-200"
                            }  px-4 border-b`}
                          >
                            <button
                              className=" px-2 py-1 rounded-md m-2 bg-danger text-white hover:bg-red-600 duration-500"
                              // onClick={() => handleEditUser(order?._id)}
                            >
                              Cancel
                            </button>
                            <button
                              className="px-2 py-1 rounded-md text-white bg-primary hover:bg-green-600 duration-500"
                              // onClick={() => handleDeleteUser(order?._id)}
                            >
                              Confirm
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* order's table ends here */}
              </div>
            </div>
          )}
        </div>
      </div>
    );
};
export default DashboardPendingOrders;