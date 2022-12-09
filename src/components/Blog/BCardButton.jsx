import React from "react";
import { useEffect } from "react";

const BCardButton = ({ allImg, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === "All") {
      setFiltered(allImg.filter((i) => i.genre.includes("All")));
    }
    setFiltered(allImg.filter((i) => i.genre.includes(activeGenre)));
  }, [activeGenre]);
  return (
    <div className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto flex flex-wrap justify-between items-center space-x py-[40px] gap-y-2">
      <button
        className="text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]"
        onClick={() => {
          setActiveGenre("All");
        }}
      >
        All &nbsp; &nbsp; /
      </button>
      <button
        className="text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]"
        onClick={() => {
          setActiveGenre("Branding");
        }}
      >
        Branding &nbsp; &nbsp; /
      </button>
      <button
        className="text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]"
        onClick={() => {
          setActiveGenre("Digital");
        }}
      >
        Digital &nbsp; &nbsp; /
      </button>
      <button
        className="text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400] mx-0 sm:mx-0"
        onClick={() => {
          setActiveGenre("Packaging");
        }}
      >
        Packaging
      </button>
    </div>
  );
};

export default BCardButton;
