import { useEffect, useState } from "react";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../SharedComponents/Spinner";

const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const responseData = await getData("orderedItems")
                setItems(responseData)
            } catch (error) {
               setError(error) 
            } finally {
                setLoading(false)
            }
        }     
        fetchData()
    },[])

    return (
        <div>
            {loading ? <Spinner></Spinner> : error ? <h1>{error}</h1> : items?.map(item=><div key={item._id}>{item?.name}</div>) }
        </div>
    );
};
export default ShoppingCart;