import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const AboutEasy = () => {
    return (
        <div className='w-full h-auto font-poppin pt-[120px] pb-[100px] border-b border-[#f0f0f0]'>
            <div className='w-[90%] mx-auto flex justify-center items-center'>
                <div className='w-[50%] h-full'>
                    <div className='w-[100%] px-4 h-full'>
                        <img src="https://offsetcode.com/themes/boomerang/1.3/assets/images/main/about-4.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-[50%] h-full flex justify-center pl-[60px]'>
                    <div>
                        <div>
                            <h1 className='text-[2rem] leading-[1.3] text-[#222] font-[400]'>Easy and Simple</h1>
                        </div>
                        <div className='my-[1rem]'>
                            <p className='text-[.9375rem] font-[400] tracking-[.01875rem] leading-[1.8] text-[#788487]'>
                                See how your users experience your website in realtime
                                <br />or view trends to see any changes in performance.
                            </p>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex justify-start items-center text-[.875rem] leading-[1.8] font-[400] text-[#788487] mb-[7px]'>
                                <BsArrowRight className='text-[1rem]' />
                                <p className='pl-8'>Web Design</p>
                            </div>
                            <div className='flex justify-start items-center text-[.875rem] leading-[1.8] font-[400] text-[#788487] mb-[7px]'>
                                <BsArrowRight className='text-[1rem]' />
                                <p className='pl-8'>Web Applications</p>
                            </div>
                            <div className='flex justify-start items-center text-[.875rem] leading-[1.8] font-[400] text-[#788487] mb-[7px]'>
                                <BsArrowRight className='text-[1rem]' />
                                <p className='pl-8'>Digital Strategy</p>
                            </div>
                            <div className='flex justify-start items-center text-[.875rem] leading-[1.8] font-[400] text-[#788487] mb-[7px]'>
                                <BsArrowRight className='text-[1rem]' />
                                <p className='pl-8'>Information Architecture</p>
                            </div>
                            <div className='flex justify-start items-center text-[.875rem] leading-[1.8] font-[400] text-[#788487]'>
                                <BsArrowRight className='text-[1rem]' />
                                <p className='pl-8'>Copy Writing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutEasy