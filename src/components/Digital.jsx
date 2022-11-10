import React from 'react'
import Cards from './Cards'
import CardsButton from './CardsButton'
import Expression from './Expression'
import Titile from './Titile'
import { AiOutlineLayout } from 'react-icons/ai'
import { TfiHeadphone, TfiImage } from 'react-icons/tfi'
import { CgBox } from 'react-icons/cg'
import { TfiDesktop } from 'react-icons/tfi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { TfiSlice } from 'react-icons/tfi'

const Digital = () => {
    return (
        <div className='w-full h-full  font-poppin pt-[120px]'>
            <div className='w-[80%] text-center mx-auto'>
                <Titile>Digital Design.</Titile>
                <Expression>
                    See how your users experience your website in realtime or view
                    <br />
                    trends to see any changes in performance over time.
                </Expression>
            </div>
            <div className='w-full'>
                <Cards />
            </div>
            <div className='w-full grid grid-cols-3 pt-[120px] pb-[100px]'>
                <div className='w-full h-auto group/image cursor-pointer flex justify-start pl-20'>
                    <div>
                        <div className='w-full h-[68px] flex justify-start items-center mb-3'>
                            <AiOutlineLayout className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h5 className='text-[.875rem] font-[500] mb-4'>Visual Composer</h5>
                            <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                See how your users experience your website in
                                <br />
                                realtime or view trends to see any changes in
                                <br />
                                performance over time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto group/image cursor-pointer flex justify-start pl-20'>
                    <div>
                        <div className='w-full h-[68px] flex justify-start items-center mb-3'>
                            <TfiImage className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h5 className='text-[.875rem] font-[500] mb-4'>Visual Composer</h5>
                            <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                See how your users experience your website in
                                <br />
                                realtime or view trends to see any changes in
                                <br />
                                performance over time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto group/image cursor-pointer flex justify-start pl-20'>
                    <div>
                        <div className='w-full h-[68px] flex justify-start items-center mb-3'>
                            <CgBox className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h5 className='text-[.875rem] font-[500] mb-4'>Visual Composer</h5>
                            <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                See how your users experience your website in
                                <br />
                                realtime or view trends to see any changes in
                                <br />
                                performance over time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto group/image cursor-pointer flex justify-start pl-20 pt-[30px]'>
                    <div>
                        <div className='w-full h-[68px] flex justify-start items-center mb-3'>
                            <TfiHeadphoneAlt className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h5 className='text-[.875rem] font-[500] mb-4'>Visual Composer</h5>
                            <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                See how your users experience your website in
                                <br />
                                realtime or view trends to see any changes in
                                <br />
                                performance over time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto group/image cursor-pointer flex justify-start pl-20 pt-[30px]'>
                    <div>
                        <div className='w-full h-[68px] flex justify-start items-center mb-3'>
                            <TfiDesktop className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h5 className='text-[.875rem] font-[500] mb-4'>Visual Composer</h5>
                            <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                See how your users experience your website in
                                <br />
                                realtime or view trends to see any changes in
                                <br />
                                performance over time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto group/image cursor-pointer flex justify-start pl-20 pt-[30px]'>
                    <div>
                        <div className='w-full h-[68px] flex justify-start items-center mb-3'>
                            <TfiSlice className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h5 className='text-[.875rem] font-[500] mb-4'>Visual Composer</h5>
                            <p className='text-[.875rem] font-[400] text-[#788487] text-start leading-[1.8]'>
                                See how your users experience your website in
                                <br />
                                realtime or view trends to see any changes in
                                <br />
                                performance over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital