import PrimaryButton from "./PrimaryButton";

const DishCard = ({ dish }) => {
  const { name, image, price } = dish || {};
  return (
    <div className="shadow-md bg-white p-4 rounded-md ">
      <div className="p-4 rounded-md bg-gray-100 shadow-md mb-5 ">
        <img src={image} alt="dish image" className="w-full rounded-md" />
      </div>
      <div>
        <h1 className="text-lg">{name}</h1>
        <div className="mt-2 flex items-center justify-between">
          <PrimaryButton value={"Order now"}></PrimaryButton>
          <p className="font-semibold text-gray-500 ">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
