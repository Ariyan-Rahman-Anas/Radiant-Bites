import PrimaryButton from "./PrimaryButton";
import SectionTitle from "./SectionTitle";

const RenderedEmptyMessage = ({heading, subHeading, message, directionMessage, btnValue, btnLink}) => {
    return (
      <div className="text-center bg-white p-8 shadow-md rounded-md ">
        <SectionTitle
                //   heading={"Exciting News!"}
                heading={heading}
                subHeading={subHeading}
        //   subHeading={"You can add your signature dish to our Menu!"}
        ></SectionTitle>
        <p className="mt-4 w-full md:w-3/4 mx-auto text-gray-500  "> {message}
          {/* Attention Food Connoisseurs! Share your culinary creations and
          influence our menu with your culinary artistry. Let your signature
          dish shine and delight taste buds everywhere! */}
        </p>
        {/* <p className="font-semibold my-2 ">So, let's go for logged in</p> */}
        <p className="font-semibold my-2 ">{directionMessage}</p>
        <PrimaryButton value={btnValue} link={btnLink}></PrimaryButton>
      </div>
    );
};
export default RenderedEmptyMessage;