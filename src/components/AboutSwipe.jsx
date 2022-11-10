import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bgBack from '../img/heroBgDesktop.jpg'

import { Autoplay, Pagination, Navigation } from "swiper";

const AboutSwipe = () => {
    return (
        <div className='w-full h-[100vh] bgAboutSwipe'>
            <div className='color-overlay-2'></div>
            <div div className='w-[80%] h-full mx-auto flex justify-center items-center'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-[400px]"
                >
                    {
                        priceDeco.map(Deco => <SwiperSlide>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='flex flex-col items-center'>
                                    <div className='w-[80px] h-[80px] rounded-full ring-8 
                                    ring-lightWhite overflow-hidden'>
                                        <img src={Deco.imgUrl} className='w-full h-full object-cover' alt="" />
                                    </div>
                                    <div className='w-[80%] h-auto text-center text-white py-[20px]'>
                                        <p className='text-[1.0625rem] tracking-[.03125rem] font-[400] font-poppin mb-[1rem]'>{Deco.description}</p>
                                        <p className='text-[.885rem] font-[400] tracking-[.03125rem]'>{Deco.name}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div >
    )
}

const priceDeco = [
    {
        id: 1,
        description: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        name: "Ralph Waldo Emerson",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/avatar/1.jpg"
    },
    {
        id: 2,
        description: "I don't work from drawings. I don't make sketches and drawings and color sketches into a final painting.",
        name: "Albert Elnstein",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/avatar/1.jpg"
    },
    {
        id: 3,
        description: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        name: "Marilyn Monroe",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/avatar/1.jpg"
    }
]

export default AboutSwipe