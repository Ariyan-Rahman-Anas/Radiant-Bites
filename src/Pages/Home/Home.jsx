import RadiantAds from "../../SharedComponents/RadiantAds";
import Banner from "./Banner";
import FromOurMenu from "./FromOurMenu";
import { OnlineOrder } from "./OnlineOrder";
import ReadMore from "./ReadMore";
import Review from "./Review";
import usePageTitle from './../../Hooks/usePageTitle';

const Home = () => {
  //updating the page title, here title is default title for home page
  usePageTitle("");

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