import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  FaGoogle,
  FaLinkedin,
  FaFacebookF,
  FaRegEyeSlash,
} from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";
import { useContext, useState } from "react";
import loginMedia from "./../../assets/images/loginBG.svg";
import Logo from "./../../assets/Logos/1.svg";
import Logo2 from "./../../assets/Logos/2.svg";
import useAuth from "../../Hooks/useAuth";
import { ThemeContext } from "../../useContext/allContext";
import usePageTitle from './../../Hooks/usePageTitle';
import { postData } from './../../Hooks/apiUtils';


const LogIn = () => {
  //updating the page title
  usePageTitle("Login");

  const { signInUser, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState("");
  const [showEye, setShowEye] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submitting data for log in with existing user
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Log in Successful!");
        setLogInError("");
      })
      .catch(() => {
        setLogInError("Invalid email or password!");
      });
  };

  //handling google log in
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(async(result) => {
        const newUserOrNot = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        await postData("allUser", newUserOrNot);
        navigate(location?.state ? location?.state : "/");
        toast.success("Login Successfully!");
      })
      .catch((error) => {
        setLogInError(error.message);
      });
  };

  //managing password showing icon in password input field
  const handlePassInputChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
  };

  return (
    <div className="p-2">
      <div className="lg:w-[85vw] mx-auto  ">
        <div className="nav-start w-[7rem] pt-4 ">
          <Link to={"/"}>
            <img
              src={`${darkMode ? Logo2 : Logo}`}
              alt="The Website Logo"
              className="w-full"
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-6">
          <div className="left flex-1 ">
            <img src={loginMedia} alt="" />
          </div>
          <div className="right w-full flex-1 shadow-md rounded-lg p-5">
            <h1 className="text-3xl text-[#ff381] font-semibold mb-6 text-center underline ">
              Login
            </h1>

            {/* log in form is starts from here */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                {...register("email", { required: true })}
              ></input>
              {errors.email && (
                <div className="flex items-center justify-start gap-1 text-danger">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Email required</span>
                </div>
              )}
              <div className="relative ">
                <input
                  onKeyUp={handlePassInputChange}
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={`${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
                  {...register("password", { required: true })}
                ></input>
                {showEye && (
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-1/3 right-2 cursor-pointer "
                  >
                    {showPass ? (
                      <FaRegEyeSlash></FaRegEyeSlash>
                    ) : (
                      <IoEyeOutline></IoEyeOutline>
                    )}
                  </div>
                )}
              </div>

              {errors.password && (
                <div className="flex items-center justify-start gap-1 text-danger">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Password required</span>
                </div>
              )}
              <p className="text-[#f82457] text-sm text-center">
                {logInError}{" "}
              </p>
              <input
                type="submit"
                value={"Sign in"}
                className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer "
              />
            </form>
            {/* log in form is ends here */}

            <div className="flex items-center justify-between mt-6 ">
              <hr className="border-[.09rem] border-primary rounded-full w-[35%] " />
              <p>or Sign in with</p>
              <hr className="border-[.09rem] border-primary rounded-full w-[35%] " />
            </div>
            <div className="socials flex items-center justify-center text-primary gap-6 mt-3 ">
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaFacebookF className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaFacebookF>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaGoogle
                  onClick={handleGoogleLogIn}
                  className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "
                ></FaGoogle>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaLinkedin className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaLinkedin>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-7 font-normal ">
              <p>Don't have an account?</p>
              <Link
                to={"/registration"}
                className={`${
                  darkMode ? "hover:text-gray-300" : "hover:text-black"
                } text-primary font-semibold hover:underline duration-500`}
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;