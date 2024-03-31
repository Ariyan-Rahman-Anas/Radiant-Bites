import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DishCard from "../../../SharedComponents/DishCard";
import PageHeadBanner from "../../../SharedComponents/PageHeadBanner";
import bannerImg from "./../../../assets/images/Chicken.png";
import SectionTitle from "../../../SharedComponents/SectionTitle";
const Chicken = () => {
  const axiosSecure = useAxiosSecure();
  const url = `/allItems/menu/chicken`;
  const [chickenDishes, setChickenDishes] = useState([]);

  useEffect(() => {
    axiosSecure.get(url).then((res) => setChickenDishes(res.data));
  }, [axiosSecure, url]);

  return (
    <div>
      <PageHeadBanner
        sectionImg={bannerImg}
        heading={"Chicken's World"}
        subHeading={"Let's dive into the Chicken's World!"}
        subHeadingColor={"white"}
      ></PageHeadBanner>

      <div className="my-20 px-2 w-full md:w-[85vw] mx-auto ">
        <SectionTitle
          heading={"Chicken Delights"}
          subHeading={"Savor a variety of mouthwatering chicken dishes."}
        ></SectionTitle>

        <div className="mt-5">
          {chickenDishes.length >= 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {chickenDishes.map((dish) => (
                <DishCard key={dish._id} dish={dish}></DishCard>
              ))}
            </div>
          ) : (
            "d"
          )}
        </div>
      </div>
    </div>
  );
};
export default Chicken;