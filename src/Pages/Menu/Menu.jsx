import { Link } from "react-router-dom";
import PageHeadBanner from "../../SharedComponents/PageHeadBanner";
import menuImg from "./../../assets/images//Menu.png";
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
import { useEffect, useRef } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Menu = () => {
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
  const axiosSecure = useAxiosSecure();
  const url = `/allItems`;

  const handleUploadItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodCategory = form.foodCategory.value;
    const name = form.name.value;
    const price = form.price.value;
    const recipe = form.recipe.value;
    const details = form.details.value;
    const image = form.image.value;

    const anItem = {
      foodCategory,
      name,
      price,
      recipe,
      details,
      image,
    };

    //posting an item
    axiosSecure.post(url, anItem).then((res) => {
      if (res?.data?.insertedId) {
        console.log("An item posted successfully!");
    formRef.current.reset();
      }
    });
    console.log("the uploading item is: ", anItem);
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
                    <PrimaryButton
                      value={"See All"}
                      link={item.routeLink}
                    ></PrimaryButton>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* // */}
        <div className="my-20 bg-white shadow-md rounded-md p-8 w-full md:w-[85vw] mx-auto">
          {user ? (
            <div>
              <SectionTitle
                heading={"Upload Your Dishes"}
                subHeading={"Showcase Your Culinary Delights"}
              ></SectionTitle>
              {/* form starts for uploading a food */}
              <form onSubmit={handleUploadItem} ref={formRef} className="mt-6 ">
                {/* // */}
                <div className="mb-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 ">
                    <select
                      name="foodCategory"
                      className="p-1.5 rounded-md w-full border-y-2 border-transparent bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-300 focus:border-b-primary"
                    >
                      <option value="chefSpecial">Chef Special</option>
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
                      className="p-1.5 rounded-md w-full border-y-2 border-transparent bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-300 focus:border-b-primary "
                      placeholder="Food Name"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 ">
                    <input
                      type="text"
                      name="recipe"
                      required
                      className="p-1.5 rounded-md w-full border-y-2 border-transparent bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-300 focus:border-b-primary "
                      placeholder="Food Recipe"
                    />
                    <input
                      type="text"
                      name="details"
                      required
                      className="p-1.5 rounded-md w-full border-y-2 border-transparent bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-300 focus:border-b-primary "
                      placeholder="Food Details"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 ">
                    <input
                      type="number"
                      name="price"
                      required
                      className="p-1.5 rounded-md w-full border-y-2 border-transparent bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-300 focus:border-b-primary "
                      placeholder="Food Price"
                    />
                    <input
                      type="file"
                      name="image"
                      required
                      className="p-1.5 rounded-md w-full border-y-2 border-transparent bg-gray-200 placeholder-gray-500 focus:outline-none focus:bg-gray-300 focus:border-b-primary "
                      placeholder="Food Picture"
                    />
                  </div>
                </div>
                {/* // */}

                <input
                  type="submit"
                  value={"Upload"}
                  className="block mx-auto w-fit px-[1.2rem] py-1 rounded-full text-white bg-primary border-[.09rem] border-transparent hover:border-primary hover:text-primary hover:bg-white duration-500 "
                />
              </form>
            </div>
          ) : (
            // adding a dish form ends here
            // if user does not exist then it will inform the user that the user can add a dish to our menu
            <div className="text-center ">
              <SectionTitle
                heading={"Exciting News!"}
                subHeading={"You can add your signature dish to our Menu!"}
              ></SectionTitle>
              <p className="mt-4 w-full md:w-3/4 mx-auto text-gray-500  ">
                Attention Food Connoisseurs! Share your culinary creations and
                influence our menu with your culinary artistry. Let your
                signature dish shine and delight taste buds everywhere!
              </p>
              <p className="font-semibold my-2 ">So, let's go for logged in</p>
              <PrimaryButton value={"Log in"} link={"/logIn"}></PrimaryButton>
            </div>
          )}
        </div>
        {/* add ends here */}
      </div>
    </div>
  );
};
export default Menu;