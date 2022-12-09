import React from "react";
import DynamicButton from "./DynamicButton";
import heroBgDesktop from "../img/heroBgDesktop.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto sm:min-h-[100vh] flex justify-center items-center relative heroBgDesktop lg:heroBgDesktoplg">
        {/* <img src={heroBgDesktop} className='absolute w-full h-full object-fit mix-blend-overlay' alt="" /> */}
        <div className="color-overlay"></div>
        <div className="w-full 2xl:container mx-auto py-[100px] lg:py-0">
          <div className="w-[88%] lg:w-[80%] h-full mx-auto text-white font-poppin">
            <h1 className="text-[2rem] lg:text-[4rem] font-[600] lg:font-[0] text-center px-0 lg:px-4 mb-4 lg:leading-[80px] leading-[1.3]">
              Your customers will love you one minute from now.
            </h1>
            <p className="text-[.875rem] lg:text-[0.9375rem] font-[400] text-center mb-10 leading-[1.8] lg:leading-7 tracking-[.03125rem]">
              See how your users experience your website in realtime or view
              <br />
              trends to see any changes in performance over time.
            </p>
            <div className="text-center space-x-4 space-y-2 lg:space-y-0">
              <DynamicButton btnGet="border-indigo-600 hover:border-indigo-700 bg-indigo-600 hover:bg-indigo-700 duration-500">
                Get Started
              </DynamicButton>
              <DynamicButton btnLearn="hover:bg-white hover:text-black duration-500">
                Learn More
              </DynamicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
