import React, { useState } from "react";
import cardImageOne from "../../img/ACard/one.jpg";
import cardImageTwo from "../../img/ACard/two.jpg";
import cardImageThree from "../../img/ACard/three.jpg";
import cardImageFour from "../../img/ACard/four.jpg";
import cardImageFive from "../../img/ACard/five.jpg";
import cardImageSix from "../../img/ACard/six.jpg";
import cardImageSeven from "../../img/ACard/seven.jpg";
import cardImageEight from "../../img/ACard/eight.jpg";
import cardImageNine from "../../img/ACard/nine.jpg";
import BImageCard from "./BImageCard";
import BCardButton from "./BCardButton";
import { useEffect } from "react";

const BAbout = () => {
  const [allImg, setAllImg] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    setAllImg(cards);
    setFiltered(cards);
  }, []);

  console.log(allImg);
  return (
    <div className="w-full bg-white">
      <BCardButton
        allImg={allImg}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-[242px] grid-flow-dense auto-rows-auto gap-x-2 gap-y-2 px-2 place-items-center">
        {filtered.map((bCard) => (
          <BImageCard bCard={bCard} />
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Solave Cleaner",
    genre: ["Digital", "All"],
    imageUrl: cardImageOne,
    rowBoolean: true,
    order: "order-1",
  },
  {
    id: 2,
    title: "Monochrome",
    genre: ["Branding", "All"],
    imageUrl: cardImageTwo,
    rowBoolean: false,
    order: "order-2",
  },
  {
    id: 3,
    title: "Ellie Cashman",
    genre: ["Packaging", "All"],
    imageUrl: cardImageThree,
    rowBoolean: true,
    order: "order-3",
  },
  {
    id: 4,
    title: "Whie Sleeve",
    genre: ["Digital", "All"],
    imageUrl: cardImageFour,
    rowBoolean: false,
    order: "order-4",
  },
  {
    id: 5,
    title: "Classic Socks",
    genre: ["Branding", "All"],
    imageUrl: cardImageFive,
    rowBoolean: true,
    order: "order-5",
  },
  {
    id: 6,
    title: "Architecture",
    genre: ["Packaging", "All"],
    imageUrl: cardImageSix,
    rowBoolean: false,
    order: "order-6",
  },
  {
    id: 7,
    title: "Expirience",
    genre: ["Packaging", "All"],
    imageUrl: cardImageEight,
    rowBoolean: false,
    order: "order-7",
  },
];

export default BAbout;
