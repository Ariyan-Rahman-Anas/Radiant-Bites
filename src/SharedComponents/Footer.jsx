import { useContext } from "react";
import logo2 from "./../assets/Logos/2.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ThemeContext } from "../useContext/allContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  return (
    <div className="text-center text-sm md:px-20 pt-10 pb-2 bg-black px-2">
      <div className="mt-8 w-[10rem] mx-auto mb-5 border-b-[.09rem] rounded-md pb-1 ">
        <img src={logo2} alt="Radiant Bites's Logo" className="w-full" />
      </div>
      <div className="mt-10 mb-6 flex flex-col md:flex-row items-start justify-between bg-white rounded-md ">
        <div className="info-grant flex-1">
          <div
            className={`${darkMode ? "" : "text-gray-400"} info-parent bg-gray-700 h-[25rem] rounded-tl-md md:rounded-l-md rounded-r-md md:rounded-tr-none rounded-br-[5rem] flex md:items-center justify-between`}
          >
            <div className="left flex md:items-center justify-center p-5">
              <div className="flex flex-col items-start gap-1.5 ">
                <h1 className="mb-3 border-b-[.09rem] text-3xl font-light uppercase ">
                  Contact us
                </h1>
                <p>
                  <strong>Call: </strong>+88 01234-567899
                </p>
                <p>
                  <strong>Email: </strong>Contact@radiantbites.com
                </p>
                <p>Nasirabad, Khulshi-4225</p>
                <p>Chattogram, Bangladesh</p>
              </div>
            </div>
            <div className="right flex justify-center p-5 ">
              <div className="flex flex-col gap-1.5">
                <h1 className="mb-3 border-b-[.09rem] rounded-md w-fit mx-auto text-3xl font-light uppercase ">
                  Follow us
                </h1>
                <p>Join us on social media</p>
                <div className="socials flex justify-start gap-6 mt-3 text-2xl ">
                  <Link>
                    <FaFacebookF></FaFacebookF>
                  </Link>
                  <Link>
                    <FaInstagram></FaInstagram>
                  </Link>
                  <Link>
                    <FaTwitter></FaTwitter>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-parent w-full flex-1 bg-gray-700 rounded-br ">
          <div className="map">
            <iframe
              className="w-full rounded-tl-[5rem] rounded-bl-md md:rounded-bl-none rounded-br-md md:rounded-r-md "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.199512164692!2d91.8044697787996!3d22.361184006739272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f2cb4ce22d%3A0x7fc7dd4029e3698b!2z4KaW4KeB4Kay4Ka24KeAIOCmn-CmvuCmieCmqCDgprjgp4fgpqjgp43gpp_gpr7gprA!5e0!3m2!1sbn!2sbd!4v1707400884863!5m2!1sbn!2sbd"
              width="400"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <p className={`text-gray-300 `}>
        Copy Right-{currentYear} || All rights reserved by Radiant Bites ||
        Developed by{" "}
        <a className="font-semibold"
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