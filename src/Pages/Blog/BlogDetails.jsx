import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../useContext/allContext";
import DOMPurify from "dompurify";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaInstagramSquare,
} from "react-icons/fa";
import avatar from "./../../assets/images/Avatar.png";

const BlogDetails = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();
  const { blog } = location.state || {};

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const {
    title,
    category,
    authorName,
    authorImage,
    email,
    featuredImage,
    publicationDate,
    tags,
    metaTitle,
    description,
    excerpt,
    metaDescription,
    keywords,
    postStatus,
    allowComments,
  } = blog;

  // Function to add Tailwind classes to specific elements
  const addTailwindClasses = (htmlContent) => {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;

    // Example: Add classes to specific elements
    const paragraphs = div.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.classList.add("text-3xl", "mb-5", "text-sm");
    });

    const headings = div.querySelectorAll("h2, h3");
    headings.forEach((heading) => {
      heading.classList.add("text-2xl", "font-semibold", "mt-4");
    });

    const lists = div.querySelectorAll("ul, ol");
    lists.forEach((list) => {
      list.classList.add("list-disc", "list-inside", "ml-4");
    });
    return div.innerHTML;
  };

  // Sanitize and style the description HTML
  const sanitizedDescription = DOMPurify.sanitize(
    addTailwindClasses(description)
  );

  return (
    <div>
      {/* blog banner starts here  */}
      <div
        className={`${
          darkMode ? "bg-gray-700" : "bg-green-200"
        }  h-[25rem] border- border-black relative `}
      >
        <div className="w-full md:w-[85vw] mx-auto pt-16  ">
          <div className="w-full md:w-[55rem] h-full md:h-[28rem] mx-auto  ">
            <img
              src={featuredImage}
              alt="blog image"
              className="w-full h-full"
            />
          </div>
          <div className="w-full md:w-[81%] mx-auto flex items-center justify-between mt-2 ">
            <p className="text-white text-sm bg-primary w-fit py-1 px-2 rounded-md ">
              {category}
            </p>
            <p className="text-white text-sm bg-primary w-fit py-1 px-2 rounded-md ">
              {publicationDate}
            </p>
          </div>
        </div>
      </div>
      {/* blog banner ends here  */}

      <div className="min-h[50vh] pt-8 md:pt-40 w-full md:w-[85vw] mx-auto ">
        {/* blogs details starts here */}
        <div className="w-full md:w-[80%] mx-auto my-10  flex flex-col md:flex-row items-start justify-between ">
          <div className="social-share w-full md:w-[10%] shadow-m p-4 pl-0 ">
            <div className="flex flex-row md:flex-col gap-6 text-xl pt-4 ">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagramSquare></FaInstagramSquare>
              <FaTelegram></FaTelegram>
            </div>
          </div>
          <div
            className={`${
              darkMode ? "bg-gray-700" : ""
            } shadow-md rounded-md w-full md:w-[90%] p-5 `}
          >
            <h1 className="text-4xl  ">{title}</h1>
            <p className="text-sm mt-3 ">{metaDescription}</p>
            <h3 className="text-2xl mt-5 mb-3 ">{metaTitle}</h3>
            <p className="text-sm">{excerpt} </p>
            {/* <p>{description} </p> */}
            <div
              className="description-content "
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
            <p className="text-sm">
              <strong>Tags: </strong>
              {tags}
            </p>
            <p className="my-3 text-sm">
              <strong>Keywords: </strong>
              {keywords}
            </p>
          </div>
        </div>
        {/* blogs details ends here */}

        {/* author details starts here */}
        <div
          className={`${
            darkMode ? "bg-gray-700" : ""
          } shadow-md rounded-md w-full md:w-[80%] mx-auto p-5 my-10 flex flex-col md:flex-row gap-4 md:gap-0 `}
        >
          <div className="left w-full md:w-[30%]">
            <div className="flex items-center gap-3">
              <div className="w-1/4 ">
                <img
                  // src={authorImage === null ? avatar : authorImage}
                  src={avatar}
                  alt="author img"
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm">
                  Written by <br />{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-primary text-2xl "
                  >
                    {authorName}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex  gap-6 text-lg pt-4 ">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagramSquare></FaInstagramSquare>
              <FaTelegram></FaTelegram>
            </div>
          </div>
          <div className="w-full md:w-[70%] border-l px-4  ">
            <p className="text-sm">
              {`${authorName} is a passionate home cook who loves to share delicious,
              easy-to-follow recipes. His blog reflects his culinary journey,
              offering mouthwatering dishes that inspire confidence and joy in
              the kitchen. Join John as he brings the flavors of the world into
              your home, one recipe at a time.`}
            </p>
          </div>
        </div>
        {/* author details starts here */}
      </div>
    </div>
  );
};
export default BlogDetails;