import { useContext, useEffect, useState } from "react";
import { updateData } from "./../Hooks/apiUtils";
import { toast } from "react-hot-toast";
import { ThemeContext } from "../useContext/allContext";

const EditModal = ({ dish, isOpen, onClose, onUpdate }) => {
  const { darkMode } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [recipe, setRecipe] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (dish) {
      setName(dish.name);
      setPrice(dish.price);
      setFoodCategory(dish.foodCategory);
      setRecipe(dish.recipe);
      setDetails(dish.details);
    }
  }, [dish]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    try {
      const updatedDish = {
        ...dish,
        name,
        price,
        foodCategory,
        recipe,
        details,
      };

      if (image) {
        updatedDish.image = image;
        }

      await updateData("allItems", dish?._id, updatedDish);
      onUpdate(updatedDish);
      toast.success("Updated Successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update dish");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-black shadow shadow-gray-300 p-4 rounded-md w-full md:w-[85vw] relative">
        <h2 className="text-xl mb-5 text-center">Edit your Contributes</h2>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                value={name}
                required
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
              />
            </div>
            <div>
              <input
                type="number"
                value={price}
                required
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
              />
            </div>
            <div>
              <select
                required
                value={foodCategory}
                onChange={(e) => setFoodCategory(e.target.value)}
                name="foodCategory"
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
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
            </div>
            <div>
              <input
                type="file"
                placeholder="Image"
                name="image"
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
              />
            </div>
            <div>
              <textarea
                rows={4}
                required
                placeholder="Recipe"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
              />
            </div>
            <div>
              <textarea
                rows={4}
                required
                placeholder="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-danger border-[.09rem] border-transparent hover:border-danger hover:text-danger hover:bg-white duration-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-[1.2rem] py-1 rounded-full w-fit text-white bg-primary border-[.09rem] border-transparent hover:border-primary hover:text-primary hover:bg-white duration-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditModal;