import { useContext, useEffect, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { FiMinusCircle } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Spinner from "../../SharedComponents/Spinner";
import SectionTitle from "../../SharedComponents/SectionTitle";
import PageHeadBanner from "../../SharedComponents/PageHeadBanner";
import bannerBg from "./../../assets/images/shoppingCart.png";
import {  CartContext, ThemeContext } from "../../useContext/allContext";
import RenderedEmptyMessage from "./../../SharedComponents/RenderedEmptyMessage";
import PrimaryButton from "../../SharedComponents/PrimaryButton";
import usePageTitle from "../../Hooks/usePageTitle";

const ShoppingCart = () => {
  usePageTitle("Cart");

  const { removeItemFromCart } = useContext(CartContext);

  //getting ordered items from the LS
  const getItemsFromLocalStorage = () => {
    let dishItems = localStorage.getItem("orderedItems");
    if (dishItems) {
      return JSON.parse(dishItems);
    } else {
      return [];
    }
  };

  const [items, setItems] = useState(getItemsFromLocalStorage());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartPayable, setCartPayable] = useState(0);
  const { darkMode } = useContext(ThemeContext);


  useEffect(() => {
    calculateCartPayable(items);
  }, [items]);

  const calculateCartPayable = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.totalPrice, 0);
    setCartPayable(totalAmount);
  };

  //deleting an item from the cart
  const deleteCartItem = (itemId) => {
    removeItemFromCart(itemId)
    const remainingItems = items.filter((item) => item.id !== itemId);
    setItems(remainingItems);
    updateLocalStorage(remainingItems);
    toast.success("Item Cancelled!");
  };

  //updating the cart after delete
  const updateLocalStorage = (items) => {
    localStorage.setItem("orderedItems", JSON.stringify(items));
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
                  "Utilize our menu where you will find lots of delicious dishes from various categories. Only for your satisfaction, we provided the recipe of each and every dish. We care about our honorable guests!"
                }
                btnValue={"Explore menu"}
                btnLink={"/menu"}
              ></RenderedEmptyMessage>
            ) : (
              items?.map((item) => (
                <div key={item._id} className=" ">
                  <div
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 "
                        : "hover:bg-green-100"
                    }  my-[.8rem] shadow-md py-5 md:py-0 rounded-md pr-2 md:pr-5 hover:shadow- duration-700 `}
                  >
                    <div className="flex items-center justify-between group ">
                      <div className="flex flex-co md:flex-row items-center gap-3 w-fit ">
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
                              <span>Quantity: </span>
                              {item?.totalItems}
                            </p>
                            <p>
                              <span>Price: </span>${item?.totalPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border- flex items-center justify-center ">
                        <button
                          title="Delete item"
                          onClick={() => deleteCartItem(item?.id)}
                          className=""
                        >
                          <FiMinusCircle className="text-xl text-gray-400 hover:bg-danger rounded-full hover:text-white duration-500 "></FiMinusCircle>
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
            } col-span-2 md:col-span-1 shadow-md rounded-md flex flex-col font-serif text-sm `}
          >
            <div
              className={`${
                darkMode ? "border-gray-500" : ""
              } flex items-center justify-center border-b-2 text-center `}
            >
              <div className="mt-3">
                <CiShoppingTag className="text-6xl mx-auto text-gray-500 "></CiShoppingTag>
                <strong>Radiant Bites</strong>
              </div>
            </div>
            <div className="flex items-center justify-center h-full text-center ">
              {loading ? (
                <Spinner></Spinner>
              ) : error ? (
                <h1>{error}</h1>
              ) : items?.length >= 1 ? (
                <div className="w-full mb-3">
                  <div className="text-start m-5 mb-6 p-3 shadow-md rounded-md ">
                    <div className="border-b-2 pb-1 mb-2 ">
                      {items?.map((item) => (
                        <div
                          key={item?._id}
                          className="flex items-start justify-between"
                        >
                          <div>
                            {item?.totalItems > 1 ? (
                              <div className="flex gap-2 ">
                                <h1>{item?.name}</h1>
                                <p>x</p>
                                <p>{item?.totalItems}</p>
                              </div>
                            ) : (
                              <h1>{item?.name}</h1>
                            )}
                          </div>
                          <p>${item?.totalPrice}.00</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <p>Total Payable:</p>
                      <p> ${cartPayable}.00 </p>
                    </div>
                  </div>
                  <PrimaryButton
                    link={"payment"}
                    value={"Proceed to Payment"}
                  ></PrimaryButton>
                </div>
              ) : (
                <div>
                  <h1 className="mb-2 font-semibold text-gray-500 ">
                    Your cart is empty!
                  </h1>
                  <PrimaryButton
                    value={"Keep Order "}
                    link={"/menu"}
                  ></PrimaryButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;