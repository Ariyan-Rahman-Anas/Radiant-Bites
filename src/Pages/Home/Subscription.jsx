import { useContext, useRef } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { ThemeContext } from "../../useContext/allContext";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { postData } from "../../Hooks/apiUtils";

const Subscription = () => {
  const { user } = useAuth();
    const { darkMode } = useContext(ThemeContext);
    
    const formRef = useRef(null);

    const handleSubmitSubscribe = async (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const profession = form.profession.value;
      const email = form.email.value;
      const rate = form.rate.value;
      const comment = form.comment.value;

      try {
        const aSubscription = {
          name,
          profession,
          comment,
          email,
          rate,
        };
        await postData("subscribers", aSubscription);
        toast.success("Thanks for your Feedback!");
        // Clear the form fields after successful submission
        form.reset();
      } catch (error) {
        console.error("Error with subscribing:", error);
      }
    };

    return (
      <div className="my-24 m-2 ">
        <div
          className={`
          ${darkMode ? "bg-gray-700" : "bg-white"} 
          my20 shadow-md rounded-md p-8 w-full md:w-[85vw] mx-auto`}
        >
          <SectionTitle
            heading={"Subscription"}
            subHeading={"Get in touch with Subscribe"}
          ></SectionTitle>

          <div>
            <form
              onSubmit={handleSubmitSubscribe}
              ref={formRef}
              className="flex flex-col gap-4 mt-6 min-w-full border- md:w-2/3  mx-auto"
            >
              <div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    defaultValue={user?.displayName}
                    className={`${
                      darkMode ? "bg-gray-600" : "bg-green-100"
                    } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                  ></input>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    defaultValue={user?.email}
                    className={`${
                      darkMode ? "bg-gray-600" : "bg-green-100"
                    } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                  ></input>
                </div>
              </div>
              <textarea
                name="comment"
                cols="30"
                rows="2"
                placeholder="Write what you expect from us..."
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              ></textarea>
              <input
                type="submit"
                value={"Subscribe"}
                className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer "
              />
            </form>
          </div>
        </div>
      </div>
    );
};
export default Subscription;