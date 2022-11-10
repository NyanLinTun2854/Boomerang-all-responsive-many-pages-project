import React from 'react'
import Titile from './Titile'
import Expression from './Expression'
import { AiOutlineLayout } from 'react-icons/ai'
import { TfiCup } from 'react-icons/tfi'
import { BiServer } from 'react-icons/bi'

const Flexible = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center font-poppin leading-[1.8] pt-[120px] pb-[100px] bg-[#f8f8f8]'>
            <div className='w-[90%] flex justify-between items-center px-4'>
                <div className='w-[50%] h-[891px] px-2'>
                    <img src="https://offsetcode.com/themes/boomerang/1.3/assets/images/main/ipad.png" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='w-[50%] flex justify-center items-center pl-20'>
                    <div className='flex flex-col '>
                        <div>
                            <div className='w-full text-start'>
                                <Titile>Flexible & Lightweight.</Titile>
                                <Expression>
                                    Map where your photos were taken and discover local
                                    <br />
                                    points of interest. Map where your photos. Map where
                                    <br />your photos were taken and discover.
                                </Expression>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mt-[50px]'>
                            <div className='w-full h-auto group/image cursor-pointer flex justify-start'>
                                <div className='flex'>
                                    <div className='w-auto h-[68px] mb-3 pr-6'>
                                        <AiOutlineLayout className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                                    </div>
                                    <div className='flex flex-col pt-[2px]'>
                                        <h5 className='text-[.875rem] font-[500] mb-2'>Visual Composer</h5>
                                        <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                            Map where your photos were taken and discover local
                                            <br />
                                            points of interest. Map where your photos. Map where
                                            <br />your photos were taken and discover.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto group/image cursor-pointer flex justify-start pt-8'>
                                <div className='flex'>
                                    <div className='w-auto h-[68px] mb-3 pr-6'>
                                        <TfiCup className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                                    </div>
                                    <div className='flex flex-col pt-[2px]'>
                                        <h5 className='text-[.875rem] font-[500] mb-2'>Visual Composer</h5>
                                        <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                            Map where your photos were taken and discover local
                                            <br />
                                            points of interest. Map where your photos. Map where
                                            <br />your photos were taken and discover.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto group/image cursor-pointer flex justify-start pt-8'>
                                <div className='flex'>
                                    <div className='w-auto h-[68px] mb-3 pr-6'>
                                        <BiServer className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                                    </div>
                                    <div className='flex flex-col pt-[2px]'>
                                        <h5 className='text-[.875rem] font-[500] mb-2'>Visual Composer</h5>
                                        <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                            Map where your photos were taken and discover local
                                            <br />
                                            points of interest. Map where your photos. Map where
                                            <br />your photos were taken and discover.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flexible