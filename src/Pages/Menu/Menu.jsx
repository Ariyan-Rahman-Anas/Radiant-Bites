import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { toast } from "react-hot-toast";
import PageHeadBanner from "../../SharedComponents/PageHeadBanner";
import menuImg from "./../../assets/images/Menu.png";
import chefSpecials from "./../../assets/Menu Card/17.png";
import todayOffers from "./../../assets/Menu Card/18.png";
import bdTraditional from "./../../assets/Menu Card/19.png";
import appetizers from "./../../assets/Menu Card/20.png";
import desserts from "./../../assets/Menu Card/21.png";
import beef from "./../../assets/Menu Card/22.png";
import mutton from "./../../assets/Menu Card/23.png";
import chicken from "./../../assets/Menu Card/24.png";
import salads from "./../../assets/Menu Card/25.png";
import fastFood from "./../../assets/Menu Card/26.png";
import seaFood from "./../../assets/Menu Card/27.png";
import PrimaryButton from "../../SharedComponents/PrimaryButton";
import SectionTitle from "../../SharedComponents/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import usePageTitle from "../../Hooks/usePageTitle";
import { ThemeContext } from "../../useContext/allContext";
import { Modal } from "../../SharedComponents/Modal";
import RenderedEmptyMessage from "../../SharedComponents/RenderedEmptyMessage";
import { postDataWithFile } from './../../Hooks/apiUtils';

