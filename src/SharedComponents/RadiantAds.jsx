import adsIMG from "./../assets/images/Rectangle.svg";
import PrimaryButton from "./PrimaryButton";

const RadiantAds = () => {
  return (
    <div className="my-20 px-2">
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.0), rgba(0,0,0,0.5)), url(${adsIMG})`,
        }}
        className="bg-no-repeat bg-cover bg-center w-full md:w-2/3 mx-auto p-5 md:p-10 rounded-md "
      >
        <div className="bg-white rounded-lg p-5 text-center ">
          <h1 className="text-4xl shadow-md w-fit mx-auto p-2 rounded-md  ">
            Radiant Bites
          </h1>
          <p className="text-sm leading-6 text-gray-500 mt-3 mb-5 ">
            Radiant Bites beckons food enthusiasts to indulge in a culinary
            adventure, offering a diverse menu brimming with mouthwatering
            delicacies meticulously crafted to satisfy every palate, ensuring an
            unforgettable dining escapade amidst an ambiance exuding warmth,
            elegance, and culinary artistry.
          </p>
          <PrimaryButton value={"Know about us"} link={"/about"}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};
export default RadiantAds;