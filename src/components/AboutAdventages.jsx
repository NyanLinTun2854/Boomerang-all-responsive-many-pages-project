import React from "react";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { TfiDesktop } from "react-icons/tfi";
import { TfiFaceSmile, TfiSlice, TfiStar } from "react-icons/tfi";
import { CgBox } from "react-icons/cg";

const AboutAdventages = () => {
  return (
    <div className="w-full mx-auto h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-poppin pt-[40px] pb-[100px] pl-4 sm:gap-x-6 lg:gap-x-0">
      <div className="w-full h-auto group/image cursor-pointer flex  justify-start pl-0 lg:pl-10  py-[20px]">
        <div className="w-[35px] h-[35px] flex justify-start items-center mb-3 mr-8">
          <TfiLayoutMediaLeft className="w-[35px] h-[35px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[.875rem] font-[500] mb-4">Visual Composer</h5>
          <p className="text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]">
            See how your users experience your website inrealtime or view trends
            to see any changes in performance.
          </p>
        </div>
      </div>
      <div className="w-full h-auto group/image cursor-pointer flex  justify-start pl-0 lg:pl-10 py-[20px]">
        <div className="w-[35px] h-[35px] flex justify-start items-center mb-3 mr-8">
          <TfiDesktop className="w-[35px] h-[35px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[.875rem] font-[500] mb-4">Visual Composer</h5>
          <p className="text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]">
            See how your users experience your website inrealtime or view trends
            to see any changes in performance.
          </p>
        </div>
      </div>
      <div className="w-full h-auto group/image cursor-pointer flex  justify-start pl-0 lg:pl-10 py-[20px]">
        <div className="w-[35px] h-[35px] flex justify-start items-center mb-3 mr-8">
          <TfiFaceSmile className="w-[35px] h-[35px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[.875rem] font-[500] mb-4">Visual Composer</h5>
          <p className="text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]">
            See how your users experience your website inrealtime or view trends
            to see any changes in performance.
          </p>
        </div>
      </div>
      <div className="w-full h-auto group/image cursor-pointer flex  justify-start pl-0 lg:pl-10 py-[20px]">
        <div className="w-[35px] h-[35px] flex justify-start items-center mb-3 mr-8">
          <TfiSlice className="w-[35px] h-[35px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[.875rem] font-[500] mb-4">Visual Composer</h5>
          <p className="text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]">
            See how your users experience your website inrealtime or view trends
            to see any changes in performance.
          </p>
        </div>
      </div>
      <div className="w-full h-auto group/image cursor-pointer flex  justify-start pl-0 lg:pl-10 py-[20px]">
        <div className="w-[35px] h-[35px] flex justify-start items-center mb-3 mr-8">
          <TfiStar className="w-[35px] h-[35px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[.875rem] font-[500] mb-4">Visual Composer</h5>
          <p className="text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]">
            See how your users experience your website inrealtime or view trends
            to see any changes in performance.
          </p>
        </div>
      </div>
      <div className="w-full h-auto group/image cursor-pointer flex  justify-start pl-0 lg:pl-10 py-[20px]">
        <div className="w-[35px] h-[35px] flex justify-start items-center mb-3 mr-8">
          <CgBox className="w-[35px] h-[35px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]" />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[.875rem] font-[500] mb-4">Visual Composer</h5>
          <p className="text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]">
            See how your users experience your website inrealtime or view trends
            to see any changes in performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAdventages;
