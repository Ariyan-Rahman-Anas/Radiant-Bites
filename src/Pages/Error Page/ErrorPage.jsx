import { Link } from "react-router-dom";
import errorBG from "./../../assets/images/errorPage.png";
import usePageTitle from './../../Hooks/usePageTitle';
const ErrorPage = () => {

  //updating the page title
  usePageTitle("404 Error-Page Not Found");

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${errorBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[100vh] flex items-end justify-center pb-5 "
    >
      <Link
        to={"/"}
        className="text-white bg-primary px-4 py-2 w-fit mx-auto rounded-md hover:text-primary hover:bg-white border-[.09rem] border-primary duration-500 "
      >
        Go Back to the Home Page
      </Link>
    </div>
  );
};
export default ErrorPage;