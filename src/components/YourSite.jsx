import React from "react";
import mockup from "../img/mega-mockup.png";
import { AiOutlineLayout } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { BiServer } from "react-icons/bi";
import { TfiDesktop } from "react-icons/tfi";
import Titile from "./Titile";
import Expression from "./Expression";
import ActiveIconDescription from "./ActiveIconDescription";

const YourSite = () => {
  const ico = "AiOutlineLayout";
  return (
    <div className="container mx-auto h-auto font-poppin border-b border-b-[#f0f0f0]">
      <div className="w-[90%] h-full mx-auto py-[60px] sm:py-[80px] lg:py-[120px]">
        <div className="w-[90%] sm:w-[50%] mx-auto text-center">
          <Titile>Your Site, Your Way.</Titile>
          <Expression>
            See how your users experience your website in realtime or view
            <br />
            trends to see any changes in performance over time.
          </Expression>
        </div>
        <div className="w-full max-h-[426px] my-[60px]">
          <img
            src="https://offsetcode.com/themes/boomerang/1.3/assets/images/main/mega-mockup.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-0">
          <div className="w-full h-auto group/image cursor-pointer">
            <div className="w-full h-[68px] flex justify-center items-center mb-3">
              <AiOutlineLayout className="w-[48px] h-[48px] text-pBlue font-[300] translate-y-0 duration-500 text-[2.375rem] group-hover/image:translate-y-[-10px]" />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-[.875rem] font-[500] mb-4">
                Visual Composer
              </h5>
              <p className="text-[.875rem] font-[400] text-[#788487] text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetuer adipiscing elit sed
                <br />
                diam lorem ipsum amet.
              </p>
              <a href="#" className="text-[.875rem] font-[400] text-pBlue mt-3">
                Read more
              </a>
            </div>
          </div>
          <div className="w-full h-auto group/image cursor-pointer">
            <div className="w-full h-[68px] flex justify-center items-center mb-3">
              <TfiCup className="w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-[.875rem] font-[500] mb-4">
                Visual Composer
              </h5>
              <p className="text-[.875rem] font-[400] text-[#788487] text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetuer adipiscing elit sed
                <br />
                diam lorem ipsum amet.
              </p>
              <a href="#" className="text-[.875rem] font-[400] text-pBlue mt-3">
                Read more
              </a>
            </div>
          </div>
          <div className="w-full h-auto group/image cursor-pointer">
            <div className="w-full h-[68px] flex justify-center items-center mb-3">
              <BiServer className="w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-[.875rem] font-[500] mb-4">
                Visual Composer
              </h5>
              <p className="text-[.875rem] font-[400] text-[#788487] text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetuer adipiscing elit sed
                <br />
                diam lorem ipsum amet.
              </p>
              <a href="#" className="text-[.875rem] font-[400] text-pBlue mt-3">
                Read more
              </a>
            </div>
          </div>
          <div className="w-full h-auto group/image cursor-pointer">
            <div className="w-full h-[68px] flex justify-center items-center mb-3">
              <TfiDesktop className="w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-[.875rem] font-[500] mb-4">
                Visual Composer
              </h5>
              <p className="text-[.875rem] font-[400] text-[#788487] text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetuer adipiscing elit sed
                <br />
                diam lorem ipsum amet.
              </p>
              <a href="#" className="text-[.875rem] font-[400] text-pBlue mt-3">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourSite;
