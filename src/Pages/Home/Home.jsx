import RadiantAds from "../../SharedComponents/RadiantAds";
import Banner from "./Banner";
import { OnlineOrder } from "./OnlineOrder";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
          <OnlineOrder></OnlineOrder>
          <RadiantAds></RadiantAds>
    </div>
  );
};

export default Home;