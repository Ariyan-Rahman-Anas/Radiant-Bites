import PageHeadBanner from "../../SharedComponents/PageHeadBanner";
import menuImg from "./../../assets/images//menu.svg"
const Menu = () => {
    return (
      <div>
        <PageHeadBanner
          sectionImg={menuImg}
          heading={"Would you like to try a dish?"}
          subHeading={"OUR MENU"}
        ></PageHeadBanner>
      </div>
    );
};
export default Menu;