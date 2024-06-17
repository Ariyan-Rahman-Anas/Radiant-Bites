import { useEffect, useState } from "react";

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
import beef1 from "./../../assets/slider/22.png";
import beef2 from "./../../assets/slider/23.png";
import beef3 from "./../../assets/slider/24.png";
import beef4 from "./../../assets/slider/25.png";
import beef5 from "./../../assets/slider/26.png";
import beef6 from "./../../assets/slider/27.png";
import beef7 from "./../../assets/slider/28.png";
import beef8 from "./../../assets/slider/29.png";
import beef9 from "./../../assets/slider/30.png";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const fastFoods = [fastFood1, fastFood2];
  const steaks = [steak1, steak2, steak3, steak4];
  const seaFoods = [seaFood1, seaFood2, seaFood3, seaFood4];
  const desserts = [dessert1, dessert2, dessert3, dessert4];
  const salads = [salad1, salad2, salad3, salad4, salad5, salad6, salad7];
  const beefs = [beef1, beef2, beef3, beef4, beef5, beef6, beef7, beef8, beef9];

  const sliders = [
    {
      img: fastFoods[Math.floor(Math.random() * fastFoods.length)],
      title: "Quick Bites Galore",
      des: "Explore Our Range of Lip-Smacking Fast Food Options, Perfect for When You're on the Go or Craving Something Deliciously Familiar.",
    },
    {
      img: steaks[Math.floor(Math.random() * steaks.length)],
      title: "Savor the Excellence",
      des: "Delight Your Senses with Our Handpicked Selection of Premium Steaks, Expertly Grilled to Juicy Perfection and Bursting with Flavor.",
    },
    {
      img: seaFoods[Math.floor(Math.random() * seaFoods.length)],
      title: "From the Depths of Flavor",
      des: "Dive into a World of Oceanic Delights with Our Freshest Seafood Offerings, Prepared with Precision to Deliver a Taste of the Sea.",
    },
    {
      img: desserts[Math.floor(Math.random() * desserts.length)],
      title: "Decadent Desserts",
      des: "Indulge Your Sweet Tooth with Our Irresistible Selection of Decadent Desserts, Handcrafted with Love and Care.",
    },
    {
      img: salads[Math.floor(Math.random() * salads.length)],
      title: "Fresh Salad Selection",
      des: "Elevate Your Palate with Our Artfully Crafted Salad Creations, Packed with Nutrient-Rich Ingredients and Vibrant Flavors to Nourish and Delight.",
    },
    {
      img: beefs[Math.floor(Math.random() * beefs.length)],
      title: "Prime Cuts, Prime Satisfaction",
      des: "Indulge in the Ultimate Beef Experience with Our Hand-Selected Cuts, Carefully Prepared to Ensure Each Bite Is Bursting with Unmatched Flavor and Quality.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider((prev) =>
          prev === sliders.length - 1 ? 0 : prev + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [sliders.length]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
        className="w-full min-h-[88vh] md:min-h-0 md:h-[90vh] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/60 before:inset-0 transform duration-1000 ease-linear"
      >
        {/* text container here */}
        <div className="absolute bottom-2 lg:left-[20%] lg:right-[20%] drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl md:text-5xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base">{sliders[currentSlider].des}</p>
        </div>
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 border-[.09rem] ${
              currentSlider === inx
                ? "border-[.09rem] border-primary duration-1000 "
                : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;