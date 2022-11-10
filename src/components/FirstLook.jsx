import React, { useEffect, useState } from 'react'
import AutoNumber from './AutoNumber'
import CountedUp from './CountedUp'
import Creative from './Creative'
import Digital from './Digital'
import Flexible from './Flexible'
import Footer from './Footer'
import Home from './Home'
import Latest from './Latest'
import PeopleImage from './PeopleImage'
import Price from './Price'
import YourSite from './YourSite'
import Nav from './Nav'
import { Waypoint } from 'react-waypoint'

const FirstLook = () => {

    // const [style, setStyle] = useState('h-[72px] text-white')



    // const leave = () => {
    //     if (scrollPosition > -1) {
    //         setStyle('h-[60px] text-black')
    //     }
    // }


    return (
        <>
            <Nav />
            <Home />
            <YourSite />
            <Digital />
            <Flexible />
            <Creative />
            <Price />
            <Latest />
            <CountedUp />
            <PeopleImage />
            <Footer />
        </>
    )
}

export default FirstLook