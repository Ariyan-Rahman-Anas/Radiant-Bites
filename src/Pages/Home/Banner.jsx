import { useEffect, useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://source.unsplash.com/1200x540/?fastFoods",
      title: "Quick Bites Galore",
      des: "Explore Our Range of Lip-Smacking Fast Food Options, Perfect for When You're on the Go or Craving Something Deliciously Familiar.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?steak",
      title: "Savor the Excellence",
      des: "Delight Your Senses with Our Handpicked Selection of Premium Steaks, Expertly Grilled to Juicy Perfection and Bursting with Flavor.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?seafood",
      title: "From the Depths of Flavor",
      des: "Dive into a World of Oceanic Delights with Our Freshest Seafood Offerings, Prepared with Precision to Deliver a Taste of the Sea.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?desserts",
      title: "Decadent Desserts",
      des: "Indulge Your Sweet Tooth with Our Irresistible Selection of Decadent Desserts, Handcrafted with Love and Care.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?salad",
      title: "Fresh Salad Selection",
      des: "Elevate Your Palate with Our Artfully Crafted Salad Creations, Packed with Nutrient-Rich Ingredients and Vibrant Flavors to Nourish and Delight.",
    },
    {
      img: "https://source.unsplash.com/1200x540/?beef",
      title: "Prime Cuts, Prime Satisfaction",
      des: "Indulge in the Ultimate Beef Experience with Our Hand-Selected Cuts, Carefully Prepared to Ensure Each Bite Is Bursting with Unmatched Flavor and Quality.",
    },
  ];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
        className="w-full min-h-[85vh] md:min-h-0 md:h-[84vh] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/60 before:inset-0 transform duration-1000 ease-linear"

        // className="w-full h-80 sm:h-96 md:h-[84vh] fle flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute transform duration-1000 ease-linear"
        // style={{
        //   backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url(${sliders[currentSlider].img})`,
        // }}
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
