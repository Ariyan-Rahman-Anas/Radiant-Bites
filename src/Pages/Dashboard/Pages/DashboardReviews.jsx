import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../useContext/allContext";
import Spinner from "../../../SharedComponents/Spinner";
import { getData } from "../../../Hooks/apiUtils";

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
        console.log(responseData);
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
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } min-h-screen flex-1  `}
    >
      <h1>Reviews</h1>
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
              <div>{reviews?.length}
                {reviews?.data?.map(rev=> <h1 key={rev._id}>{rev.name}</h1> )}
              </div>
          
        )}
      </div>
    </div>
  );
};

export default DashboardReviews;