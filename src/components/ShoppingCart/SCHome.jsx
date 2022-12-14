import React from "react";

const CHeader = () => {
  return (
    <div className="w-full h-auto bg-[#f8f8f8]">
      <div className="w-[90%] mx-auto  pt-[80px] font-poppin">
        <div className="w-full flex flex-col md:flex-row items-center sm:justify-between px-16 md:px-0 py-[45px]">
          <h3 className="text-[1.125rem] font-[500] leading-[1.3] py-3 md:py-0">
            Shopping Cart
          </h3>
          <div className="flex text-[.8125rem] text-[#788487] font-[400] leading-[1.8] space-x-2">
            <div className="cursor-pointer duration-200 hover:text-indigo-500">
              Home
            </div>
            <div>/</div>
            <div className="cursor-pointer duration-200 hover:text-indigo-500">
              Shop
            </div>
            <div>/</div>
            <div className="cursor-pointer duration-200 hover:text-indigo-500">
              CheckOut
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CHeader;
