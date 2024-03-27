import RadiantAds from "../../SharedComponents/RadiantAds";
import Banner from "./Banner";
import FromOurMenu from "./FromOurMenu";
import { OnlineOrder } from "./OnlineOrder";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
          <OnlineOrder></OnlineOrder>
      <RadiantAds></RadiantAds>
      <FromOurMenu></FromOurMenu>
    </div>
  );
};

export default Home;