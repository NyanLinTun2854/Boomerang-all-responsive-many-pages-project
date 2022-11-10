import React from 'react'

const ActiveIconDescription = ({ icon, title, description }) => {
    return (
        <>
            <div className='w-full h-auto group/image cursor-pointer'>
                <div className='w-full h-[68px] flex justify-center items-center mb-3'>
                    <icon className='w-[48px] h-[48px] text-pBlue font-[400] translate-y-0 duration-500 group-hover/image:translate-y-[-10px]' />
                </div>
                <div className='flex flex-col items-center'>
                    <h5 className='text-[.875rem] font-[500] mb-4'>{title}</h5>
                    <p className='text-[.875rem] font-[400] text-[#788487] text-center'>
                        {description}
                    </p>
                    <a href="#" className='text-[.875rem] font-[400] text-pBlue mt-3'>Read more</a>
                </div>
            </div>
        </>
    )
}

export default ActiveIconDescription