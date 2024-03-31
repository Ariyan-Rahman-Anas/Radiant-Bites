// import SectionTitle from "../../../SharedComponents/SectionTitle";

// const ChefSpecial = () => {
//   return (
//     <div className="px-2">
      
//     </div>
//   );
// };

// export default ChefSpecial;

import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DishCard from "../../../SharedComponents/DishCard";

const ChefSpecial = () => {
  const axiosSecure = useAxiosSecure();
  const url = `/allItems/menu/chefSpecial`;
  const [chickenDishes, setChickenDishes] = useState([]);

  useEffect(() => {
    axiosSecure.get(url).then((res) => setChickenDishes(res.data));
  }, [axiosSecure, url]);

  return (
    <div>
      <div>
        {chickenDishes.length >= 1 ? (
          <div>
            {chickenDishes.map((dish) => (
              <DishCard key={dish._id} dish={dish}></DishCard>
            ))}
          </div>
        ) : (
          "d"
        )}
      </div>
    </div>
  );
};
export default ChefSpecial;