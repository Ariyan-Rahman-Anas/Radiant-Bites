import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import BlogBg from "./../../assets/images/Blog.png" 
import PageHeadBanner from './../../SharedComponents/PageHeadBanner';
import { ThemeContext } from "../../useContext/allContext";
import BlogPostForm from "../../SharedComponents/BlogPostForm";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../SharedComponents/Spinner";
import BlogCard from "../../SharedComponents/BlogCard";
import { Link} from "react-router-dom";

const Blog = () => {
  const { darkMode } = useContext(ThemeContext);
  const [blogsByCategory, setBlogsByCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("foodRecipe");
  const [searchTerm, setSearchTerm] = useState(" ");
  const [blogs, setBlogs] = useState([]);

  //handle search by getting blog by search with tag, title and keywords
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getData(`search?q=${searchTerm}`);
      setBlogs(data);
    } catch (err) {
      setError("Error fetching blogs", error);
    } finally {
      setLoading(false);
    }
  };

  //getting blogs by category
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData(`blogs/blog-category/${category}`);
        setBlogsByCategory(responseData.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  //handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <PageHeadBanner
        sectionImg={BlogBg}
        heading={"Blog"}
        subHeading={"Deep div into the Restaurant world!"}
      ></PageHeadBanner>

      <div className="w-full md:w-[85vw] mx-auto">
        <div className="">
          {/* welcoming message starts here */}
          <div className=" mt-5 ">
            <h1 className="text-3xl font-semibold ">
              Welcome to <span className="text-primary">Radiant Bites</span>
            </h1>
            <p className="mt-1 mb-8 tracking-wide ">
              <span className="text-primary text-xl font-semibold ">A</span>t
              Radiant Bites, we believe that every meal is an opportunity to
              nourish your body, delight your senses, and bring a little more
              joy into your day. Our blog is dedicated to sharing delicious
              recipes, insightful nutrition tips, and inspiring stories to help
              you create a vibrant, healthy lifestyle. Whether you're a seasoned
              cook or just starting out on your culinary journey, Radiant Bites
              is here to guide you every step of the way. Join us as we explore
              the world of wholesome, mouth-watering food that not only tastes
              great but makes you feel great too. Let's make every bite radiant!
            </p>
          </div>
          {/* welcoming message ends here */}

          <div className="search-bar mt-10 ">
            <SectionTitle
              heading={"Search here"}
              subHeading={"Find your interest and enjoy!"}
            ></SectionTitle>

            {/* search bar for getting blogs */}
            <form
              onSubmit={handleSearch}
              className="flex w-full md:w-[85vw] mx-auto mt-5 "
            >
              <input
                onKeyUp={handleSearch}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                name="searchBar"
                placeholder="Search a blog..."
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-1.5 px-2 text-lg rounded-l-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <input
                type="submit"
                value={"Search"}
                className="px-6 rounded-r-md font-semibold text-lg text-white bg-primary border border-transparent hover:text-primary hover:bg-white hover:border-primary duration-500 "
              />
            </form>
          </div>

          {/* search result will display here */}
          <div className="search-result">
            {loading && <Spinner></Spinner>}
            {error && <p>{error}</p>}
            {!loading && blogs?.length === 0 && (
              <p className="font-semibold">{`No Blogs found by "${searchTerm}"`}</p>
            )}
            <div className="search-result-section mt-2 flex flex-col">
              {blogs?.map((blog) => (
                <Link
                  state={{ blog }}
                  key={blog._id}
                  to={`/blog/blog-details/${blog._id}`}
                  className="cursor-pointer list-decimal list-inside "
                >
                  {blog.title}
                </Link>
              ))}
            </div>
          </div>
          {/* search result displaying ends here */}

          {/* getting blogs by category selecting is starts here */}
          <div className="my-20">
            <SectionTitle
              heading={"Blogs by Category"}
              subHeading={"Here you'll get blogs by specific category"}
            ></SectionTitle>

            <div className="category-selecting mt-4 ">
              {/* category selecting */}
              <label
                htmlFor="category-select"
                className="text-lg text-gray-400 "
              >{`Select the Blog Category you want to explore: `}</label>
              <select
                name="category"
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="foodRecipe">Select a category</option>
                <option value="foodRecipe">Food Recipe</option>
                <option value="cookingTipsTechniques">
                  Cooking Tips and Techniques
                </option>
                <option value="nutritionWellness">
                  Nutrition and Wellness
                </option>
                <option value="restaurantReviews">Restaurant Reviews</option>
                <option value="foodAndCulture">Food and Culture</option>
                <option value="ingredientSpotlights">
                  Ingredient Spotlights
                </option>
                <option value="foodAndTravel">Food and Travel</option>
                <option value="Special Diets">Special Diets</option>
                <option value="foodPhotographyAndStyling">
                  Food Photography and Styling
                </option>
                <option value="foodIndustryNewsAndTrends">
                  Food Industry News and Trends
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* showing blogs by selected category */}
            <div className="showing-blog-by-category my-5 ">
              {loading ? (
                <Spinner></Spinner>
              ) : error ? (
                <h1>{error}</h1>
              ) : (
                <div>
                  {blogsByCategory?.length >= 1 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
                      {blogsByCategory?.map((blog) => (
                        <BlogCard key={blog._id} blog={blog}></BlogCard>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center font-semibold ">{`No Blogs found by "${category}" Category!`}</p>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* getting blogs by category selecting is ends here */}

          {/* blog post form component */}
          <BlogPostForm></BlogPostForm>

          <div
            className={`
          ${darkMode ? "bg-gray-700" : "bg-white"} 
           shadow-md rounded-md p-8 w-full md:w-[85vw] mx-auto my-20 `}
          >
            <SectionTitle
              heading={"Reservation Form"}
              subHeading={"Fill out the form and have Fun!"}
            ></SectionTitle>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;