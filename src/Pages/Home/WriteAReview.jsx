import { useContext, useRef } from "react";
import { toast } from "react-hot-toast";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { ThemeContext } from "../../useContext/allContext";
import useAuth from "../../Hooks/useAuth";
import { postData } from "../../Hooks/apiUtils";
import RenderedEmptyMessage from './../../SharedComponents/RenderedEmptyMessage';

const WriteAReview = () => {
  const { darkMode } = useContext(ThemeContext);

  const { user } = useAuth();
  const userImage = user?.photoURL;

  const todayIs = new Date();
  const date = todayIs.getDate();
  const month = todayIs.getMonth() + 1;
  const year = todayIs.getFullYear();
  const reviewingDateIs = `${date}-${month}-${year}`;

  const formRef = useRef(null);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const email = form.email.value;
    const rate = form.rate.value;
    const comment = form.comment.value;

    try {
      const aReview = {
        name,
        profession,
        comment,
        userImage,
        email,
        rate,
        reviewingDateIs,
      };
      await postData("reviews", aReview);
      toast.success("Thanks for your Feedback!");
      // Clear the form fields after successful submission
      form.reset();
      // console.log(aReview)
    } catch (error) {
      console.error("Error giving review:", error);
    }
  };

  return (
    <div className="my-20"
    >
      <div>
        {user ? (
          <div
            className={`
          ${darkMode ? "bg-gray-700" : "bg-white"} 
          my20 shadow-md rounded-md p-8 w-full md:w-[85vw] mx-auto`}
          >
            <SectionTitle
              heading={"We are exited to hear from you"}
              subHeading={"Your Feedback"}
            ></SectionTitle>
            {/* review writing form starts here */}
            <form
              onSubmit={handleSubmitReview}
              ref={formRef}
              className="flex flex-col gap-4 mt-6 min-w-full border- md:w-2/3  mx-auto"
            >
              <div>
                <div className="mb-5 flex flex-col md:flex-row items-center justify-between gap-4">
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

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <input
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    required
                    className={`${
                      darkMode ? "bg-gray-600" : "bg-green-100"
                    } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                  ></input>
                  <input
                    type="number"
                    name="rate"
                    placeholder="Rate us 1 to 5"
                    required
                    className={`${
                      darkMode ? "bg-gray-600" : "bg-green-100"
                    } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                  ></input>
                </div>
              </div>
              <textarea
                name="comment"
                cols="30"
                rows="4"
                placeholder="Write your comment..."
                required
                className={`${
                  darkMode ? "bg-gray-600" : "bg-green-100"
                } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              ></textarea>
              <input
                type="submit"
                value={"Submit"}
                className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer "
              />
            </form>
            {/* review writing form ends here */}
          </div>
        ) : (
          <RenderedEmptyMessage
            heading={"Your Feedback"}
            subHeading={"We are exited to hear from you!"}
            message={
              "You can write here about your beloved Radiant Bites, but right now you are not logged in user. According to user experience, we are welcoming you to known us your valuable words!"
            }
            directionMessage={"So, let's go for logged in"}
            btnValue={"Log in"}
            btnLink={"/logIn"}
          ></RenderedEmptyMessage>
        )}
      </div>
    </div>
  );
};
export default WriteAReview;