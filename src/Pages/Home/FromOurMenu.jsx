import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../SharedComponents/SectionTitle";

const FromOurMenu = () => {
  const [allItems, setAllItems] = useState([]);
  console.log("sssssssss", allItems);
  // const axiosSecure = useAxiosSecure()
  // const url = `/allItems`

  // useEffect(() => {
  //   axiosSecure.get(url).then((res) => setAllItems(res?.data));
  // }, [axiosSecure, url]);

  useEffect(() => {
    fetch(`http://localhost:5000/allitems`)
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="my-20 px-2">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>

      {/* fetching menu items for the mongodb */}
      <div className="mt-5 grid grid-cols-2 gap-8 ">
        {allItems?.data?.map((item) => (
          <div key={item._id} className="shadow-md rounded-md p-4 ">
            <div>
              <img src={item.image} alt="food picture" />
            </div>
            <h1 className="text-xl">{item.name}</h1>
            <p>{item.foodCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromOurMenu;
