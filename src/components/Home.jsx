import React from 'react'
import DynamicButton from './DynamicButton'
import heroBgDesktop from '../img/heroBgDesktop.jpg'

const Home = () => {
    return (
        <div className='w-full min-h-[100vh] flex justify-center items-center relative heroBgDesktop'>
            {/* <img src={heroBgDesktop} className='absolute w-full h-full object-fit mix-blend-overlay' alt="" /> */}
            <div className='color-overlay'></div>
            <div className='w-[80%] h-full mx-auto text-white font-poppin'>
                <h1 className='text-[4rem] font-[600] text-center px-6 mb-4 leading-[80px]'>Your customers will love you
                    one minute from now.</h1>
                <p className='text-[0.9375rem] font-[400] text-center mb-10 leading-7'>See how your users experience your website in realtime or view
                    <br />
                    trends to see any changes in performance over time.
                </p>
                <div className='text-center space-x-4'>
                    <DynamicButton btnGet='border-indigo-600 hover:border-indigo-700 bg-indigo-600 hover:bg-indigo-700 duration-500'>Get Started</DynamicButton>
                    <DynamicButton btnLearn='hover:bg-white hover:text-black duration-500'>Learn More</DynamicButton>
                </div>
            </div>
        </div>
    )
}

export default Home