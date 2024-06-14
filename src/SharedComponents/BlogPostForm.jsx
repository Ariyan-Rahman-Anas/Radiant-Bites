import { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ThemeContext } from "../useContext/allContext";
import useAuth from "../Hooks/useAuth";
import SectionTitle from "./SectionTitle";
import { toast } from "react-hot-toast";
import { postDataWithFile } from './../Hooks/apiUtils';

const BlogPostForm = () => {
  const [allowComments, setAllowComments] = useState(true);
  const [description, setDescription] = useState("");
  const { user } = useAuth();
  const { darkMode } = useContext(ThemeContext);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleFileChange = (e) => {
    setFeaturedImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("category", e.target.category.value);
    formData.append("authorName", e.target.authorName.value);
    formData.append("email", e.target.email.value);
    formData.append("featuredImage", e.target.featuredImage.files[0]);
    formData.append("publicationDate", e.target.publicationDate.value);
    formData.append("tags", e.target.tags.value);
    formData.append("metaTitle", e.target.metaTitle.value);
    formData.append("description", description);
    formData.append("excerpt", e.target.excerpt.value);
    formData.append("metaDescription", e.target.metaDescription.value);
    formData.append("keywords", e.target.keywords.value);
    formData.append("postStatus", e.target.postStatus.value);
    formData.append("allowComments", allowComments);

    const hasFile = !!e.target.featuredImage.files[0]; // Check for file presence
    try {
      const result = await postDataWithFile("blogs", formData, hasFile);
      e.target.reset(); // Reset the form
      setDescription(""); // Clear the description
      toast.success("Blog posted successfully!");
      console.log("Blog posted successfully:", result);
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="container w-full md:w-[85vw] mx-auto">
      <div
        className={`${
          darkMode ? "bg-gray-700" : "bg-white"
        } shadow-md rounded-md p-2 py-6 md:p-8 w-full md:w-[85vw] mx-auto my-20`}
      >
        <SectionTitle
          heading={"Blog Writing Form"}
          subHeading={"Share your words with Community!"}
        />

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
            <select
              name="category"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            >
              <option value="">Select a category</option>
              <option value="recipes">Recipes</option>
              <option value="nutrition-tips">Nutrition Tips</option>
              <option value="health-stories">Health Stories</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="authorName"
              defaultValue={user?.displayName}
              required
              placeholder="Author's Name"
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="file"
              name="featuredImage"
              onChange={handleFileChange}
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
            <input
              type="date"
              name="publicationDate"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="tags"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
              placeholder="Separate tags with commas"
            />
            <input
              type="text"
              name="metaTitle"
              placeholder="Meta Title"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
          </div>

          <div>
            <ReactQuill
              value={description}
              onChange={setDescription}
              placeholder="Description"
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary placeholder-teal-500`}
            />
          </div>

          <textarea
            name="excerpt"
            placeholder="Excerpt"
            required
            className={`${
              darkMode ? "bg-gray-600" : "bg-green-100"
            } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
          />

          <div>
            <textarea
              name="metaDescription"
              placeholder="Meta Description"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="keywords"
              required
              placeholder="Separate keywords with commas"
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            />
            <select
              name="postStatus"
              required
              className={`${
                darkMode ? "bg-gray-600" : "bg-green-100"
              } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary`}
            >
              <option value="">Post as</option>
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
              <option value="review">Submit for Review</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="allowComments"
              checked={allowComments}
              onChange={(e) => setAllowComments(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="allowComments" className="text-sm font-medium">
              Allow Comments
            </label>
          </div>

          <input
            type="submit"
            value={"Post Blog"}
            className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer min-w-full"
          />
        </form>
      </div>
    </div>
  );
};
export default BlogPostForm;