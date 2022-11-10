import React from 'react'

const AboutHero = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center items-center relative aboutBgDesktop'>
            {/* <img src={heroBgDesktop} className='absolute w-full h-full object-fit mix-blend-overlay' alt="" /> */}
            <div className='color-overlay'></div>
            <div className='w-[80%] h-full mx-auto text-white font-poppin'>
                <h1 className='text-[4rem] font-[600] text-center px-6 mb-4 leading-[80px]'>We are a creative agency
                    based in New York</h1>
                <p className='text-[0.9375rem] font-[400] text-center mb-10 leading-7'>Creating digital products for creative people
                </p>
            </div>
        </div>
    )
}

export default AboutHero