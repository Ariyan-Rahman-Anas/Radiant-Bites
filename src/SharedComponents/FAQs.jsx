import { useContext, useState } from "react";
import { ThemeContext } from "../useContext/allContext";
import SectionTitle from "./SectionTitle";

const FAQs = () => {
    const [isOpen, setIsOpen] = useState(null);
  const { darkMode } = useContext(ThemeContext);


    const dataArr = [
      {
        title: "How can I make a reservation",
        description: `You can make a reservation through our website's reservation page. Simply fill out the reservation form with your details and preferred date and time.`,
      },
      {
        title: `Do I need to make a reservation in advance?`,
        description: `We recommend making a reservation in advance, especially for weekends and special occasions, to ensure you get a table at your preferred time.`,
      },
      {
        title: "Can I modify or cancel my reservation?",
        description:
          "Yes, you can modify or cancel your reservation by contacting us directly at least 24 hours in advance.",
      },
      {
        title: "Is there a dress code?",
        description:
          "We encourage smart casual attire to maintain the ambiance of our restaurant.",
      },
      {
        title: "Do you offer vegetarian or vegan options?",
        description:
          "Yes, we offer a variety of vegetarian and vegan dishes. Please check our menu for specific options.",
      },
      {
        title: "Are there any gluten-free options available?",
        description:
          "Yes, we have several gluten-free options on our menu. Please inform your server of any dietary restrictions.",
      },
      {
        title: " Can I customize my order?",
        description:
          "We are happy to accommodate special requests to the best of our ability. Please inform your server of any specific dietary needs or preferences.",
      },
      {
        title: "Do you offer any special deals or promotions?",
        description:
          "Yes, we regularly have special deals and promotions. Please check our Special Offers section on the reservation page or subscribe to our newsletter for updates.",
      },
      {
        title: "Can I book the restaurant for a private event?",
        description:
          "Yes, Radiant Bites is available for private events. Please contact us directly for more information on bookings and availability.",
      },
      {
        title: "What are your opening hours?",
        description:
          " Our opening hours are Monday to Friday from 12:00 PM to 10:00 PM, and Saturday to Sunday from 10:00 AM to 11:00 PM.",
      },
      {
        title: " Where is Radiant Bites located?",
        description:
          "We are located at Nasirabad, Khulshi-4225, Chattogram, Bangladesh. Please check the location map on our reservation page for directions.",
      },
      {
        title: "Do you offer delivery or takeout services?",
        description:
          "Yes, we offer both delivery and takeout services. You can place your order through our website or by calling us directly.",
      },
      {
        title: "How can I contact Radiant Bites?",
        description:
          "You can contact us by phone at +88 01610-195968 or email at Contact@radiantbites.com. We are also available on social media platforms.",
      },
      {
        title: "Do you have parking facilities?",
        description:
          "Yes, we have ample parking space available for our guests.",
      },
    ];
    const toggle = (idx) => {
      setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };


    return (
      <div className="px-2">
        <div
          className={`${
            darkMode ? "bg-gray-700" : ""
          }  shadow-md rounded-md md:p-6 w-full md:w-[85vw] mx-auto my-20  `}
        >
          <div className="pt-6 md:pt-0 ">
            <SectionTitle
              heading={"FAQ"}
              subHeading={"FAQ-Get your answer!"}
            ></SectionTitle>
          </div>
          <div className="mt-8">
            {dataArr.map((PerAccordion, idx) => (
              <div
                key={idx}
                //   className="border-b border-gray-500/50 py-3"
                className={`${
                  darkMode ? "border-gray-500" : "border-primary"
                } rounded-md border- shadow-md p-4 border2 `}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex h-full w-full justify-between text-start font-medium outline-none"
                >
                  <span>{PerAccordion.title}</span>
                  <span className="rounded-full p-2">
                    <svg
                      className="ml-8 size-3 shrink-0 "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5"
                        fill={darkMode ? "gray" : "green"}
                        width="12"
                        height="2"
                        rx="1"
                        className={`origin-center transform transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="5"
                        fill={darkMode ? "gray" : "green"}
                        width="12"
                        height="2"
                        rx="1"
                        className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </span>
                </button>
                <div
                  onClick={() => toggle(idx)}
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
                    isOpen === idx
                      ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pr-4 text-sm">
                    {PerAccordion.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
export default FAQs;