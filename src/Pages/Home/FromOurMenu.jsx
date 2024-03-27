import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../SharedComponents/SectionTitle";

const FromOurMenu = () => {
  const [allItems, setAllItems]=useState([])
  // const axiosSecure = useAxiosSecure()
  // const url = `/allItems`
  
  // useEffect(() => {
  //   axiosSecure.get(url).then((res) => setAllItems(res?.data));
  // }, [axiosSecure, url]);

  useEffect(() => {
    fetch(`http://localhost:5001/allItems`)
      .then(res => res.json())
    .then(data=>setAllItems(data))
  },[])

  return (
    <div className="my-20 px-2">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      
      {/* fetching menu items for the mongodb */}
      <div>
        {allItems.map(item => <div key={item.id}>
          <div>
            {/* <img src={item} alt="" /> */}
          </div>
          <h1>{item.name}</h1>
        </div> )}
      </div>

    </div>
  );
};

export default FromOurMenu;