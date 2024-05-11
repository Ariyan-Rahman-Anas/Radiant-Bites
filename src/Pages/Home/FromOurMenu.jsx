import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import PrimaryButton from "./../../SharedComponents/PrimaryButton";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../SharedComponents/Spinner";
import { ThemeContext } from "../../useContext/allContext";

const FromOurMenu = () => {
  const {darkMode} = useContext(ThemeContext)
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetching items for home page using axios secure
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const responseData = await getData("allItems")
        setItems(responseData)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  },[])


  return (
    <div className="my-20 px-2 text-center ">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>

      {/* fetching some items for the mongodb */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-start mb-8 ">
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          items?.slice(0, 6)?.map((item) => (
            <div
              key={item._id}
              className={` ${darkMode ? "bg-gray-700" : "" } shadow-md rounded-md p-4 grid md:grid-cols-10 gap-5 `}
            >
              <div className="mx-auto flex flex-col col-span-10 md:col-span-2 border2 text-center capitalize ">
                <img
                  src={item.image}
                  alt="food picture"
                  className="w-full rounded-full rounded-tl-none "
                />{" "}
                <p className={` ${darkMode ? "" : "text-gray-500"} font-semibold text-gray500 `}>
                  {item.foodCategory}
                </p>
              </div>
              <div className="col-span-8 flex flex-col md:flex-row items-center justify-between gap-7 ">
                <div>
                  <h1 className="text-xl">{item.name}</h1>
                  <p className={` ${darkMode ? "" :  "text-gray-600"} text-sm mt-1 `}>{item.recipe}</p>
                </div>
                <p>${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <PrimaryButton value={"Explore more..."} link={"/menu"}></PrimaryButton>
    </div>
  );
};
export default FromOurMenu;