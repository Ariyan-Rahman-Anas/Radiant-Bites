import RadiantAds from "../../SharedComponents/RadiantAds";
import Banner from "./Banner";
import FromOurMenu from "./FromOurMenu";
import { OnlineOrder } from "./OnlineOrder";
import ReadMore from "./ReadMore";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OnlineOrder></OnlineOrder>
      <RadiantAds></RadiantAds>
      <FromOurMenu></FromOurMenu>
      <ReadMore></ReadMore>
      <Review></Review>
    </div>
  );
};

export default Home;
