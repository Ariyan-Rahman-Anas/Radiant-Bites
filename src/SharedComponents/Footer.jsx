import logo2 from "./../assets/Logos/2.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="text-center text-sm px-20 pt-10 pb-2 bg-black text-gray-300">
      <div className="w-[12rem] mx-auto mb-5 border-b-[.09rem] rounded-md pb-1 ">
        <img src={logo2} alt="Radiant Bites's Logo" className="w-full" />
      </div>
      <div className=" pb-6 flex flex-col md:flex-row items-start justify-between">
        <div className="left flex items-center justify-center">
          <div className="flex flex-col gap-1.5 ">
            <h1 className="mb-3 border-b-[.09rem] rounded-md w-fit mx-auto text-3xl font-light uppercase ">
              Contact us
            </h1>
            <p>Nasirabad, Khulshi-4225</p>
            <p>Chattogram, Bangladesh</p>
            <p>
              <strong>Call: </strong>+88 01234-567899
            </p>
            <p>
              <strong>Email: </strong>RadiantBites@gmail.com
            </p>
          </div>
        </div>
        <div className="right flex items-center justify-center">
          <div className="flex flex-col gap-1.5">
            <h1 className="mb-3 border-b-[.09rem] rounded-md w-fit mx-auto text-3xl font-light uppercase ">
              Follow us
            </h1>
            <p>Join us on social media</p>
            <div className="socials flex items-center justify-center gap-6 mt-3 text-2xl ">
              <Link>
                <FaFacebookF></FaFacebookF>{" "}
              </Link>
              <Link>
                <FaInstagram></FaInstagram>{" "}
              </Link>
              <Link>
                <FaTwitter></FaTwitter>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p>
        Copy Right-{currentYear} || All rights reserved by Radiant Bites ||
        Developed by{" "}
        <a
          href="https://ariyanrahmananas.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ariyan Rahman Anas
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;