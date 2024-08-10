import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../useContext/allContext";
import useAuth from "../../../Hooks/useAuth";
import { getData } from "../../../Hooks/apiUtils";
import DashboardPageTitle from "../../../SharedComponents/DashboardPageTitle";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import Spinner from "../../../SharedComponents/Spinner";
import { FaRegEdit, FaBlog } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";


const Blogs = () => {
  const { user } = useAuth();
  const { darkMode } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchingData = async () => {
      try {
        setLoading(true);
        const responseData = await getData(
          `blogs/blog/query?email=${user?.email}`
        );
        setBlogs(responseData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchingData();
  }, [user?.email]);

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-gray-400 " : "bg-green-50"
      } md:min-h-screen flex-1 w-full z-10 p-3 `}
    >
      <DashboardPageTitle icon={<FaBlog />} value={"Blogs"} />

      

      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>
            {blogs?.length <= 0 ? (
              <div className="flex items-center justify-center text-center w-full min-h-[80vh] ">
                <div>
                  <h1 className="text-4xl font-semibold ">Oops...</h1>
                  <h2 className="text-xl italic ">
                    You do not have any blogs!
                  </h2>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center text-center w-full min-h-[80vh] ">
                <div>
                  <h1 className="text-4xl font-semibold ">Oops...</h1>
                  <h1 className="text-xl mt-2 ">{error}!</h1>
                </div>
              </div>
            )}
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex items-center justify-center text-center w-full min-h-[80vh] ">
            <div>
              <h1 className="text-4xl font-semibold ">Oops...</h1>
              <h2 className="text-xl italic ">You do not have any blogs!</h2>
            </div>
          </div>
        ) : (
          <div>
            <SectionTitle
              heading={"Blogs"}
              subHeading={"Know more about your activities"}
            />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className={` ${
                    darkMode ? "bg-gray-700  " : "bg-green-50"
                  } rounded-md shadow-md p-4 relative `}
                >
                  <div>
                    <img
                      src={blog.featuredImage}
                      alt="blog image"
                      className="h-full w-full rounded-md "
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 ">
                    <p>{blog.createdAt.slice(0, 10)} </p>
                    <h1 className="text-sm text-white bg-primary w-fit px-2 py-1 rounded-md ">
                      {blog.category}
                    </h1>
                  </div>

                  <div className="flex items-end justify-between mt-3 ">
                    <h2 className="text-xl ">{blog.title}</h2>
                    <div className="flex items-center gap-4">
                      <button className="hover:text-white hover:bg-amber-500 rounded-md p-1 duration-500 ">
                        <FaRegEdit />
                      </button>
                      <button
                        //   onClick={() => handleDeleteOrderHistory(order._id)}
                        className="hover:text-white hover:bg-danger rounded-md p-1 duration-500 "
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Blogs;