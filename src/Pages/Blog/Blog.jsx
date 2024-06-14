import { useContext } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import BlogBg from "./../../assets/images/Blog.png" 
import PageHeadBanner from './../../SharedComponents/PageHeadBanner';
import { ThemeContext } from "../../useContext/allContext";
import BlogPostForm from "../../SharedComponents/BlogPostForm";

const Blog = () => {
    const { darkMode } = useContext(ThemeContext);
    
    const handleSearchBar = e => {
      e.preventDefault();
    //   const form = e.target;
      const searchValue = e.target?.value;
    //   console.log(searchValue);
    }

    return (
      <div>
        <PageHeadBanner
          sectionImg={BlogBg}
          heading={"Blog"}
          subHeading={"Deep div into the Restaurant world!"}
        ></PageHeadBanner>

        <div className="px-2">
          <div className="w-full md:w-[85vw] mx-auto mt-5 ">
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

            <p className="">
              <strong>Blog Categories:</strong> Recipes, Restaurant News,
              Events, Food Trends and Tips-Tricks
            </p>
          </div>

          <div className="search-bar mt-2 ">
            <form
              onClick={handleSearchBar}
              className="flex w-full md:w-[85vw] mx-auto "
            >
              <input
                onChange={handleSearchBar}
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
    );
};
export default Blog;