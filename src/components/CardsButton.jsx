import React, { useEffect, useState } from 'react'

const CardsButton = ({ allImage, setFiltered, activeGenre, setActiveGenre }) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActiveGenre()
    }

    const className = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }



    useEffect(() => {
        if (activeGenre === "All") {
            setFiltered(allImage)
            return
        }
        const final = allImage.filter((Image, index) => Image.genre.includes(activeGenre))

        setFiltered(final)
    }, [activeGenre])

    console.log('text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]')
    return (
        <>
            <button className='text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]' onClick={() => { setActiveGenre("All"); setActive(pre => !pre) }}>All &nbsp; &nbsp; /</button>
            <button className='text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]' onClick={() => { setActiveGenre("Branding"); setActive(pre => !pre) }}>Branding &nbsp; &nbsp; /</button>
            <button className='text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]' onClick={() => setActiveGenre("Digital")}>Digital &nbsp; &nbsp; /</button>
            <button className='text-cardActive font-playFair italic opacity-[0.6] text-[.875rem] font-[400]' onClick={() => setActiveGenre("Packaging")}>Packaging &nbsp; &nbsp;</button>
        </>
    )
}

export default CardsButton