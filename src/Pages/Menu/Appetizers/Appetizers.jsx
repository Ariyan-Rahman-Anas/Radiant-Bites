import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DishCard from "../../../SharedComponents/DishCard";
import PageHeadBanner from "../../../SharedComponents/PageHeadBanner";
import bannerImg from "./../../../assets/images/Appetizers.png";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import RenderedEmptyMessage from "../../../SharedComponents/RenderedEmptyMessage";

const Appetizers = () => {
  const axiosSecure = useAxiosSecure();
  const url = `/allItems/menu/appetizers`;
  const [chickenDishes, setChickenDishes] = useState([]);

  useEffect(() => {
    axiosSecure.get(url).then((res) => setChickenDishes(res.data));
  }, [axiosSecure, url]);

  return (
    <div>
      <PageHeadBanner
        sectionImg={bannerImg}
        heading={"Chicken's World"}
        subHeading={"Let's dive into the deep of Chicken's World!"}
        subHeadingColor={"white"}
      ></PageHeadBanner>

      <div className="my-20 px-2 w-full md:w-[85vw] mx-auto ">
        <div className="mt-5">
          {chickenDishes.length >= 1 ? (
            <div>
              <SectionTitle
                heading={"Chicken Delights"}
                subHeading={"Savor a variety of mouthwatering chicken dishes."}
              ></SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {chickenDishes.map((dish) => (
                  <DishCard key={dish._id} dish={dish}></DishCard>
                ))}
              </div>
            </div>
          ) : (
            <RenderedEmptyMessage
              heading={"Oops!"}
              subHeading={
                "There is nothing available right now in the Chicken's World!"
              }
              message={
                "Attention Food Connoisseurs! Share your culinary creations and influence our menu with your culinary artistry. Let your signature dish shine and delight taste buds everywhere!"
              }
              directionMessage={"Let's go for other dishes"}
              btnValue={"Menu"}
              btnLink={"/menu"}
            ></RenderedEmptyMessage>
          )}
        </div>
      </div>
    </div>
  );
};
export default Appetizers;
