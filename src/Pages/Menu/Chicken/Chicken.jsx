import { useEffect, useState } from "react";
import DishCard from "../../../SharedComponents/DishCard";
import PageHeadBanner from "../../../SharedComponents/PageHeadBanner";
import bannerImg from "./../../../assets/images/Chicken.png";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import RenderedEmptyMessage from "../../../SharedComponents/RenderedEmptyMessage";
import { getData } from "../../../Hooks/apiUtils";
import Spinner from "../../../SharedComponents/Spinner";
import usePageTitle from "../../../Hooks/usePageTitle";

const Chicken = () => {

  //updating the page title
  usePageTitle("Chicken - Menu");

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("allItems/menu/chicken");
        setDishes(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

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
          {loading ? (
            <Spinner></Spinner>
          ) : error ? (
            <h1>{error.message}</h1>
          ) : dishes.length >= 1 ? (
            <div>
              <SectionTitle
                heading={"Chicken Delights"}
                subHeading={"Savor a variety of mouthwatering chicken dishes."}
              ></SectionTitle>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                {dishes.map((dish) => (
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
export default Chicken;