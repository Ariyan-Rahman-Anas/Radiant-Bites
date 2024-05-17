import { useEffect, useState } from "react";
import usePageTitle from "../../../Hooks/usePageTitle";
import DishCard from "../../../SharedComponents/DishCard";
import PageHeadBanner from "../../../SharedComponents/PageHeadBanner";
import RenderedEmptyMessage from "../../../SharedComponents/RenderedEmptyMessage";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import bannerImg from "./../../../assets/images/SeaFood.png";

const SeaFood = () => {
  //updating the page title
  usePageTitle("Sea Food - Menu");

    //updating the page title
  usePageTitle("Today Offer - Menu");

  const axiosSecure = useAxiosSecure();
  const url = `/allItems/menu/todayOffer`;
  const [todayOfferDishes, setTodayOfferDishes] = useState([]);

  useEffect(() => {
    axiosSecure.get(url).then((res) => setTodayOfferDishes(res.data));
  }, [axiosSecure, url]);

  return (
    <div>
      <PageHeadBanner
        sectionImg={bannerImg}
        heading={"Sea Food"}
        subHeading={"Here is our all items of Sea Food the king of food!"}
        subHeadingColor={"white"}
      ></PageHeadBanner>

      <div className="my-20 px-2 w-full md:w-[85vw] mx-auto ">
        <div className="mt-5">
          {todayOfferDishes.length >= 1 ? (
            <div>
              <SectionTitle
                heading={"Chicken Delights"}
                subHeading={"Savor a variety of mouthwatering chicken dishes."}
              ></SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {todayOfferDishes.map((dish) => (
                  <DishCard key={dish._id} dish={dish}></DishCard>
                ))}
              </div>
            </div>
          ) : (
            <RenderedEmptyMessage
              heading={"Oops!"}
              subHeading={
                "There is nothing available right now in the Today's Offer!"
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
export default SeaFood;