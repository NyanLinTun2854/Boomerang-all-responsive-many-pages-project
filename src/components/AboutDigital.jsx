import React from 'react'
import Titile from './Titile'
import Expression from './Expression'
import digitalDesktop from '../img/aboutDigitalDesktop.jpg'
import digitalMobile from '../img/aboutDigitalMobile.jpg'

const AboutDigital = () => {
    return (
        <div className='w-full h-full font-poppin pt-[120px] pb-[100px]'>
            <div className='text-center'>
                <Titile>Digital Design.</Titile>
                <Expression>
                    See how your users experience your website in realtime or view
                    <br />trends to see any changes in performance over time.
                </Expression>
            </div>
            <div className='w-[90%] mx-auto h-[538px] flex justify-between pt-[60px]'>
                <div className='w-[67%] h-full rounded-[4px] overflow-hidden'>
                    <img src={digitalDesktop} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='w-[30%] h-full rounded-[4px] overflow-hidden'>
                    <img src={digitalMobile} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
            <div className='w-[90%] mx-auto h-auto grid grid-cols-3 justify-items-center mt-[40px]'>
                <div className='flex flex-col pt-6'>
                    <div className='flex items-center'>
                        <h3 className='text-[1.875rem] font-[500] leading-[1.3] text-[#222] pr-2 mb-[5px]'>01</h3>
                        <p className='text-[.875rem] font-[500] leading-[1.3] text-[#222]'>Development</p>
                    </div>
                    <div className='text-[.875rem] font-[400] leading-[1.8] text-[#788487]'>
                        See how your users experience your website in realtime or view trends to see any changes in performance over time.
                    </div>
                </div>
                <div className='flex flex-col pt-6'>
                    <div className='flex items-center'>
                        <h3 className='text-[1.875rem] font-[500] leading-[1.3] text-[#222] pr-2 mb-[5px]'>02</h3>
                        <p className='text-[.875rem] font-[500] leading-[1.3] text-[#222]'>Branding</p>
                    </div>
                    <div className='text-[.875rem] font-[400] leading-[1.8] text-[#788487]'>
                        See how your users experience your website in realtime or view trends to see any changes in performance over time.
                    </div>
                </div>
                <div className='flex flex-col pt-6'>
                    <div className='flex items-center'>
                        <h3 className='text-[1.875rem] font-[500] leading-[1.3] text-[#222] pr-2 mb-[5px]'>03</h3>
                        <p className='text-[.875rem] font-[500] leading-[1.3] text-[#222]'>Web Design</p>
                    </div>
                    <div className='text-[.875rem] font-[400] leading-[1.8] text-[#788487]'>
                        See how your users experience your website in realtime or view trends to see any changes in performance over time.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDigital