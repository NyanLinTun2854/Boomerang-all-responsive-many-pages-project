import React, { useEffect, useState } from "react";
import CardsButton from "./CardsButton";
import ImageCard from "./ImageCard";

const Cards = () => {
  const [allImage, setAllImage] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    setAllImage(cards);

    setFiltered(cards);
  }, []);
  return (
    <>
      <div className="w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto flex justify-between items-center py-[40px]">
        <CardsButton
          allImage={allImage}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      </div>
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 justify-end">
        {filtered.map((card) => (
          <ImageCard card={card} />
        ))}
      </div>
    </>
  );
};

const cards = [
  {
    id: 1,
    title: "Solave Cleaner",
    genre: ["Digital", "All"],
    imageUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/portfolio/1.jpg",
  },
  {
    id: 2,
    title: "Monochrome",
    genre: ["Branding", "All"],
    imageUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/portfolio/4.jpg",
  },
  {
    id: 3,
    title: "Ellie Cashman",
    genre: ["Packaging", "All"],
    imageUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/portfolio/3.jpg",
  },
  {
    id: 4,
    title: "White Sleeve",
    genre: ["Digital", "All"],
    imageUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/portfolio/6.jpg",
  },
  {
    id: 5,
    title: "Classic Socks",
    genre: ["Branding", "All"],
    imageUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/portfolio/5.jpg",
  },
  {
    id: 6,
    title: "Expirience",
    genre: ["Packaging", "All"],
    imageUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/portfolio/2.jpg",
  },
];

export default Cards;
