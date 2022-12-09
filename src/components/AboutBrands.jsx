import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";
import four from "../img/4.png";
import five from "../img/5.png";
import six from "../img/6.png";
import seven from "../img/7.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgBack from "../img/heroBgDesktop.jpg";

import { Autoplay, Pagination, Navigation } from "swiper";

const AboutBrands = () => {
  return (
    <div className="w-full h-auto bg-[#f8f8f8]">
      <div className="w-[80%] mx-auto pt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
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
  );
};

export default AboutBrands;
