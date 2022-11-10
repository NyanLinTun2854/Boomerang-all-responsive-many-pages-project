import React from "react";

const SHome = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center relative shopBg">
      <div className="w-[80%] h-full mx-auto text-white font-poppin">
        <h1 className="text-[4rem] font-[400] text-center px-6 mb-4 leading-[80px]">
          Shop Grid
        </h1>
        <p className="flex justify-center items-center gap-4 text-[0.9375rem] font-[400] text-center mb-10 leading-7">
          <div>Home</div>
          <div>/</div>
          <div>Shop</div>
          <div>/</div>
          <div>2 Columns</div>
        </p>
      </div>
    </div>
  );
};

export default SHome;
