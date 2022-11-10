import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
import one from '../img/one.jpg'
import two from '../img/two.jpg'
import three from '../img/three.jpg'
import four from '../img/four.jpg'
import five from '../img/five.jpg'
import six from '../img/six.jpg'

const Footer = () => {
    return (
        <div className='w-full h-auto text-white bg-[#222] font-poppin'>
            <div className='w-[90%] mx-auto grid grid-cols-4  pt-[90px] pb-[70px]'>
                <div className='w-full h-full'>
                    <h4 className='text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]'>About Us</h4>
                    <p className='text-[.8125rem] font-[400] leading-[1.8] text-[#788487] mb-[1rem]'>
                        Map where your photos were taken
                        <br />and discover local points of interest.
                        <br />Map where your photos.
                    </p>
                    <p className='text-[.8125rem] font-[400] leading-[1.8] text-[#788487] mb-[1rem]'>
                        Location: 12 London Avenue, Suite 18
                        <br />E-mail: support@theme.com
                        <br />Phone: 8 800 123 4567
                    </p>
                    <div className='w-[50%] mr-auto flex justify-between'>
                        <AiOutlineTwitter />
                        <AiOutlineInstagram />
                        <FaFacebookF />
                        <FaPinterestP />
                    </div>
                </div>
                <div className='w-full h-full pr-8'>
                    <h4 className='text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]'>Recent Posts</h4>
                    <div className='pb-[14px] border-b border-b-[#2f2f2f]'>
                        <p className='text-[#cecece] text-[.8125rem] font-[400] leading-[1.8]'>
                            Map where your photos were taken
                            <br />and discover local points.
                        </p>
                        <p className='text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8px] pt-2'>
                            May 8, 2018
                        </p>
                    </div>
                    <div className='py-[14px]'>
                        <p className='text-[#cecece] text-[.8125rem] font-[400] leading-[1.8]'>
                            Map where your photos were taken
                            <br />and discover local points.
                        </p>
                        <p className='text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8px] pt-2'>
                            April 7, 2018
                        </p>
                    </div>
                    <div className='pt-[14px]'>
                        <p className='text-[#cecece] text-[.8125rem] font-[400] leading-[1.8]'>
                            Map where your photos were taken
                            <br />and discover local points.
                        </p>
                        <p className='text-[.6875rem] text-[#a3a6a8] font-[400] leading-[1.8px] pt-2'>
                            September 7, 2018
                        </p>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <h4 className='text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]'>Twitter Feeds</h4>
                </div>
                <div className='w-full h-full'>
                    <h4 className='text-[.6875rem] font-[700] leading-[2.6px] uppercase mb-[24px] tracking-[2.6px]'>Porfolio</h4>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-2'>
                        <div className='w-full h-full'>
                            <img src={one} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full h-full'>
                            <img src={two} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full h-full'>
                            <img src={three} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full h-full'>
                            <img src={four} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full h-full'>
                            <img src={five} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='w-full h-full'>
                            <img src={six} className='w-full h-full object-cover' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto text-center py-[22px] border-t border-[#2f2f2f]'>
                <p className='text-[#788487] text-[.75rem] font-[400] leading-[1.8]'>
                    © 2018 Boomerang, All Rights Reserved. Design with love by <span className='text-[#cecece]'>2theme</span>
                </p>
            </div>
        </div>
    )
}

export default Footer