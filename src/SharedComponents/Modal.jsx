import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../useContext/allContext";
import { PiWarningLight } from "react-icons/pi";

export const Modal = ({modalOpenValue}) => {
  const [openModal, setOpenModal] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md bg-primary px-4 py-[6px]"
      >
        {modalOpenValue}
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <Link
          onClick={(e_) => e_.stopPropagation()}
          className={`${
            darkMode
              ? "bg-gray-700 border-[.09rem] border-gray-400 "
              : "bg-white text-black "
          } absolute w-11/12 md:w-fit rounded-lg p-6 text-center drop-shadow-2xl  ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <PiWarningLight className="text-5xl md:text-7xl text-danger "></PiWarningLight>
            <h1 className="text-center text-3xl font-medium opacity-50 mt-3 ">
              You are not logged in now
            </h1>
            <p className="font-semibold opacity-80 mt-1 ">
              {`So, let's logged in for explore all of this`}
            </p>
            <div className="flex items-center gap-6 mt-4 ">
              <Link
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-danger px-6 py-2 text-sm text-danger hover:bg-danger hover:text-white font-semibold duration-500 "
              >
                Cancel
              </Link>
              <Link
                to={"/logIn"}
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-primary px-6 py-2 text-sm text-primary hover:bg-primary hover:text-white font-semibold duration-500 "
              >
                Log in
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};