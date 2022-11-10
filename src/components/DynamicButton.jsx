import React from 'react'

const DynamicButton = ({ children, btnGet, btnLearn, btnCreative, priceBtn }) => {
    return (
        <button className={`rounded-full px-10 py-[1rem] border-2 ${btnCreative}  text-[0.8rem] uppercase tracking-wider font-[600] ${btnGet} ${btnLearn} ${priceBtn} `}> {children}</button >
    )
}

export default DynamicButton