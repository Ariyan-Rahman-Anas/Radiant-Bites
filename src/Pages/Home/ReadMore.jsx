import PrimaryButton from "../../SharedComponents/PrimaryButton";
import sectionImg from "./../../assets/images/readMore.svg";

const ReadMore = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${sectionImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center p-5 md:p-20 text-white "
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className=" w-full md:w-1/3">
          <img
            src={sectionImg}
            alt="section img"
            className="w-full rounded-md "
          />
        </div>
        <div className="flex-1 text-sm ">
          <h1 className="font-semibold text-3xl mb-4 ">
            WHERE CAN I GET SOME?
          </h1>
          <p>
            Welcome to Radiant Bites, your gateway to exquisite dining
            experiences. Explore our menu brimming with flavorful appetizers,
            succulent meats, and fresh seafood. Embark on a culinary journey
            with us and discover the essence of gourmet cuisine.
          </p>
          <h2 className="mt-1 mb-6 ">March 20, 2023</h2>
          <PrimaryButton value={"Read more..."} link={"/"}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default ReadMore;