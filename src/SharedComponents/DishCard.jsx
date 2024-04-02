import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const DishCard = ({ dish }) => {
  const { name, image, price, recipe, details } = dish || {};
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="shadow-md bg-white p-4 rounded-md ">
      <div className="p-4 rounded-md bg-gray-100 shadow-md mb-3 ">
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
                className={`text- absolute max-w-md rounded-md p-6 drop-shadow-md mx-2 bg-black text-gray-300 ${
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
                <p className="mb-4">
                  <span className="font-semibold text-white">Price: </span>$
                  {price}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-danger border-[.09rem] border-transparent hover:border-danger hover:text-danger hover:bg-white duration-500  "
                  >
                    Cancel
                  </button>
                  <PrimaryButton
                    value={"Confirm"}
                    onClickFunc={() => setOpenModal(false)}
                  ></PrimaryButton>
                </div>
              </div>
            </div>
          </div>
          <p className="font-semibold text-gray-500 ">${price}</p>
        </div>
      </div>
    </div>
  );
};
export default DishCard;
