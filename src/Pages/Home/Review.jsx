import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../SharedComponents/Spinner";
import Slider from "../../SharedComponents/Slider";
import { ThemeContext } from "../../useContext/allContext";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("reviews");
        setReviews(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-24 m-2 ">
      <SectionTitle
        heading={"What Our Clients Say"}
        subHeading={"TESTIMONIALS"}
      ></SectionTitle>
      <Slider></Slider>
      {/* <div className="review p-5 text-center shadow-md w-full md:w-2/3 mx-auto rounded-md ">
        <h1>{reviews.length} </h1>
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          reviews?.map((review) => (
            <div key={review._id}>
              <div className="flex items-center justify-between ">
                <div>
                  <img
                    src={review?.userImage}
                    alt="reviewer image"
                    className="w-full rounded-full"
                  />
                </div>
                <div>
                  <h1>{review?.name}</h1>
                  <h5>{review?.profession}</h5>
                </div>
              </div>
              <p>{review?.comment}</p>
              <small>{review?.reviewingDateIs}</small>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};
export default Review;