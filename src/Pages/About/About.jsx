import { Link } from "react-router-dom";
import aboutImg from "./../../assets/images/About.png";
import PageHeadBanner from "./../../SharedComponents/PageHeadBanner";
import SectionTitle from "./../../SharedComponents/SectionTitle";
import usePageTitle from "../../Hooks/usePageTitle";
import { useContext } from "react";
import { ThemeContext } from "../../useContext/allContext";
import WriteAReview from "../Home/WriteAReview";

const About = () => {
  //updating the page title
  usePageTitle("About Us");

  const {darkMode} = useContext(ThemeContext)

  //owner ariyan rahman anas's website url
  const founderInfo = `https://ariyanrahmananas.netlify.app/`;
  
  return (
    <div>
      <PageHeadBanner
        sectionImg={aboutImg}
        heading={"About Us"}
        subHeading={"Discover the Essence of Radiant Bites"}
        subHeadingColor={"white"}
      ></PageHeadBanner>

      <div className="px-2">
        <div
          className={`${
            darkMode ? "text-gray-400 bg-gray-700" : "text-gray-500 bg-white"
          } my-20 p-2 md:p-8 shadow-md rounded-md w-full md:w-[85vw] mx-auto text-sm`}
        >
          <SectionTitle
            heading={"Our Story"}
            subHeading={"From Passion to Plate: The Birth of Radiant Bites"}
          ></SectionTitle>
          <div className="bg-red-00 p-3">
            <p>
              <span className="text-6xl font-light text-primary ">A</span>t
              Radiant Bites, our story begins with a shared passion for creating
              exceptional culinary experiences. It all started when{" "}
              <Link to={founderInfo} className="font-semibold text-primary ">
                {`Ariyan Rahman Anas's`}
              </Link>{" "}
              had a vision of bringing together delicious flavors, warm
              hospitality, and a vibrant dining atmosphere under one roof.
              Inspired by a lifelong love of food and a desire to share that
              passion with others,{" "}
              <Link
                to={"https://ariyanrahmananas.netlify.app"}
                className="font-semibold text-primary "
              >
                {`Ariyan Rahman Anas's`}
              </Link>{" "}
              embarked on a journey to create a restaurant that would become a
              beloved culinary destination in the heart of Chattogram at
              Nasirabad, Khulshi-4225
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } text-xl mt-5 mb-1`}
            >
              A Culinary Journey: Milestones and Memories
            </p>
            <p>
              Since opening our doors [number] years ago, Radiant Bites has been
              on an incredible culinary journey filled with memorable moments
              and milestones. From our humble beginnings as a cozy neighborhood
              eatery to becoming a renowned dining destination, every step of
              our journey has been guided by a commitment to excellence and a
              dedication to delighting our guests.
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } text-xl mt-5 mb-1`}
            >
              Crafting Culinary Excellence: Our Approach to Food
            </p>
            <p>
              At Radiant Bites, we believe that great food starts with the
              finest ingredients and a passion for culinary craftsmanship. Our
              talented team of chefs takes pride in sourcing the freshest,
              highest-quality ingredients and transforming them into exquisite
              dishes that tantalize the taste buds and nourish the soul. From
              classic comfort foods to innovative culinary creations, each item
              on our menu is thoughtfully crafted with care and creativity.
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } text-xl mt-5 mb-1`}
            >
              Building Connections: A Place for Community and Connection
            </p>
            <p>
              Beyond the plates we serve, Radiant Bites is a place where
              connections are forged, friendships are made, and memories are
              shared. We take pride in being a gathering place for friends,
              families, and food lovers alike, where laughter fills the air and
              every meal is an opportunity to create lasting moments together.
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } text-xl mt-5 mb-1`}
            >
              Looking Ahead: Our Vision for the Future
            </p>
            <p>
              As we continue to grow and evolve, our commitment to excellence
              remains unwavering. With each passing day, we strive to push the
              boundaries of culinary innovation, elevate the dining experience,
              and leave a lasting impression on everyone who walks through our
              doors. As we embark on the next chapter of our journey, we invite
              you to join us and experience the magic of Radiant Bites
              firsthand.
            </p>
          </div>
        </div>
        <WriteAReview></WriteAReview>
      </div>
    </div>
  );
};
export default About;