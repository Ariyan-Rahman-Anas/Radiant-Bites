import PageHeadBanner from '../../SharedComponents/PageHeadBanner';
import usePageTitle from './../../Hooks/usePageTitle';
import bannerImg from "./../../assets/images/Payment.png";

const Payment = () => {
  //updating the page title
  usePageTitle("Payment");

  return (
    <div>
      <PageHeadBanner
        sectionImg={bannerImg}
        heading={"Make Payment"}
        subHeading={"Please pay your bill and enjoy the dish!"}
        subHeadingColor={"white"}
      ></PageHeadBanner>
    </div>
  );
};
export default Payment;