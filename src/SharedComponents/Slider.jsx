import { useContext, useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { getData } from "../Hooks/apiUtils";
import Rating from "./Rating";
import { ThemeContext } from "../useContext/allContext";
import Spinner from "./Spinner";
import Avatar from "./../assets/images/Avatar.avif";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  // Extract user images from the reviews
  const images = reviews.map((review) =>
    review.userImage ? review.userImage : Avatar
  );
  const names = reviews.map((review) => review.name);
  const emails = reviews.map((review) => review.email);
  const professions = reviews.map((review) => review.profession);
  const comments = reviews.map((review) => review.comment);
  const rates = reviews.map((review) => review.rate);
  const dates = reviews.map((review) => review.reviewingDateIs);

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

  // Handle slide navigation (next and previous)
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div
          className={`${
            darkMode ? "bg-gray-700" : ""
          } flex items-center justify-center text-center w-full md:w-10/12 mx-auto mt-14 py-10 px-5 md:px-16 md:h-80 rounded-md shadow-md relative `}
        >
          <div className="slider flex justify-center items-center  ">
            <div className="border-">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="reviewer-image text-center absolute -top-7 ">
                  <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-[4rem] h-[4rem] rounded-full "
                  />
                </div>
                <div className="reviewer-info text-center ">
                  <h1 className="text-3xl">{names[currentSlide]}</h1>
                  <p>{professions[currentSlide]}</p>
                </div>
              </div>

              <div className="text-center mt-4 ">
                <p>{comments[currentSlide]}</p>
                <p className="mt-1">{dates[currentSlide]}</p>
                <Rating value={rates[currentSlide]} rateValue={5} ></Rating>
              </div>

              {/* // */}
              {/* Indicator (dots) */}
              <div className="flex justify-center items-center absolute bottom-2 left-[25%] right-[25%] ">
                {reviews.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 mx-1 rounded-full ${
                      index === currentSlide
                        ? "bg-primary"
                        : "bg-gray-300 duration-500"
                    }`}
                  ></span>
                ))}
              </div>
              {/* // */}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              {/* <h1>{currentSlide}</h1> */}
              <button onClick={prevSlide} className="absolute left-0 ">
                {/* Previous */}
                <GrPrevious className="text-2xl md:text-4xl"></GrPrevious>
              </button>
              <button onClick={nextSlide} className="absolute right-0">
                {/* Next */}
                <GrNext className="text-2xl md:text-4xl"></GrNext>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Slider;
