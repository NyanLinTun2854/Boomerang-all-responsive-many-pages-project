import React from 'react'
import PeopleImg from '../img/people.jpg'

const PeopleImage = () => {
    return (
        <div className='w-full h-auto'>
            <img src={PeopleImg} className='w-full h-full object-cover' alt="" />
        </div>
    )
}

export default PeopleImage