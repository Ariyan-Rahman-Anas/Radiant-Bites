import { useEffect, useState } from "react";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../SharedComponents/Spinner";
import SectionTitle from "../../SharedComponents/SectionTitle";
import PageHeadBanner from "../../SharedComponents/PageHeadBanner";
import bannerBg from "./../../assets/images/ShoppingCart.jpg"

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 ">
            <div className="col-span-2">
              {loading ? (
                <Spinner></Spinner>
              ) : error ? (
                <h1>{error}</h1>
              ) : (
                items?.map((item) => (
                  <div key={item._id} className="flex flex-col my-3">
                    <div className="flex items-start justify-start gap-3 shadow-md rounded-md ">
                      <div className="w-1/6 h-[100%] ">
                        <img
                          src={item?.image}
                          alt="ordered food image"
                          className="w-full h-full rounded-l-md"
                        />
                      </div>
                      <div>
                                <h1>{item?.name}</h1>
                                <div className="flex items-center justify-start gap-6">
                                    <p>{item?.totalItems}</p>
                                    <p>{item?.totalPrice}</p>
                                </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="col-span-2 md:col-span-1"></div>
          </div>
        </div>
      </div>
    );
};
export default ShoppingCart;