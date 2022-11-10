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
    <div className="w-full flex justify-center gap-4 py-10">
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
        className="text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]"
        onClick={() => {
          setActiveGenre("Packaging");
        }}
      >
        Packaging &nbsp; &nbsp; /
      </button>
    </div>
  );
};

export default BCardButton;
