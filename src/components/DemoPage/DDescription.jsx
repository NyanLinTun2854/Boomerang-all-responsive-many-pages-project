import React from "react";
import imgOne from "./img/one.jpg";
import imgTwo from "./img/two.jpg";
import imgThree from "./img/three.jpg";
import imgFour from "./img/four.jpg";
import imgFive from "./img/five.jpg";
import imgSix from "./img/six.jpg";
import imgSeven from "./img/seven.jpg";
import imgEight from "./img/eight.jpg";
import imgNine from "./img/nine.jpg";
import imgTen from "./img/ten.jpg";
import imgEleven from "./img/eleven.jpg";
import imgTwelve from "./img/twelve.jpg";
import imgThirteen from "./img/thirteen.jpg";
import imgFourteen from "./img/fourteen.jpg";
import imgFifthteen from "./img/fifthteen.jpg";
import imgSixthteen from "./img/sixthteen.jpg";
import DImgCard from "./DImgCard";

const DDescription = () => {
  return (
    <div className="w-full pb-[100px]">
      <div className="w-[90%] md:w-[70%] mx-auto flex justify-between mb-[40px]">
        <p className="uppercase">Multi Page Demos</p>
        <p>ONE PAGE DEMOS</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 px-4">
        {demoCards.map((card) => (
          <DImgCard card={card} />
        ))}
      </div>
    </div>
  );
};

const demoCards = [
  {
    id: 1,
    title: "parallax",
    imgUrl: imgOne,
  },
  {
    id: 2,
    title: "slider - slide",
    imgUrl: imgTwo,
  },
  {
    id: 3,
    title: "parallax",
    imgUrl: imgThree,
  },
  {
    id: 4,
    title: "slider - slide",
    imgUrl: imgFour,
  },
  {
    id: 5,
    title: "slider - fade",
    imgUrl: imgFive,
  },
  {
    id: 6,
    title: "youtube",
    imgUrl: imgSix,
  },
  {
    id: 7,
    title: "slider - fade",
    imgUrl: imgSeven,
  },
  {
    id: 8,
    title: "youtube",
    imgUrl: imgEight,
  },
  {
    id: 9,
    title: "vimeo",
    imgUrl: imgNine,
  },
  {
    id: 10,
    title: "local video",
    imgUrl: imgTen,
  },
  {
    id: 11,
    title: "vimeo",
    imgUrl: imgEleven,
  },
  {
    id: 12,
    title: "local video",
    imgUrl: imgTwelve,
  },
  {
    id: 13,
    title: "gradiendt style 1",
    imgUrl: imgThirteen,
  },
  {
    id: 14,
    title: "gradient style 2",
    imgUrl: imgFourteen,
  },
  {
    id: 15,
    title: "gradient style 1",
    imgUrl: imgFifthteen,
  },
  {
    id: 16,
    title: "gradient style 2",
    imgUrl: imgSixthteen,
  },
];

export default DDescription;
