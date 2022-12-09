import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-auto lg:min-h-[100vh] flex justify-center items-center relative aboutBgDesktop lg:aboutBgDesktoplg">
      {/* <img src={heroBgDesktop} className='absolute w-full h-full object-fit mix-blend-overlay' alt="" /> */}
      <div className="color-overlay"></div>
      {/* <div className="w-[80%] h-full mx-auto text-white font-poppin">
        <h1 className="text-[4rem] font-[600] text-center px-6 mb-4 leading-[80px]">
          We are a creative agency based in New York
        </h1>
        <p className="text-[0.9375rem] font-[400] text-center mb-10 leading-7">
          Creating digital products for creative people
        </p>
      </div> */}
      <div className="w-full 2xl:container mx-auto py-[120px] lg:py-0">
        <div className="w-[88%] lg:w-[80%] h-full mx-auto text-white font-poppin">
          <h1 className="text-[2rem] lg:text-[4rem] font-[500] lg:font-[0] text-center px-0 lg:px-4 mb-4 lg:leading-[80px] leading-[1.3]">
            Your customers will love you one minute from now.
          </h1>
          <p className="text-[.875rem] lg:text-[0.9375rem] font-[400] text-center mb-10 leading-[1.8] lg:leading-7 tracking-[.03125rem]">
            See how your users experience your website in realtime or view
            <br />
            trends to see any changes in performance over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
