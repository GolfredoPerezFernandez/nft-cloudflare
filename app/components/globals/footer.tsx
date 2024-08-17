/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter, FaTelegramPlane, FaDiscord, FaInstagram, FaMediumM } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { InputSubscribe } from "./inputSubscribe";

const Footer = () => {
    return (
      <footer className="relative p-20   overflow-hidden text-white py-6">
        {/* Fondo animado con gradiente de colores */}
        <div className="absolute bg-gradient-to-r from-[#00c6ff] to-[#0072ff]  inset-0 animate-gradient "></div>
        
        <InputSubscribe/>

        <div className="pl-20 pt-20 pr-20 container mx-auto px-4 flex flex-col items-center relative z-10">
          <div className="flex flex-col lg:flex-row lg:gap-7 items-center justify-between w-full my-10">
            <div className="flex gap-4">
              <a href="#" className="text-white hover:underline">Terms and conditions</a>
              <a href="#" className="text-white hover:underline">Privacy Policy</a>
              {/* <a href="#" className="text-green-400 hover:underline">For partnerships, please get in touch with us at info@joinxentro.com</a> */}
            </div>
            <div className="flex gap-4">
              <FaTwitter size={20}/>
              <FaTelegramPlane size={20}/>
              <FaDiscord size={20}/>
              <FaInstagram size={20}/>
              <FaMediumM size={20}/>
              <SiTrustpilot size={20}/>
            </div>
          </div>
          <div className="my-2">
            <span className="text-white">For partnerships, please get in touch with us at <span className="text-[#0066FF]">info@joinxentro.com</span></span>
          </div>
          <div>
            <span className="text-white text-[12px]">Copyright © 2024 Xentro. All rights reserved.</span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;