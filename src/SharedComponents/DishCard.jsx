import { useContext, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { ThemeContext } from "../useContext/allContext";
import { postData } from "../Hooks/apiUtils";
import {toast} from "react-hot-toast"

const DishCard = ({ dish }) => {
  const { user } = useAuth();
  const loggedUserEmail = user?.email;
  // console.log("email is:", loggedUserEmail)
  const { _id, name, image, price, recipe, details } = dish || {};
  const [openModal, setOpenModal] = useState(false);
  const [plusItem, setPlusItems] = useState(1);
  const [itemsPrice, setItemsPrice] = useState(price);
  const { darkMode } = useContext(ThemeContext);

  const axiosSecure = useAxiosSecure();
  const url = "";

  const handlePlusItem = () => {
    setPlusItems(plusItem + 1);
    setItemsPrice(itemsPrice + price);
  };

  const handleMinusItem = () => {
    setPlusItems(plusItem - 1);
    setItemsPrice(itemsPrice - price);
  };

  // const handleConfirmOrder = async () => {
  //   setOpenModal(false);
  //   const totalItems = plusItem;
  //   const totalPrice = itemsPrice;

  //   const confirmAnOrder = {
  //     _id,
  //     image,
  //     name,
  //     totalItems,
  //     totalPrice,
  //     loggedUserEmail,
  //   };

  //   try {
  //     confirmAnOrder;
  //     const response = await postData("items", confirmAnOrder);
  //     // if (response.data.insertedId) {
  //     //   console.log("data posted: ", confirmAnOrder);
  //     // }
  //     console.log("data posted: ", response);
  //   } catch (error) {
  //     console.log("ordering err isl: ", error);
  //   }
  // };


  const handleConfirmOrder = async () => {
    setOpenModal(false);
    const totalItems = plusItem;
    const totalPrice = itemsPrice;

    const confirmAnOrder = {
      _id,
      image,
      name,
      totalItems,
      totalPrice,
      loggedUserEmail,
    };

    try {
      // Pass the correct endpoint for posting orders
      const response = await postData("orderedItems", confirmAnOrder);
      console.log("Order confirmation response:", response);
      toast.success("Successfully ordered!")
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };


  // axiosSecure
  //   .post(url, confirmAnOrder, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then((res) => {
  //     if (res.data.insertedId) {
  //       console.log("yahhhhhhhhhhhh, item posted!");
  //     }
  //   });

  // const handlePostData = async (endPoint, orderingItem) => {
  //   try {
  //     const response = await postData("", confirmAnOrder);
  //     if (response.data.insertedId) {
  //       console.log("data posted: ", orderingItem);
  //     }
  //   } catch (error) {
  //     console.log("ordering err isl: ", error);
  //   }
  // };
  // handlePostData();

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-700" : ""
      } shadow-md p-4 rounded-md `}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        } p-4 rounded-md shadow-md mb-3 `}
      >
        <img src={image} alt="dish image" className="w-full rounded-md" />
      </div>
      <div>
        <h1 className="text-lg">{name}</h1>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <PrimaryButton
              onClickFunc={() => setOpenModal(true)}
              value={"Order Now"}
            ></PrimaryButton>
            <div
              onClick={() => setOpenModal(false)}
              className={`fixed z-[100] flex items-center justify-center ${
                openModal ? "visible opacity-100" : "invisible opacity-0"
              } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-white/10`}
            >
              <div
                onClick={(e_) => e_.stopPropagation()}
                className={`text- absolute max-w-md rounded-lg p-6 drop-shadow-md mx-2 bg-black text-gray-300 ${
                  openModal
                    ? "scale-1 opacity-1 duration-700"
                    : "scale-0 opacity-0 duration-700"
                }`}
              >
                <h1 className="mb-2 text-2xl font-semibold text-white ">
                  {name}
                </h1>
                <p className="mb-5">
                  <span className="text-white font-semibold">Recipe: </span>
                  {recipe}
                </p>
                <p className="mb-2 ">
                  <span className="text-white font-semibold">Details: </span>
                  {details}
                </p>
                <div className="my-4 flex items-center justify-between">
                  <div className="flex items-center justify-between gap-5">
                    <p>
                      <span className="font-semibold text-white">Items: </span>
                      {plusItem}
                    </p>
                    <div className="text-4xl mx-auto text-center flex items-center text-black justify-between gap-3 ">
                      <div
                        onClick={handleMinusItem}
                        id="minusBtn"
                        className="bg-gray-300 w-8 h-8 rounded-md leading-6 cursor-pointer "
                      >
                        <button disabled={plusItem == 1}>-</button>
                      </div>
                      <div
                        onClick={handlePlusItem}
                        className="bg-gray-300 w-8 h-8 rounded-md leading-6 cursor-pointer "
                      >
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4">
                    <span className="font-semibold text-white">Price: </span>$
                    {itemsPrice}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-danger border-[.09rem] border-transparent hover:border-danger hover:text-danger hover:bg-white duration-500  "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-primary border-[.09rem] border-transparent hover:border-primary hover:text-primary hover:bg-white duration-500 "
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="font-semibold text-gray-400 ">${price}</p>
        </div>
      </div>
    </div>
  );
};
export default DishCard;
