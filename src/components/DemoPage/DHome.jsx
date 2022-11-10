import React from "react";

const DHome = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center relative demoBg -z-20">
      <div className="color-overlay-demo"></div>
      <div className="w-[80%] h-full mx-auto text-white font-poppin">
        <h1 className="text-[6rem] font-[600] text-center px-6 mb-8 leading-[80px]">
          Boomerang
        </h1>
        <p className="text-[0.9375rem] font-[400] text-center mb-10 leading-7">
          Quickly create your One or Multi Page website in fastest
          <br />
          and easiest way with SASS and Pug based template.
        </p>
      </div>
    </div>
  );
};

export default DHome;
