import React from "react";

const LatestCard = ({ card }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-auto flex flex-col items-start">
        <div className="w-full duration-500 mb-[35px] group/image">
          <img
            src={card.imgUrl}
            className="rounded-md duration-500 translate-y-0 group-hover/image:-translate-y-[6px]"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[1rem] text-[#222] font-[500] mb-[10px]">
            {card.title}
          </h1>
          <p className="text-[.875rem] leading-[1.8] text-[#788487] font-[400] mb-[1rem]">
            {card.description}
          </p>
          <p className="text-[.875rem] font-[400] leading-[1.8] text-pBlue">
            Read more
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
