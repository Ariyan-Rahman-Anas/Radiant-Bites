import { useContext, useState } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import PrimaryButton from "./../../SharedComponents/PrimaryButton";
import { ThemeContext } from "../../useContext/allContext";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import fastFood1 from "./../../assets/slider/1.png";
import fastFood2 from "./../../assets/slider/2.png";
import steak1 from "./../../assets/slider/3.png";
import steak2 from "./../../assets/slider/4.png";
import steak3 from "./../../assets/slider/5.png";
import steak4 from "./../../assets/slider/6.png";
import seaFood1 from "./../../assets/slider/7.png";
import seaFood2 from "./../../assets/slider/8.png";
import seaFood3 from "./../../assets/slider/9.png";
import seaFood4 from "./../../assets/slider/10.png";
import dessert1 from "./../../assets/slider/11.png";
import dessert2 from "./../../assets/slider/12.png";
import dessert3 from "./../../assets/slider/13.png";
import dessert4 from "./../../assets/slider/14.png";
import salad1 from "./../../assets/slider/15.png";
import salad2 from "./../../assets/slider/16.png";
import salad3 from "./../../assets/slider/17.png";
import salad4 from "./../../assets/slider/18.png";
import salad5 from "./../../assets/slider/19.png";
import salad6 from "./../../assets/slider/20.png";
import salad7 from "./../../assets/slider/21.png";

export const OnlineOrder = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const { darkMode } = useContext(ThemeContext);

  const fastFoods = [fastFood1, fastFood2];
  const steaks = [steak1, steak2, steak3, steak4];
  const seaFoods = [seaFood1, seaFood2, seaFood3, seaFood4];
  const desserts = [dessert1, dessert2, dessert3, dessert4];
  const salads = [salad1, salad2, salad3, salad4, salad5, salad6, salad7];

  const sliders = [
    {
      img: fastFoods[Math.floor(Math.random() * fastFoods.length)],
      name: "Fast Foods",
      link: "/menu/fastFood",
      details:
        "Delicious pizza varieties freshly baked to perfection, topped with premium ingredients.",
    },
    {
      img: steaks[Math.floor(Math.random() * steaks.length)],
      name: "Steak",
      link: "/menu/beef",
      details:
        "Juicy kebabs grilled to perfection, marinated with our special blend of spices for an explosion of flavor.",
    },
    {
      img: salads[Math.floor(Math.random() * salads.length)],
      name: "Salad",
      link: "/menu/salad",
      details:
        "Fresh and vibrant salads made from locally sourced ingredients, bursting with nutrition and flavor.",
    },
    {
      img: desserts[Math.floor(Math.random() * desserts.length)],
      name: "Desserts",
      link: "/menu/dessert",
      details:
        "Succulent steaks cooked to your preference, tender and juicy, served with mouthwatering sides.",
    },
    {
      img: seaFoods[Math.floor(Math.random() * seaFoods.length)],
      name: "Sea Food",
      link: "/menu/seaFood",
      details:
        "Exquisite seafood dishes crafted with the freshest catch, prepared to tantalize your taste buds.",
    },
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
        darkMode ? "bg-gray-700 " : ""
      } my-24 w-full md:w-[85vw] mx-auto py-8 px-2 rounded-md shadow-md relative`}
    >
      <SectionTitle
        heading={"From 11:00 AM to 10:00 PM"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>

      {/* previous controller */}
      <div
        onClick={prevSlider}
        className="child left-controller absolute left-2 top-1/2 rounded-full p-1 hover:text-gray-200 hover:bg-primary hover:border-transparent duration-500 cursor-pointer"
      >
        <SlArrowLeft className="text-2xl" />
      </div>

      {/* next controller */}
      <div
        onClick={nextSlider}
        className="child right-controller absolute right-2 top-1/2 rounded-full p-1 hover:text-gray-200 hover:bg-primary hover:border-transparent duration-500 cursor-pointer"
      >
        <SlArrowRight className="text-2xl" />
      </div>
      {/*controller ends */}

      {/* sliders starts here  */}
      <div className="parent-div w-[80%] md:w-[90%] mx-auto overflow-hidden">
        <div
          className="ease-linear duration-300 flex items-center"
          style={{
            transform: `translateX(-${
              window.innerWidth < 768 ? currentSlider * 100 : currentSlider * 40
            }%)`,
          }}
        >
          {sliders.map((slide, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx ? "md:pb-6 " : "scale-95 opacity-40 "
              } md:h-[350px] min-w-[100%] md:min-w-[50%] w-full duration-200 text-center mt-8 pb-2`}
              style={{ perspective: "150px" }}
            >
              <img
                src={slide.img}
                className="w-full h-3/5 bg-gray-900 rounded-lg duration-300"
                alt={slide.tags}
                style={{
                  transform: `${
                    currentSlider - 1 === inx
                      ? "rotateY(4deg)"
                      : currentSlider + 1 === inx
                      ? "rotateY(-4deg)"
                      : ""
                  }`,
                  transformStyle: "preserve-3d",
                }}
              />
              <h1 className="text-2xl font-semibold">{slide.name} </h1>
              <p
                className={`${
                  currentSlider === inx ? "md: my-2" : "md:my-10"
                } my-2 text-sm md:text-base duration-500 `}
              >
                {slide.details}
              </p>
              <PrimaryButton
                value={"Explore more"}
                link={slide.link}
              ></PrimaryButton>
            </div>
          ))}
        </div>
      </div>
      {/* sliders ends here  */}
    </div>
  );
};