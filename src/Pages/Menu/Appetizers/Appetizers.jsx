import { useEffect, useState } from "react";
import DishCard from "../../../SharedComponents/DishCard";
import PageHeadBanner from "../../../SharedComponents/PageHeadBanner";
import bannerImg from "./../../../assets/images/Appetizers.png";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import RenderedEmptyMessage from "../../../SharedComponents/RenderedEmptyMessage";
import { getData } from "../../../Hooks/apiUtils";
import Spinner from "../../../SharedComponents/Spinner";

const Appetizers = () => {
  const [appetizer, setAppetizer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  // localhost:3000

  
  // useEffect(() => {
  //   const fetchingAppetizersData = async () => {
  //     try {
  //       setLoading(true);
  //       const endPoint = `/allItems/menu/appetizers`;
  //       const appetizersData = await getData(endPoint);
  //       setAppetizer(appetizersData);
  //       setLoading(false);
  //       console.log("data is: ", appetizersData);
  //     } catch (error) {
  //       console.log("data fetching err is: ", error);
  //     }
  //   };
  //   fetchingAppetizersData;
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true while fetching data
        setLoading(true);

        // Fetch data from the API
        const responseData = await getData("allItems/menu/appetizers");

        // Update state with fetched data
        setAppetizer(responseData);
      } catch (error) {
        // If an error occurs, set the error state
        setError(error);
      } finally {
        // Set loading state to false once fetching is done (whether successful or failed)
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
          {
            loading ? (
              <Spinner></Spinner>
            ) : // <>
            appetizer.length > 0 ? (
              <div>
                <SectionTitle
                  heading={"Chicken Delights"}
                  subHeading={
                    "Savor a variety of mouthwatering chicken dishes."
                  }
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {appetizer.map((dish) => (
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
            )
            // </>
          }
        </div>
      </div>
    </div>
  );
};
export default Appetizers;
