import React from "react";

const BImageCard = ({ bCard }) => {
  return (
    <div
      className={
        bCard.rowBoolean
          ? `w-full h-[484px] group overflow-hidden row-span-2 ${bCard.order}`
          : `w-full h-[242px] group overflow-hidden ${bCard.order}`
      }
    >
      <div className="relative w-full h-full translate-y-0 transition duration-500 group-hover:-translate-y-[90px]">
        <div className="w-full h-full">
          <img
            src={bCard.imageUrl}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="absolute w-full my-6">
          <h4 className="font-poppin text-[.875rem] font-[500] text-center mb-1">
            {bCard.title}
          </h4>
          <p className="text-[.8125rem] text-cardActive italic font-[400] text-center">
            {bCard.genre[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BImageCard;
