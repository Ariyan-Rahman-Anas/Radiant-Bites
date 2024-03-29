import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../SharedComponents/SectionTitle";
import PrimaryButton from "./../../SharedComponents/PrimaryButton";

const FromOurMenu = () => {
  const [allItems, setAllItems] = useState([]);
  const axiosSecure = useAxiosSecure()
  const url = `/allItems`

  //fetching items for home page using axios secure
  useEffect(() => {
    axiosSecure.get(url).then((res) => setAllItems(res?.data));
  }, [axiosSecure, url]);

  return (
    <div className="my-20 px-2 text-center ">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>

      {/* fetching some items for the mongodb */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-start mb-8 ">
        {allItems?.data?.map((item) => (
          <div
            key={item._id}
            className="shadow-md rounded-md p-4 grid md:grid-cols-10 gap-5  "
          >
            <div className="mx-auto flex flex-col col-span-10 md:col-span-2 border2 text-center capitalize ">
              <img
                src={item.image}
                alt="food picture"
                className="w-full rounded-full rounded-tl-none "
              />{" "}
              <p className="font-semibold text-gray-500 ">
                {item.foodCategory}
              </p>
            </div>
            <div className="col-span-8 flex flex-col md:flex-row items-center justify-between gap-7 ">
              <div>
                <h1 className="text-xl">{item.name}</h1>
                <p className="text-sm mt-1 text-gray-600 ">{item.recipe}</p>
              </div>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <PrimaryButton value={"Explore more..."} link={"/menu"}></PrimaryButton>
    </div>
  );
};
export default FromOurMenu;