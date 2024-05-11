import { Link, useNavigate } from "react-router-dom";
import loginMedia from "./../../assets/images/loginBG.svg";
import Logo from "./../../assets/Logos/1.svg";
import Logo2 from "./../../assets/Logos/2.svg";
import {
  FaGoogle,
  FaLinkedin,
  FaFacebookF,
  FaRegEyeSlash,
} from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { ThemeContext } from "../../useContext/allContext";
import usePageTitle from "../../Hooks/usePageTitle";

const Registration = () => {
  //updating the page title
  usePageTitle("Registration - Menu");

  const [registerError, setRegisterError] = useState("");
  const [showEye, setShowEye] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);

  //creatingUser
  const { createUser, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        navigate("/");
        toast.success("Registration Successful!");
        setRegisterError("");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
        toast.success("Registration Successful!");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handlePassInputChange = (e) => {
    const value = e.target.value
    if (value !== '') {
      setShowEye(true)
    } else {
      setShowEye(false)
    }
  }

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
        <div className=" flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="left flex-1 ">
            <img src={loginMedia} alt="" />
          </div>
          <div className="right w-full flex-1 shadow-md rounded-lg p-5">
            <h1 className="text-3xl font-semibold mb-6 text-center underline ">
              Registration
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              ></input>
              {errors.name && (
                <div className="flex items-center justify-start gap-1 text-danger">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Name required</span>
                </div>
              )}
              <input
                type="number"
                name="number"
                placeholder="Number"
                {...register("number", { required: true })}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              ></input>
              {errors.number && (
                <div className="flex items-center justify-start gap-1 text-danger">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Number required</span>
                </div>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className={`${
                  darkMode ? "bg-gray-700" : "bg-white"
                } p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
              ></input>
              {errors.email && (
                <div className="flex items-center justify-start gap-1 text-danger">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Email required</span>
                </div>
              )}
              <div className="relative">
                <input
                  onKeyUp={handlePassInputChange}
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className={`${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } w-full p-2 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-primary `}
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
                {registerError}{" "}
              </p>
              <input
                type="submit"
                value={"Sign up"}
                className="text-white bg-primary p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer "
              />
            </form>
            <div className="flex items-center justify-between mt-6 ">
              <hr className="border-[.09rem] border-primary rounded-full w-[35%] " />
              <p>or Sign up with</p>
              <hr className="border-[.09rem] border-primary rounded-full w-[35%] " />
            </div>
            <div className="socials flex items-center justify-center text-primary gap-6 mt-3 ">
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaFacebookF className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaFacebookF>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaGoogle
                  onClick={handleGoogleSignUp}
                  className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "
                ></FaGoogle>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaLinkedin className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaLinkedin>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-7 font-normal ">
              <p>Already have an account?</p>
              <Link
                to={"/logIn"}
                className={`${
                  darkMode ? "hover:text-gray-300" : "hover:text-black"
                } text-primary font-semibold hover:underline duration-500`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;