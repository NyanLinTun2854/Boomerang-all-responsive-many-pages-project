import React from "react";
import imgOne from "../../img/SImg/one.jpg";
import imgTwo from "../../img/SImg/two.jpg";
import imgThree from "../../img/SImg/three.jpg";
import imgFour from "../../img/SImg/four.jpg";
import imgFive from "../../img/SImg/five.jpg";
import imgSix from "../../img/SImg/six.jpg";
import imgSeven from "../../img/SImg/seven.jpg";
import imgEight from "../../img/SImg/eight.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import SCard from "./SCard";

const SAbout = () => {
  return (
    <div className="w-full">
      <div className="w-[85%] mx-auto grid grid-cols-2 gap-y-4 gap-x-8">
        {SCards.map((card) => (
          <SCard card={card} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-[60px] mb-[100px]">
        <div className="rounded-full duration-300 hover:bg-slate-200 px-1 py-1 cursor-pointer">
          <BiChevronLeft className="text-xl text-[#788487] duration-300 hover:text-black" />
        </div>
        <div className="rounded-full text-white bg-indigo-500 duration-300 w-8 h-8 flex justify-center items-center cursor-pointer">
          <div>1</div>
        </div>
        <div className="rounded-full text-[#788487] duration-300 hover:text-black hover:bg-slate-200 w-8 h-8 flex justify-center items-center cursor-pointer">
          <div>2</div>
        </div>
        <div className="rounded-full text-[#788487] duration-300 hover:text-black hover:bg-slate-200 w-8 h-8 flex justify-center items-center cursor-pointer">
          <div>3</div>
        </div>
        <div className="rounded-full text-[#788487] duration-300 hover:text-black hover:bg-slate-200 w-8 h-8 flex justify-center items-center cursor-pointer">
          <div>4</div>
        </div>
        <div className="rounded-full duration-300 hover:bg-slate-200 px-1 py-1 cursor-pointer">
          <BiChevronRight className="text-xl text-[#788487] duration-300 hover:text-black" />
        </div>
      </div>
    </div>
  );
};

const SCards = [
  {
    id: 1,
    title: "Classic Chair",
    price: "$20.00",
    imgUrl: imgOne,
  },
  {
    id: 2,
    title: "Thermo Flask",
    price: "$30.00",
    imgUrl: imgTwo,
  },
  {
    id: 3,
    title: "Folder Calendar",
    price: "$50.00",
    imgUrl: imgThree,
  },
  {
    id: 4,
    title: "Amber Body Lotion",
    price: "$80.00",
    imgUrl: imgFour,
  },
  {
    id: 5,
    title: "Solo Headphones",
    price: "$100.00",
    imgUrl: imgFive,
  },
  {
    id: 6,
    title: "Ceramic Watch",
    price: "$20.00",
    imgUrl: imgSix,
  },
  {
    id: 7,
    title: "Wooden Bathroom Set",
    price: "$40.00",
    imgUrl: imgSeven,
  },
  {
    id: 8,
    title: "Plain Glass Bottle",
    price: "$40.00",
    imgUrl: imgEight,
  },
];

export default SAbout;
