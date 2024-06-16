import { useContext } from "react";
import { ThemeContext } from "../useContext/allContext";
import { Link } from "react-router-dom";
import avatar from "./../assets/images/Avatar.png";

const BlogCard = ({ blog }) => {
  const { darkMode } = useContext(ThemeContext);
  const {
    _id,
    title,
    category,
    authorName,
    authorImage,
    featuredImage,
    publicationDate,
    metaDescription,
  } = blog || {};

  return (
    <Link
      to={`/blog/blog-details/${_id}`}
      state={{ blog }}
      className={`${
        darkMode ? "bg-gray-700" : ""
      } shadow-md rounded-md min-h-[29.5rem] h[30rem] cursor-pointer relative group `}
    >
      <div className="w-full h-[14rem] ">
        <img
          src={featuredImage}
          alt="blog image"
          className="w-full h-full rounded-t-md "
        />
      </div>
      <div className="p-4">
        <p className="text-white text-sm bg-primary w-fit py-1 px-2 rounded-md ">
          {category}
        </p>
        <h1 className="text-xl font-semibold my-2  ">{title}</h1>
        <p className="text-sm">
          {metaDescription.slice(0, 100)}...
          <span className="group-hover:text-primary font-semibold duration-500 ">
            Read more
          </span>
        </p>
      </div>

      <div className="author-details absolute left-4 bottom-4 flex items-start gap-1">
        <div className="h-8 w-8 ">
          <img
            src={authorImage ? authorImage : avatar}
            alt="author image"
            className="w-full h-full rounded-full"
          />
        </div>
        <div>
          <h1 className="font-semibold">{authorName}</h1>
          <p className="text-sm">Published on: {publicationDate}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;