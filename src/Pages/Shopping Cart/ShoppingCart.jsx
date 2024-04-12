import { useContext, useEffect, useState } from "react";
import { deleteData, getData } from "../../Hooks/apiUtils";
import Spinner from "../../SharedComponents/Spinner";
import SectionTitle from "../../SharedComponents/SectionTitle";
import PageHeadBanner from "../../SharedComponents/PageHeadBanner";
import bannerBg from "./../../assets/images/shoppingCart.png";
import { CiShoppingTag } from "react-icons/ci";
import { ThemeContext } from "../../useContext/allContext";
import useAuth from "../../Hooks/useAuth";
import RenderedEmptyMessage from "./../../SharedComponents/RenderedEmptyMessage";
import { LuDelete } from "react-icons/lu";
import {toast} from "react-hot-toast"
import PrimaryButton from "../../SharedComponents/PrimaryButton";
import usePageTitle from "../../Hooks/usePageTitle";

const ShoppingCart = () => {
  //updating the page title
  usePageTitle("Shopping Cart");

  // managing states
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const { user } = useAuth();

  //fetching ordered items finding by user
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData(
          `orderedItems?loggedUserEmail=${user?.email}`
        );
        setItems(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user?.email]);


  // deleting an specific item form  ordered items
  const handleDeleteCartItem = async (itemId) => {
    try {
      await deleteData(`orderedItems`, itemId); // Pass the endpoint and itemId
      toast.success("Ordered Cancelled!");
      console.log(`Item with ID ${itemId} deleted successfully.`);
        const remainingCartItems = items.filter(
          (item) => item._id !== itemId
        );
        setItems(remainingCartItems);
    } catch (error) {
      console.error(`Error deleting item with ID ${itemId}:`, error);
    }
  };

  return (
    <div>
      <PageHeadBanner
        sectionImg={bannerBg}
        heading={"Hello Foodie"}
        subHeading={"Your ordered Foods are here!"}
      ></PageHeadBanner>

      <div className="my-16">
        <SectionTitle
          heading={"Cart"}
          subHeading={"Your desired foods are here!"}
        ></SectionTitle>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 px-2 ">
          <div className="col-span-2">
            {loading ? (
              <Spinner></Spinner>
            ) : error ? (
              <h1>{error}</h1>
            ) : items?.length < 1 ? (
              <RenderedEmptyMessage
                heading={"Oops!"}
                subHeading={"You did not order any food yet!"}
                message={
                  "Utilize our menu where you will lots of delicious dishes from various category. Only for your satisfaction we provided the recipe of each and every dish. We care about our honorable guests!"
                }
                btnValue={"Explore menu"}
                btnLink={"/menu"}
              ></RenderedEmptyMessage>
            ) : (
              items?.map((item) => (
                <div key={item._id} className=" ">
                  <div
                    className={`${
                      darkMode ? "bg-gray-700 my-[.22rem] mb-0 " : ""
                    }  shadow-md py-5 md:py-0 rounded-md pr-2 md:pr-5 hover:shadow-lg duration-300 `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-co md: flex-row items-center gap-3 w-fit ">
                        <div className="w-12 md:w-24 h-[100%]">
                          <img
                            src={item?.image}
                            alt="ordered food image"
                            className="w-full h-full rounded-l-md"
                          />
                        </div>
                        <div className="y-2">
                          <h1
                            className={`${
                              darkMode ? "text-gray-300" : ""
                            } font-semibold`}
                          >
                            {item?.name}
                          </h1>
                          <div className="mt-1 text-sm flex items-center justify-start gap-6">
                            <p>
                              <span className="font-semibold">Quantity: </span>
                              {item?.totalItems}
                            </p>
                            <p>
                              <span className="font-semibold">Price: </span>$
                              {item?.totalPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border- flex items-center justify-center ">
                        <button
                          onClick={() => handleDeleteCartItem(item?._id)}
                          className=""
                        >
                          <LuDelete className="text-2xl hover:text-3xl hover:text-danger duration-500 "></LuDelete>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div
            className={`${
              darkMode ? "bg-gray-700" : ""
            } col-span-2 md:col-span-1 shadow-md rounded-md flex flex-col `}
          >
            <div
              className={`${
                darkMode ? "border-gray-500" : ""
              } flex items-center justify-center border-b-2`}
            >
              <CiShoppingTag className="text-center text-6xl my-3 text-gray-500 "></CiShoppingTag>
            </div>
            <div className="flex items-center justify-center h-full text-center ">
              {loading ? (
                <Spinner></Spinner>
              ) : error ? (
                <h1>{error}</h1>
              ) : (
                items?.length < 1 && (
                  <div>
                    <h1 className="mb-2 font-semibold text-gray-500 ">
                      Your cart is empty!
                    </h1>
                    <PrimaryButton
                      value={"Keep Order "}
                      link={"/menu"}
                    ></PrimaryButton>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;