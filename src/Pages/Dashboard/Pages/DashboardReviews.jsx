import { useContext, useEffect, useState } from "react";
import { PiNewspaperFill } from "react-icons/pi";
import { ThemeContext } from "../../../useContext/allContext";
import Spinner from "../../../SharedComponents/Spinner";
import { deleteData, getData } from "../../../Hooks/apiUtils";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import Avatar from "./../../../assets/images/Avatar.png";
import Rating from "../../../SharedComponents/Rating";
import { LiaCutSolid } from "react-icons/lia";
import { toast } from "react-hot-toast";
import DashboardPageTitle from './../../../SharedComponents/DashboardPageTitle';


const DashboardReviews = () => {
  const { darkMode } = useContext(ThemeContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getting reviews
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("reviews");
        setReviews(responseData.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  //deleting a review
  const handleDeleteAReview = async (itemId) => {
  try {
    await deleteData("reviews", itemId)
    const remainingReviews = reviews.filter(review => review._id !== itemId)
    setReviews(remainingReviews);
    toast.success("Deleted the review!")
  } catch (error) {
    setError(error);
    console.log(error)
  }    
  }

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } min-h-screen flex-1  w-full `}
    >
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="px-2 py-3 ">
            <DashboardPageTitle
              icon={<PiNewspaperFill></PiNewspaperFill>}
              value={"Reviews"}
            ></DashboardPageTitle>

            <SectionTitle
              heading={"Reviews of Radiant Bites"}
              subHeading={"Manage all feedback that user given"}
            ></SectionTitle>

            <div
              className={`${
                darkMode ? "bg-gray-700" : ""
              } m-0 md:m-3 mt10 p-5 md:p-6 shadow-md rounded-md `}
            >
              <div className="flex items-center justify-between font-semibold text-xl ">
                <h1>Total reviews earned: {reviews?.length}</h1>
                <h2>Radiant Bites</h2>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {reviews?.map((review) => (
                  <div
                    key={review._id}
                    className={`${
                      darkMode ? "bg-gray-800" : ""
                    } shadow-md p-4 rounded-md relative `}
                  >
                    <div className="reviewer-image w-[4rem] absolute -top-4 -left-4 ">
                      <img
                        src={review.userImage ? review.userImage : Avatar}
                        alt="reviewer image"
                        className="w-full h-full rounded-full "
                      />
                    </div>
                    <LiaCutSolid
                      title="Delete Review"
                      onClick={() => handleDeleteAReview(review._id)}
                      className="text-4xl text-primary absolute -right-2 -top-2 cursor-pointer hover:text-danger duration-500 "
                    ></LiaCutSolid>
                    <div className="the-review pt-16  overflow-x-hidden ">
                      <h1
                        className={`${
                          darkMode ? "text-gray-300" : "text-gray-800"
                        } font-semibold text-lg `}
                      >
                        {review?.name}
                      </h1>
                      <h2 className="text-sm mb-5 ">{review?.profession}</h2>
                      {/* <h4>{review?.rate}</h4> */}
                      <div className="text-left w-fit ">
                        <Rating value={review?.rate} rateValue={5}></Rating>
                      </div>
                      <h3 className=" mb-3 text-sm">{review?.email}</h3>
                      <p className="text-sm pb-8">{review?.comment}</p>
                      <h5 className="absolute bottom-3">
                        Date: {review?.reviewingDateIs}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardReviews;