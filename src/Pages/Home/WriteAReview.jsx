import { useContext, useRef } from "react";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { ThemeContext } from "../../useContext/allContext";
import useAuth from "../../Hooks/useAuth";

const WriteAReview = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const { user } = useAuth();
  const userImage = user?.photoURL;

  const todayIs = new Date();
  const date = todayIs.getDate();
  const month = todayIs.getMonth() + 1;
  const year = todayIs.getFullYear();
  const todayDateIs = `${date}/${month}/${year}`;

  const formRef = useRef(null);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const profession = form.profession.value;
    const comment = form.comment.value;

    try {
      const aReview = {
        name,
        profession,
        todayDateIs,
        comment,
        userImage,
      };
      console.log(aReview);
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
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
          ></input>
          <input
            type="text"
            name="profession"
            placeholder="Your Profession"
            required
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
          ></input>
        </div>
        <textarea
          name="comment"
          cols="30"
          rows="4"
          placeholder="Your comment"
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