import { useContext, useState } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { Link } from "react-router-dom";
import PrimaryButton from "./../../SharedComponents/PrimaryButton";
import { ThemeContext } from "../../useContext/allContext";

export const OnlineOrder = () => {
  const [currentSlider, setCurrentSlider] = useState(0);      
  const { darkMode } = useContext(ThemeContext);

  // const sliders = [
  //   {
  //     img: "https://source.unsplash.com/900x900/?pizza",
  //     name: "Pizza",
  //     details:
  //       "Delicious pizza varieties freshly baked to perfection, topped with premium ingredients.",
  //   },
  //   {
  //     img: "https://source.unsplash.com/900x900/?kebab",
  //     name: "Kebab",
  //     details:
  //       "Juicy kebabs grilled to perfection, marinated with our special blend of spices for an explosion of flavor.",
  //   },
  //   {
  //     img: "https://source.unsplash.com/900x900/?salad",
  //     name: "Salad",
  //     details:
  //       "Fresh and vibrant salads made from locally sourced ingredients, bursting with nutrition and flavor.",
  //   },
  //   {
  //     img: "https://source.unsplash.com/900x900/?steak",
  //     name: "Steak",
  //     details:
  //       "Succulent steaks cooked to your preference, tender and juicy, served with mouthwatering sides.",
  //   },
  //   {
  //     img: "https://source.unsplash.com/900x900/?seafood",
  //     name: "Sea Food",
  //     details:
  //       "Exquisite seafood dishes crafted with the freshest catch, prepared to tantalize your taste buds.",
  //   },
  // ];

  const sliders = [
    { img: "https://source.unsplash.com/600x600/?bedroom" },
    { img: "https://source.unsplash.com/600x600/?room" },
    { img: "https://source.unsplash.com/600x600/?livingrooms" },
    { img: "https://source.unsplash.com/600x600/?livingroom" },
    { img: "https://source.unsplash.com/600x600/?bedrooms" },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-green-100 shadow-md "
      } my-24 pt-12 pb-8 px-2 `}
    >
      <SectionTitle
        heading={"From 11:00 AM to 10:00 PM"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>

      {/* slider starts from here */}
      <div className="max-w-6x mx-auto h-[45vh] md:h-full flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center bg-black rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#fff"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center bg-black rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#fFF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* slider container */}
        <div
          className="h-[540px] md:h-[600px] w-5/6 md:w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
          style={{ transform: `translateX(-${currentSlider * 50}%)` }}
        >
          {/* sliders */}
          {sliders.map((slide, index) => (
            <Link
              to={"/go"}
              key={index}
              className={`${
                currentSlider === index
                  ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]"
                  : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"
              } min-w-[50%] text-center relative duration-200`}
              style={{ perspective: "180px" }}
            >
              <img
                src={slide.img}
                className="w-full h-2/3 mx-auto bg-gray-900 rounded-lg duration-1000"
                alt={slide.tags}
                style={{
                  transform: `${
                    currentSlider - 1 === index
                      ? "rotateY(4deg)"
                      : currentSlider + 1 === index
                      ? "rotateY(-4deg)"
                      : ""
                  }`,
                  transformStyle: "preserve-3d",
                }}
              />
              <h1
                className={`${
                  currentSlider === index
                    ? "underline font-light text-3xl "
                    : ""
                } md:mt-16 `}
              >
                {slide.name}
              </h1>
              <p className="text-sm mt-2 mb-3 hidden md:block ">
                {slide.details}
              </p>
              {currentSlider === index ? (
                <>
                  <PrimaryButton
                    value={"Explore more"}
                    link={"/"}
                  ></PrimaryButton>
                </>
              ) : (
                <>Explore more</>
              )}
            </Link>
          ))}
        </div>
      </div>
      {/* slider ends here */}
    </div>
  );
};