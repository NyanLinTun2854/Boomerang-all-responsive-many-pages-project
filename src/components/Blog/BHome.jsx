import React from "react";
import { useScrollPosition } from "../../useScrollPosition";

const BHome = () => {
  const scrollPosition = useScrollPosition();

  const scrollStyle = { transform: `translateY(-${scrollPosition * 0.7}px)` };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center relative">
      <div className="w-full h-full blogBg fixed" style={scrollStyle}></div>
      <div className="absolute w-[80%] h- mx-auto text-white font-poppin flex  justify-center items-center">
        <div>
          <h1 className="text-[4rem] font-[400] text-center px-6 mb-4 leading-[80px]">
            Right Sidebar
          </h1>
          <p className="text-[0.9375rem] font-[400] text-center mb-10 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Quisque eget mi at eros venenatis
          </p>
        </div>
      </div>
    </div>
  );
};

export default BHome;
