import { useContext, useRef } from "react";
import PageHeadBanner from "./../../SharedComponents/PageHeadBanner";
import reserveImg from "./../../assets/images/Reservation.png";
import toast from "react-hot-toast";
import { ThemeContext } from "../../useContext/allContext";
import SectionTitle from "../../SharedComponents/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import { postData } from "../../Hooks/apiUtils";
import Review from "../Home/Review";
import FAQs from "../../SharedComponents/FAQs";

const Reservation = () => {
  const { darkMode } = useContext(ThemeContext);
  const { user } = useAuth();
  const formRef = useRef(null);

  //tracking the user picture
  const reserverPicture = user?.photoURL ? user?.photoURL : null;

  const handleReserveFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;
    const guests = form.guests.value;
    const preferredSeating = form.preferredSeating.value;
    const occasionType = form.occasionType.value;
    const specialRequests = form.specialRequests.value;

    //creating the reservation
    try {
      const aReservation = {
        name,
        email,
        phone,
        date,
        time,
        guests,
        preferredSeating,
        occasionType,
        specialRequests,
        reserverPicture,
      };
      console.log("new reserve is: ", aReservation);
      await postData("reservations", aReservation);
      // Clear the form fields after successful submission
      form.reset();
      toast.success("Successfully Reserved!");
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };

  return (
    <div>
      <PageHeadBanner
        sectionImg={reserveImg}
        heading={"Reservation"}
        subHeading={"Would you like to try a dish?"}
      ></PageHeadBanner>
      {/* ... */}

      <div className="px-2">
        <div
          className={`
          ${darkMode ? "bg-gray-700" : "bg-white"} 
           shadow-md rounded-md p-2 py-6 md:p-8 w-full md:w-[85vw] mx-auto my-20 `}
        >
          <SectionTitle
            heading={"Reservation Form"}
            subHeading={"Fill out the form and have Fun!"}
          ></SectionTitle>

          {/* form */}
          <form
            ref={formRef}
            onSubmit={handleReserveFormSubmit}
            className="reservation-form mt-6 "
          >
            <div className="reservation-form grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user?.displayName}
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <input
                type="date"
                name="date"
                placeholder="Time"
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <input
                type="time"
                name="time"
                placeholder="Time"
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <input
                type="number"
                name="guests"
                placeholder="Number of Guest"
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              />
              <select
                required
                name="preferredSeating"
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              >
                <option value="preferredSeating">Preferred Seating</option>
                <option value="window">Window</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>
              <select
                required
                name="occasionType"
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              >
                <option value="occasionType">Occasion Type</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business Meeting">Business Meeting</option>
                <option value="casual Dining">Casual Dining</option>
                <option value="date Night">Date Night</option>
                <option value="family Gathering">Family Gathering</option>
                <option value="friends Gathering">Friends Gathering</option>
                <option value="graduation">Graduation</option>
                <option value="holiday Celebration">Holiday Celebration</option>
                <option value="romantic Dinner">Romantic Dinner</option>
                <option value="special Event">Special Event</option>
                <option value="wedding Reception">Wedding Reception</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-2">
              <textarea
                name="specialRequests"
                placeholder="Special requests..."
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              ></textarea>
            </div>
            <input
              type="submit"
              value={"Upload"}
              className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer min-w-full "
            />
          </form>
          {/* form */}
        </div>
      </div>

      {/* ... */}

      <FAQs></FAQs>
      <Review></Review>
    </div>
  );
};

export default Reservation;
