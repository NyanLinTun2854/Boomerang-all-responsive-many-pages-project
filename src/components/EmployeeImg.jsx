import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'

const EmployeeImg = ({ employeeUrl }) => {
    return (
        <div className='w-full relative rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-[10px] group'>
            <div className='w-full h-full'>
                <img src={employeeUrl} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full text-white employeeImg origin-top -z-10 duration-500 group-hover:z-50'>
                <div className='relative w-full h-full'>
                    <div className='absolute top-4 right-6 duration-500 ease-in-out group-hover:translate-y-[10px]'>
                        <div className='space-y-4'>
                            <AiOutlineTwitter />
                            <AiOutlineInstagram />
                            <FaPinterestP />
                        </div>
                    </div>
                    <div className='absolute bottom-10 left-6  duration-500 ease-in-out group-hover:translate-y-[10px]'>
                        <h5 className='text-[.8125rem] font-[500] font-poppin'>something</h5>
                        <p className='text-[.75rem] font-[400] font-poppin'>baby</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeImg