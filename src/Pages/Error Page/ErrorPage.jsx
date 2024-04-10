import { Link } from "react-router-dom";
import errorBG from "./../../assets/images/404.png";
const ErrorPage = () => {
  return (
    // <div style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${errorBG})`, backgroundRepeat: "no-repeat", backgroundPosition:"center", backgroundSize:"cover"}} className="h-[100vh]" >

    // </div>
    <div className="h-[100vh] text-center flex flex-col gap-5 ">
      <div className="h-[88vh] py-8 px-2 md:py-2 ">
        <img src={errorBG} alt="404 error picture" className="w-full h-full mx-auto " />
      </div>
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