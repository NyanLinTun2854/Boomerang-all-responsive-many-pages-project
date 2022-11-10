import React from "react";

const ImageCard = ({ card }) => {
  return (
    <div className="w-full h-full group overflow-hidden">
      <div className="relative w-full h-full translate-y-0 transition duration-500 group-hover:-translate-y-[90px]">
        <div>
          <img src={card.imageUrl} alt="" />
        </div>
        <div className="absolute w-full my-6">
          <h4 className="font-poppin text-[.875rem] font-[500] text-center mb-1">
            {card.title}
          </h4>
          <p className="text-[.8125rem] text-cardActive italic font-[400] text-center">
            {card.genre[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
