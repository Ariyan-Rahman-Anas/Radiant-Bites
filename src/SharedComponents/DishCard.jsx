import { useContext, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import useAuth from "../Hooks/useAuth";
import { CartContext, ThemeContext } from "../useContext/allContext";
import { toast } from "react-hot-toast";

const DishCard = ({ dish }) => {
  const { user } = useAuth();
  const loggedUserEmail = user?.email;
  const { name, image, price, recipe, details } = dish || {};
  const [openModal, setOpenModal] = useState(false);
  const [plusItem, setPlusItems] = useState(1);
  const [itemsPrice, setItemsPrice] = useState(price);
  const { darkMode } = useContext(ThemeContext);
  const { addItemToCart } = useContext(CartContext);

  //managing ordering quantity plus
  const handlePlusItem = () => {
    setPlusItems(plusItem + 1);
    setItemsPrice(itemsPrice + price);
  };

  //managing ordering quantity minus
  const handleMinusItem = () => {
    setPlusItems(plusItem - 1);
    setItemsPrice(itemsPrice - price);
  };

  //confirming order with storing the data in Local Storage
  const handleConfirmOrder = () => {
    setOpenModal(false);
    const totalItems = plusItem;
    const totalPrice = itemsPrice;

    const confirmAnOrder = {
      id: new Date().getTime().toString(),
      image,
      name,
      totalItems,
      totalPrice,
      loggedUserEmail,
    };

    // Save order to local storage
    saveOrderToLocalStorage(confirmAnOrder);
    addItemToCart(confirmAnOrder);
    toast.success("Order Confirmed!");
  };

  //updating the LS for adding cart
  const saveOrderToLocalStorage = (order) => {
    const existingOrders =
      JSON.parse(localStorage.getItem("orderedItems")) || [];
    existingOrders.push(order);
    localStorage.setItem("orderedItems", JSON.stringify(existingOrders));
  };

  return (
    <div
      className={` ${darkMode ? "bg-gray-700" : ""} shadow-md p-4 rounded-md `}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        } p-4 rounded-md shadow-md mb-3`}
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
              } inset-0 bg-black/20 backdrop-blur-sm duration-500 px-2 `}
            >
              <div
                onClick={(e_) => e_.stopPropagation()}
                className={`flex items-center justify-center absolute max-wmd w-[98%] md:w-2/3 h-[60vh] overflow-auto rounded-lg shadow-md shadow-gray-300 p-8 drop-shadow-md mx-2 bg-black text-gray-300 ${
                  openModal
                    ? "scale-1 opacity-1 duration-700"
                    : "scale-0 opacity-0 duration-700"
                }`}
              >
                <div className="dish-details">
                  <h1 className="mb-2 mt-[10rem] md:mt-20  text-2xl font-semibold text-white ">
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
                        <span className="font-semibold text-white">
                          Items:{" "}
                        </span>
                        {plusItem}
                      </p>
                      <div className="text-4xl mx-auto text-center flex items-center text-black justify-between gap-3 ">
                        <div
                          onClick={handleMinusItem}
                          id="minusBtn"
                          className="bg-gray-300 w-8 h-8 rounded-md leading-6 cursor-pointer "
                        >
                          <button disabled={plusItem === 1}>-</button>
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
                  <div className="cancel-confirm-btn flex justify-between">
                    <button
                      onClick={() => setOpenModal(false)}
                      className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-danger border-[.09rem] border-transparent hover:border-danger hover:text-danger hover:bg-white duration-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmOrder}
                      className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-primary border-[.09rem] border-transparent hover:border-primary hover:text-primary hover:bg-white duration-500"
                    >
                      Confirm
                    </button>
                  </div>
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