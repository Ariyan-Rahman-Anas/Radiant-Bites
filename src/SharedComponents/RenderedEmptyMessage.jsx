import { useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import SectionTitle from "./SectionTitle";
import { ThemeContext } from "../useContext/allContext";

const RenderedEmptyMessage = ({width, heading, subHeading, message, directionMessage, btnValue, btnLink }) => {
  
  const {darkMode} = useContext(ThemeContext)

    return (
      <div
        className={`${
          darkMode ? "bg-gray-700" : "bg-white"
        } text-center p-8 shadow-md rounded-md w-full md:w-[${width}] mx-auto  `}
      >
        <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
        <p className={`text-gray-500 mt-4 w-full md:w-3/4 mx-auto `}>
          {message}
        </p>
        <p className="font-semibold my-2 ">{directionMessage}</p>
        <PrimaryButton value={btnValue} link={btnLink}></PrimaryButton>
      </div>
    );
};
export default RenderedEmptyMessage;