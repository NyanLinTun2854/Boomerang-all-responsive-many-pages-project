import React from "react";
import demoImg from "../../img/demoImg.png";

const DImage = () => {
  return (
    <div className="w-full mb-[80px]">
      <div className="w-full -mt-[120px]"></div>
      <div className="w-[88%] mx-auto -z-10">
        <img src={demoImg} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default DImage;
