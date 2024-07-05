import React from "react";
import lines from "../Images/Lines-bg (1).png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import whatsapp from "../Images/whatsapp.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#170625] relative mt-[6%] flex flex-col items-center justify-center h-full py-[5%]">
        <img src={lines} className="absolute top-0" alt="footer-bg" />
        <div className="">
          <h1 className="text-center text-5xl text-[#f8a01f] font-bold un mb-[8%]">
            ASBL
          </h1>
          <div className="flex flex-wrap gap-6 justify-center text-white mb-[5%]">
            <p>Plans</p>
            <p>Amenities</p>
            <p>Location</p>
            <p>Price</p>
            <p>Specifications</p>
            <p>Media</p>
            <p>Blogs</p>
          </div>
          <div className="flex justify-center max-[600px]:flex-col max-[600px]:items-center gap-8 text-white mb-[6%]">
            <div className="flex gap-2">
              <FaPhoneAlt className="text-[#9d5088] mt-1" />
              080 471 09111
            </div>
            <div className="flex gap-2">
              <MdEmail className="text-[#9d5088] mt-1" />
              sales@asbl.in
            </div>
            <div className="flex gap-4 text-[#9d5088] mt-1">
              <BsFacebook />
              <FaInstagramSquare />
              <FaYoutube />
              <FaLinkedin />
              <FaSquareXTwitter />
            </div>
          </div>
          <div className="flex gap-3 justify-center max-[600px]:items-center max-[600px]:flex-col">
            <p className="text-sm text-white font-[200]">
              ⓒ 2024 Asbl Loft. All Rights Reserved.
            </p>
            <p className="text-sm text-white font-[200]">
              TS RERA No: P02400006761
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-11 right-11">
        <img src={whatsapp} className="w-11" alt="whatsapp" />
      </div>
    </div>
  );
};

export default Footer;
