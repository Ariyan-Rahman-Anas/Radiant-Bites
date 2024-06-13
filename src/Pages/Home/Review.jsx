import SectionTitle from "../../SharedComponents/SectionTitle";
import Slider from "../../SharedComponents/Slider";

const Review = () => {
  return (
    <div className="my-24 m-2 ">
      <SectionTitle
        heading={"What Our Clients Say"}
        subHeading={"TESTIMONIALS"}
      ></SectionTitle>
      <Slider></Slider>
    </div>
  );
};
export default Review;