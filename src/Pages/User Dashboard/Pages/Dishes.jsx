import { useContext, useEffect, useState } from "react";
import { PiBowlFoodFill} from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { ThemeContext } from "../../../useContext/allContext";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";
import { getData } from "../../../Hooks/apiUtils";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../SharedComponents/Spinner";
import SectionTitle from "../../../SharedComponents/SectionTitle";

const Dishes = () => {
    const {user} = useAuth()
  const { darkMode } = useContext(ThemeContext);
    const [dishes, setDishes] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

    useEffect(() => {
      const fetchingData = async () => {
        try {
          setLoading(true);
          const responseData = await getData(
            `allItems/query?email=${user?.email}`
            );
            setDishes(responseData.data)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchingData();
    }, [user?.email]);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle icon={<PiBowlFoodFill />} value={"Dishes"} />

      <div>
        {dishes.length > 0 ? (
          <div>
            <SectionTitle
              heading={"Dishes"}
              subHeading={"Know more about your activities"}
            />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {loading ? (
                <Spinner />
              ) : error ? (
                <h1>{error}</h1>
              ) : (
                dishes &&
                dishes?.map((dish) => (
                  <div
                    key={dish._id}
                    className={` ${
                      darkMode ? "bg-gray-700  " : "bg-green-50"
                    } rounded-md shadow-md p-4 relative `}
                  >
                    <div>
                      <img
                        src={dish.image}
                        alt="dish image"
                        className="h-full w-full rounded-md "
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2 ">
                      <p>{dish.createdAt.slice(0, 10)} </p>
                      <h1 className="text-sm text-white bg-primary w-fit px-2 py-1 rounded-md ">
                        {dish.foodCategory}
                      </h1>
                      <h2>${dish.price} </h2>
                    </div>

                    <div className="flex items-end justify-between mt-3 ">
                      <h2 className="text-xl ">{dish.name}</h2>
                      <div className="flex items-center gap-4">
                        <button className="hover:text-white hover:bg-amber-500 rounded-md p-1 duration-500 ">
                          <FaRegEdit />
                        </button>
                        <button
                          //   onClick={() => handleDeleteOrderHistory(order._id)}
                          className="hover:text-white hover:bg-danger rounded-md p-1 duration-500 "
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center text-center w-full min-h-[80vh] ">
            <div>
              <h1 className="text-4xl font-semibold ">Oops...</h1>
              <h2 className="text-xl italic ">You do not have any Dishes!</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Dishes;