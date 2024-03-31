import aboutImg from "./../../assets/images/About.png";
import PageHeadBanner from "./../../SharedComponents/PageHeadBanner";

const About = () => {
  return (
    <div>
      <PageHeadBanner
        sectionImg={aboutImg}
        heading={"About Us"}
        subHeading={"Discover the Essence of Radiant Bites"}
        subHeadingColor={"white"}
      ></PageHeadBanner>
    </div>
  );
};
export default About;
