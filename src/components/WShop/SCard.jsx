import React from "react";
import ImgOne from "../../img/SImg/one.jpg";

const SCard = ({ card }) => {
  return (
    <div className="w-full relative group font-poppin">
      <div className="w-full relative overflow-hidden">
        <div className="w-full">
          <img
            src={card.imgUrl}
            className="duration-300 group-hover:opacity-60"
            alt=""
          />
        </div>

        <div className="absolute w-full flex justify-center translate-y-0 duration-300 group-hover:-translate-y-[43px]">
          <button className="text-[#212529] text-[.75rem] tracking-[.1125rem] uppercase font-[600] bg-white border-t border-l border-r border-[#ececec] px-8 py-3 rounded-t-sm shadow-md">
            Add To Card
          </button>
        </div>
      </div>
      <div className="text-center py-5 space-y-1">
        <p className="text-[.875rem] leading-[1.3] font-[500]">{card.title}</p>
        <p className="text-[.875rem] font-[400] leading-[1.8] text-[#788487] mt-0 opacity-50">
          {card.price}
        </p>
      </div>
    </div>
  );
};

export default SCard;
