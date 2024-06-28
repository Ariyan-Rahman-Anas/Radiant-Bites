import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../useContext/allContext";
import { deleteData, getData } from "../../../Hooks/apiUtils";
import useAuth from "../../../Hooks/useAuth";
import {  RiReservedFill } from "react-icons/ri";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import { AiOutlineDelete } from "react-icons/ai";
import Spinner from "../../../SharedComponents/Spinner";
import { toast } from "react-hot-toast";

const Orders = () => {
  const { user } = useAuth();
  const { darkMode } = useContext(ThemeContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Getting orders history by query
  useEffect(() => {
    if (!user?.email) {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData(
          `payment-history/query?email=${user?.email}`
        );
        setOrders(responseData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  //deleting orders history
  const handleDeleteOrderHistory = async (historyId) => {
    try {
      await deleteData("payment-history", historyId);
      const remainingOrdersHistory = orders.filter(
        (order) => order._id !== historyId
        );
        setOrders(remainingOrdersHistory);
    toast.success("Deleted Successfully!");
    } catch (error) {
        setError(error);
    }
  };

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle icon={<RiReservedFill />} value={"Orders"} />

      <div>
        {orders?.length > 0 ? (
          <div className="mt-8">
            <SectionTitle
              heading={"Ordered Dishes"}
              subHeading={"Know more about your activities"}
            />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {loading ? (
                <Spinner />
              ) : error ? (
                <h1>{error} </h1>
              ) : (
                orders &&
                orders?.map((order) => (
                  <div
                    key={order._id}
                    className={` ${
                      darkMode ? "bg-gray-700  " : "bg-green-50"
                    } rounded-md shadow-md p-4 relative `}
                  >
                    <p className="font-semibold text-sm text-white bg-primary w-fit px-2 py-1 rounded-lg mb-4 ">
                      {order?.createdAt.slice(0, 10)}{" "}
                    </p>
                    <div className="flex items-center gap-4 ">
                      <ul className="list-disc">
                        Dishes:
                        {order?.itemNames.split(", ").map((item, index) => (
                          <li key={index} className="ml-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="text-center">
                        Quantity:
                        {order?.quantity.split(", ").map((piece, index) => (
                          <li key={index}>{piece}</li>
                        ))}
                      </ul>
                      <ul className="text-center">
                        Prices:
                        {order?.itemPrices.split(", ").map((price, index) => (
                          <li key={index}>${price}</li>
                        ))}
                      </ul>
                    </div>
                    <hr className="my-2 rounded-full border-gray-500" />
                    <div className="mt-5">
                      <div>
                        <p className="mt-2 font-semibold ">
                          ${order.amount} <span>Paid</span>
                        </p>
                        <p className=" text-sm">
                          <span className="font-semibold">Transaction Id:</span>{" "}
                          {order.transactionId}{" "}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteOrderHistory(order._id)}
                        className="absolute bottom-4 right-4  mt-8 hover:text-white hover:bg-danger rounded-md p-1 duration-500   "
                      >
                        <AiOutlineDelete className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center text-center w-full min-h-[50vh] ">
            <div>
              <h1 className="text-4xl font-semibold ">Oops...</h1>
              <h2 className="text-xl italic ">You do not have any Orders!</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Orders;