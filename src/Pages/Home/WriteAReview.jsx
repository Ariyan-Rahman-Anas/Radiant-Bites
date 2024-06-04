import { useContext, useRef } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { ThemeContext } from "../../useContext/allContext";
import useAuth from "../../Hooks/useAuth";
import { postData } from "../../Hooks/apiUtils";

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
    } catch (error) {
      console.error("Error giving review:", error);
    }
  };

  return (
    <div className="my-20 px-2">
      <SectionTitle
        heading={"We are exited to hear from you"}
        subHeading={"Your Feedback"}
      ></SectionTitle>

      {/* review writing form starts here */}
      <form
        onSubmit={handleSubmitReview}
        ref={formRef}
        className="flex flex-col gap-4 mt-6 w-full md:w-2/3  mx-auto"
      >
        <div className="">
          <div className="mb-5 flex items-center justify-between gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              defaultValue={user?.displayName}
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              defaultValue={user?.email}
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
            ></input>
          </div>

          <div className="flex items-center justify-between gap-5">
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              required
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
            ></input>
            <input
              type="number"
              name="rate"
              placeholder="Rate us 1 to 5"
              required
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
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
            darkMode ? "bg-gray-700" : "bg-white"
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
  );
};
export default WriteAReview;
