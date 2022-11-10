import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { TfiSlice } from "react-icons/tfi";
import { BsPinAngle } from "react-icons/bs";
import { TfiMarkerAlt } from "react-icons/tfi";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";
import four from "../img/4.png";
import five from "../img/5.png";
import six from "../img/6.png";
import seven from "../img/7.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import bgBack from "../img/heroBgDesktop.jpg";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import DynamicButton from "./DynamicButton";
import SwiperCore from "swiper";

const Price = () => {
  const [my_swiper, set_my_swiper] = useState({});
  return (
    <div>
      <div className="w-full h-[100vh] priceBg">
        <div className="color-overlay-2"></div>
        <div
          div
          className="w-[80%] h-full mx-auto flex justify-center items-center"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-[400px]"
          >
            {priceDeco.map((Deco) => (
              <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-[80px] h-[80px] rounded-full ring-8 
                                    ring-lightWhite overflow-hidden"
                    >
                      <img
                        src={Deco.imgUrl}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className="w-[80%] h-auto text-center text-white py-[20px]">
                      <p className="text-[1.0625rem] tracking-[.03125rem] font-[400] font-poppin mb-[1rem]">
                        {Deco.description}
                      </p>
                      <p className="text-[.885rem] font-[400] tracking-[.03125rem]">
                        {Deco.name}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button
              onClick={() => my_swiper.slidePrev()}
              className="swipper-button-prev"
            >
              <FiArrowLeft className="text-2xl text-white font-[600]" />
            </button>
            <button
              onClick={() => my_swiper.slideNext()}
              className="swipper-button-next"
            >
              <FiArrowRight className="text-2xl text-white font-[600]" />
            </button>
          </Swiper>
        </div>
      </div>
      <div className="w-full h-[630px] relative bg-[#f8f8f8]">
        <div className="w-[90%]  absolute -top-14 -translate-x-[50%]  left-[50%]">
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col items-center shadow-xl border border-b-[#f0f0f0] bg-white rounded-[4px] duration-500 hover:scale-[104%]">
              <div className="mb-[20px] pt-[30px]">
                <TfiSlice className="w-[40px] h-[40px]" />
              </div>
              <div className="pb-[30px] border-b border-b-[#f0f0f0] text-center w-[70%]">
                <p className="text-[.6875rem] tracking-[0.0625rem] uppercase text-[#222] font-poppin font-[400]">
                  Starter
                </p>
              </div>
              <div className="py-[10px]">
                <h1 className="text-[4rem] font-[600] leading-[1.8] font-poppin">
                  Free
                </h1>
              </div>
              <div>
                <p className="text-center text-[.875rem] font[400] leading-[1.8] text-[#788487] font-poppin">
                  Map where your photos
                  <br />
                  were taken and discover local
                  <br />
                  points of interest.
                </p>
              </div>
              <div className="py-[34px]">
                <DynamicButton priceBtn="border-pBlue bg-pBlue hover:border-indigo-700 hover:bg-indigo-700 text-[.75rem] tracking-[.1125rem] uppercase font-[600] font-poppin text-white px-10 py-[1rem]">
                  Download
                </DynamicButton>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-xl border border-b-[#f0f0f0] bg-white rounded-[4px] duration-500 hover:scale-[104%]">
              <div className="mb-[20px] pt-[30px]">
                <BsPinAngle className="w-[40px] h-[40px]" />
              </div>
              <div className="pb-[30px] border-b border-b-[#f0f0f0] text-center w-[70%]">
                <p className="text-[.6875rem] tracking-[0.0625rem] uppercase text-[#222] font-poppin font-[400]">
                  Starter
                </p>
              </div>
              <div className="py-[10px]">
                <h1 className="text-[4rem] font-[600] leading-[1.8] font-poppin flex items-start">
                  <p className="text-[1.125rem] font-[600] font-poppin pt-4">
                    $
                  </p>
                  <h1>45</h1>
                </h1>
              </div>
              <div>
                <p className="text-center text-[.875rem] font[400] leading-[1.8] text-[#788487] font-poppin">
                  Map where your photos
                  <br />
                  were taken and discover local
                  <br />
                  points of interest.
                </p>
              </div>
              <div className="py-[34px]">
                <DynamicButton priceBtn="border-pBlue bg-pBlue hover:border-indigo-700 hover:bg-indigo-700 text-[.75rem] tracking-[.1125rem] uppercase font-[600] font-poppin text-white px-10 py-[1rem]">
                  Download
                </DynamicButton>
              </div>
            </div>
            <div className="flex flex-col items-center shadow-xl border border-b-[#f0f0f0] bg-white rounded-[4px] duration-500 hover:scale-[104%]">
              <div className="mb-[20px] pt-[30px]">
                <TfiMarkerAlt className="w-[40px] h-[40px]" />
              </div>
              <div className="pb-[30px] border-b border-b-[#f0f0f0] text-center w-[70%]">
                <p className="text-[.6875rem] tracking-[0.0625rem] uppercase text-[#222] font-poppin font-[400]">
                  Starter
                </p>
              </div>
              <div className="py-[10px]">
                <h1 className="text-[4rem] font-[600] leading-[1.8] font-poppin flex items-start">
                  <p className="text-[1.125rem] font-[600] font-poppin pt-4">
                    $
                  </p>
                  <h1>69</h1>
                </h1>
              </div>
              <div>
                <p className="text-center text-[.875rem] font[400] leading-[1.8] text-[#788487] font-poppin">
                  Map where your photos
                  <br />
                  were taken and discover local
                  <br />
                  points of interest.
                </p>
              </div>
              <div className="py-[34px]">
                <DynamicButton priceBtn="border-pBlue bg-pBlue hover:border-indigo-700 hover:bg-indigo-700 text-[.75rem] tracking-[.1125rem] uppercase font-[600] font-poppin text-white px-10 py-[1rem]">
                  Download
                </DynamicButton>
              </div>
            </div>
          </div>
          <div className="w-[80%] mx-auto py-10">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              // slidesPerGroup={4}
              freeMode={true}
              // centeredSlides={true}
              loop={true}
              // loopFillGroupWithBlank={true}
              // pagination={{
              //   clickable: true,
              // }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation, FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="pb-10">
                  <img src={one} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={two} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={three} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={four} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={five} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={six} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={seven} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-10">
                  <img src={three} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const priceDeco = [
  {
    id: 1,
    description:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    name: "Ralph Waldo Emerson",
    imgUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/avatar/1.jpg",
  },
  {
    id: 2,
    description:
      "I don't work from drawings. I don't make sketches and drawings and color sketches into a final painting.",
    name: "Albert Elnstein",
    imgUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/avatar/1.jpg",
  },
  {
    id: 3,
    description:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    name: "Marilyn Monroe",
    imgUrl:
      "https://offsetcode.com/themes/boomerang/1.3/assets/images/avatar/1.jpg",
  },
];

export default Price;