const Menu = () => {

  //updating the page title
  usePageTitle("Menu");

  const {darkMode} = useContext(ThemeContext)

  //static data for managing the full menu
  const allMenu = [
    {
      image: chefSpecials,
      details:
        "Discover our Chef Specials, crafted with culinary expertise and creativity to elevate your dining experience with each exquisite dish.",
      routeLink: "/menu/chefSpecial",
    },
    {
      image: todayOffers,
      details:
        "Indulge in today's exclusive offers, carefully curated to delight your taste buds and satisfy your cravings with exceptional flavors and unbeatable value.",
      routeLink: "/menu/todayOffer",
    },
    {
      image: bdTraditional,
      details:
        "Embark on a culinary journey through the rich and vibrant flavors of Bangladesh's traditional cuisine, where every dish tells a story of heritage, culture, and unparalleled taste.e value.",
      routeLink: "/menu/bdTraditional",
    },
    {
      image: appetizers,
      details:
        "Kickstart your culinary adventure with our tantalizing array of appetizers, each bite bursting with flavor and designed to awaken your taste buds for the feast that lies ahead.",
      routeLink: "/menu/appetizer",
    },
    {
      image: desserts,
      details:
        "Kickstart your culinary adventure with our tantalizing array of appetizers, each bite bursting with flavor and designed to awaken your taste buds for the feast that lies ahead.",
      routeLink: "/menu/dessert",
    },
    {
      image: beef,
      details:
        "Savor the rich and succulent flavors of our premium beef dishes, expertly prepared and cooked to perfection, promising a culinary experience that will leave you craving for  more..",
      routeLink: "/menu/beef",
    },
    {
      image: mutton,
      details:
        "Indulge in the tender and savory delights of our mutton specialties, crafted with care and seasoned to perfection, offering a truly satisfying dining experience.",
      routeLink: "/menu/mutton",
    },
    {
      image: chicken,
      details:
        "Savor the succulent flavors of our chicken dishes, expertly prepared and bursting with tantalizing taste, making every bite a memorable culinary adventure.",
      routeLink: "/menu/chicken",
    },
    {
      image: salads,
      details:
        "Delight in the crisp, refreshing crunch of our vibrant salads, crafted with the freshest ingredients and dressed to perfection, offering a symphony of flavors in every bite.",
      routeLink: "/menu/salad",
    },
    {
      image: fastFood,
      details:
        "Indulge in the irresistible allure of our fast food selection, where each bite promises a burst of savory satisfaction, perfectly paired with your favorite fixings for a taste.",
      routeLink: "/menu/fastFood",
    },
    {
      image: seaFood,
      details:
        "Indulge in ocean-fresh flavors with our seafood specialties, crafted to perfection for a culinary journey that delights the senses.",
      routeLink: "/menu/seaFood",
    },
  ];

  const { user } = useAuth();
  const formRef = useRef(null);

  //handling uploading new dish, for a logged in user. A user can share his dish in our menu
  const handleUploadItem = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodCategory = form.foodCategory.value;
    const name = form.name.value;
    const priceInStr = form.price.value;
    const recipe = form.recipe.value;
    const details = form.details.value;
    const image = form.image.files[0];
    const price = parseInt(priceInStr);

    //creating am item
    try {
      const anItem = {
        foodCategory,
        name,
        price,
        recipe,
        details,
        image,
      };
      const hasFile = !!form.image.files[0]; // Check for file presence
      try {
        const result = await postDataWithFile("allItems", anItem, hasFile);
        console.log("Blog posted successfully:", result);
      } catch (error) {
        console.error("Error posting blog:", error);
      }
      form.reset();
      toast.success("Thanks for your Contribution!");
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  return (
    <div>
      <PageHeadBanner
        sectionImg={menuImg}
        subHeading={"Would you like to try a dish?"}
        heading={"OUR MENU"}
      ></PageHeadBanner>

      <div className="my-20 px-2">
        <SectionTitle
          heading={"Delectable Menu"}
          subHeading={"Delightful Flavors Await"}
        ></SectionTitle>

        <div className="mt-6 w-full md:w-[85vw] mx-auto text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 text-white text-sm">
          {allMenu?.map((item, index) => (
            <div key={index} className="w-full">
              <Link className="shadow-md rounded-md relative group  ">
                <img
                  src={item.image}
                  alt="menu item picture"
                  className="rounded-md w-full"
                />
                <div className="hidden group-hover:flex items-center justify-center h-full rounded-md bg-black/70 absolute top-0 duration-500 ">
                  <div>
                    <p className="mb-3 px-2">{item.details}</p>
                    {user ? (
                      <PrimaryButton
                        value={"See All"}
                        link={item.routeLink}
                      ></PrimaryButton>
                    ) : (
                      <Modal modalOpenValue={"Explore"}></Modal>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="my-20">
          {user ? (
            <div
              className={`
          ${darkMode ? "bg-gray-700" : "bg-white"} 
           shadow-md rounded-md p-8 w-full md:w-[85vw] mx-auto`}
            >
              <SectionTitle
                heading={"Upload Your Dishes"}
                subHeading={"Showcase Your Culinary Delights"}
              ></SectionTitle>

              {/* The form is starts for uploading a dish */}
              <form onSubmit={handleUploadItem} ref={formRef} className="mt-6">
                {/* // */}
                <div className="mb-5 flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row  items-center justify-between gap-4 ">
                    <select
                      name="foodCategory"
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-green-100"
                      } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                    >
                      <option value="chefSpecial">Chef Special</option>
                      <option value="todayOffer">Today Offer</option>
                      <option value="bdTraditional">BD Traditional</option>
                      <option value="appetizers">Appetizers</option>
                      <option value="desserts">Desserts</option>
                      <option value="beef">Beef</option>
                      <option value="mutton">Mutton</option>
                      <option value="chicken">Chicken</option>
                      <option value="salads">Salads</option>
                      <option value="fastFood">Fast Food</option>
                      <option value="seaFood">Sea Food</option>
                    </select>
                    <input
                      type="text"
                      name="name"
                      required
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-green-100"
                      } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                      placeholder="Food Name"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row  items-center justify-between gap-4 ">
                    <input
                      type="text"
                      name="recipe"
                      required
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-green-100"
                      } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                      placeholder="Food Recipe"
                    />
                    <input
                      type="text"
                      name="details"
                      required
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-green-100"
                      } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                      placeholder="Food Details"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row  items-center justify-between gap-4 ">
                    <input
                      type="number"
                      name="price"
                      required
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-green-100"
                      } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                      placeholder="Food Price"
                    />
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      required
                      className={`${
                        darkMode ? "bg-gray-600" : "bg-green-100"
                      } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                      placeholder="Food Picture"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value={"Upload"}
                  className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer min-w-full "
                />
              </form>
              {/* The form is ends in here */}
            </div>
          ) : (
            // if user does not exist then it will inform the user that the user can add a dish in our menu
            <RenderedEmptyMessage
              width="85vw"
              heading={"Exciting News!"}
              subHeading={"You can add your signature dish to our Menu!"}
              message={
                "Attention Food Connoisseurs! Share your culinary creations and influence our menu with your culinary artistry. Let your signature dish shine and delight taste buds everywhere!"
              }
              directionMessage={"So, let's go for logged in"}
              btnValue={"Log in"}
              btnLink={"/logIn"}
            ></RenderedEmptyMessage>
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;