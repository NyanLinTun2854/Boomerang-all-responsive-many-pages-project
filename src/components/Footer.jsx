import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpg";
import four from "../img/four.jpg";
import five from "../img/five.jpg";
import six from "../img/six.jpg";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#222]">
      <div className="w-full 2xl:container mx-auto h-auto text-white  font-poppin">
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 pt-[70px] md:pt-[90px] pb-[50px] pb-[70px]">
          <div className="w-full h-full">
            <h4 className="text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]">
              About Us
            </h4>
            <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#788487] pr-4 mb-[1rem]">
              Map where your photos were taken and discover local points of
              interest. Map where your photos.
            </p>
            <p className="text-[.8125rem] font-[400] leading-[1.8] text-[#788487] pr-4 mb-[1rem]">
              Location: 12 London Avenue, Suite 18 E-mail: support@theme.com
              Phone: 8 800 123 4567
            </p>
            <div className="w-[50%] mr-auto flex justify-between">
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <FaFacebookF />
              <FaPinterestP />
            </div>
          </div>
          <div className="w-full h-full pr-8">
            <h4 className="text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]">
              Recent Posts
            </h4>
            <div className="pb-[14px] border-b border-b-[#2f2f2f]">
              <p className="text-[#cecece] text-[.8125rem] font-[400] leading-[1.8]">
                Map where your photos were taken
                {/* <br /> */}
                and discover local points.
              </p>
              <p className="text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8px] pt-2">
                May 8, 2018
              </p>
            </div>
            <div className="py-[14px] border-b border-b-[#2f2f2f]">
              <p className="text-[#cecece] text-[.8125rem] font-[400] leading-[1.8]">
                Map where your photos were taken
                {/* <br /> */}
                and discover local points.
              </p>
              <p className="text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8px] pt-2">
                April 7, 2018
              </p>
            </div>
            <div className="pt-[14px]">
              <p className="text-[#cecece] text-[.8125rem] font-[400] leading-[1.8]">
                Map where your photos were taken
                {/* <br /> */}
                and discover local points.
              </p>
              <p className="text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8px] pt-2">
                September 7, 2018
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            <h4 className="text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]">
              Twitter Feeds
            </h4>
          </div>
          <div className="w-full h-full">
            <h4 className="text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]">
              Porfolio
            </h4>
            <div className="grid grid-cols-3 gap-x-2 gap-y-2">
              <div className="w-full h-full">
                <img src={one} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full h-full">
                <img src={two} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full h-full">
                <img
                  src={three}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full h-full">
                <img src={four} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full h-full">
                <img src={five} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-full h-full">
                <img src={six} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto text-center py-[22px] border-t border-[#2f2f2f]">
          <p className="text-[#788487] text-[.75rem] font-[400] leading-[1.8]">
            © 2018 Boomerang, All Rights Reserved. Design with love by{" "}
            <span className="text-[#cecece]">2theme</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
