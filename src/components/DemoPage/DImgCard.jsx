import React from "react";
import imgOne from "./img/one.jpg";

const DImgCard = ({ card }) => {
  return (
    <div className="w-full font-poppin">
      <div className="w-full cursor-pointer rounded-md overflow-hidden  translate-y-0 duration-300 hover:-translate-y-[6px]">
        <img src={card.imgUrl} classNamew="w-full h-full object-cover" alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-[.75rem] font-[500] leading-[1.3rem] tracking-[.1rem] uppercase py-6">
          {card.title}
        </h1>
      </div>
    </div>
  );
};

export default DImgCard;
