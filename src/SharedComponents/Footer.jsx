import logo2 from "./../assets/Logos/2.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="text-center text-sm md:px-20 pt-10 pb-2 bg-black text-gray-300 px-2">
      <div className="w-[12rem] mx-auto mb-5 border-b-[.09rem] rounded-md pb-1 ">
        <img src={logo2} alt="Radiant Bites's Logo" className="w-full" />
      </div>
      <div className="mb-6 flex flex-col md:flex-row items-start justify-between overflow-auto bg-[#40b93] gap-20 ">
        <div className="info-parent h-[25rem] text-gray-800 bg-gray-300 rounded-br-3xl border- flex-1 flex items-center justify-between">
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
        <div className="map flex-1 overflow-auto ">
          <iframe
            className="rounded-tl-3xl w-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.199512164692!2d91.8044697787996!3d22.361184006739272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f2cb4ce22d%3A0x7fc7dd4029e3698b!2z4KaW4KeB4Kay4Ka24KeAIOCmn-CmvuCmieCmqCDgprjgp4fgpqjgp43gpp_gpr7gprA!5e0!3m2!1sbn!2sbd!4v1707400884863!5m2!1sbn!2sbd"
            // width="500"
            height="400"
            loading="lazy"
          ></iframe>
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