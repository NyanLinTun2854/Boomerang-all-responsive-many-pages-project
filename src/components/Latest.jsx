import React from "react";
import Expression from "./Expression";
import LatestCard from "./LatestCard";
import Titile from "./Titile";

const Latest = () => {
  return (
    <div className="w-full 2xl:container mx-auto h-auto font-poppin pt-[60px] sm:pt-[pt-80px] lg:pt-[120px] pb-[60px] lg:pb-[100px]">
      <div className="w-[90%] sm:w-[40%] mx-auto h-auto text-center">
        <Titile>Latest Articles</Titile>
        <Expression>
          See how your users experience your website in realtime or view trends
          to see any changes in performance over time.
        </Expression>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-14 sm:gap-y-0 mt-[60px]">
        {latest.map((card) => (
          <LatestCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

const latest = [
  {
    id: 1,
    title: "Bluetooth Speaker",
    description:
      "See how your users experience your website in realtime or view trends to see any changes in performance over time.",
    imgUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/blog/1.jpg",
  },
  {
    id: 2,
    title: "Minimalist Chandelier",
    description:
      "See how your users experience your website in realtime or view trends to see any changes in performance over time.",
    imgUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/blog/3.jpg",
  },
  {
    id: 3,
    title: "Standard Shape",
    description:
      "See how your users experience your website in realtime or view trends to see any changes in performance over time.",
    imgUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/blog/5.jpg",
  },
];

export default Latest;
