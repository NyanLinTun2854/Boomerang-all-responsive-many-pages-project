import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import AboutAdventages from './AboutAdventages'
import AboutBrands from './AboutBrands'
import AboutCount from './AboutCount'
import AboutCreative from './AboutCreative'
import AboutDigital from './AboutDigital'
import AboutEasy from './AboutEasy'
import AboutHero from './AboutHero'
import AboutSwipe from './AboutSwipe'
import PeopleImage from './PeopleImage'
import Footer from './Footer'
import Nav from './Nav'

const AboutPage = () => {
    return (
        <>
            <Nav />
            <AboutHero />
            <AboutEasy />
            <AboutAdventages />
            <AboutCount />
            <AboutDigital />
            <AboutSwipe />
            <AboutCreative />
            <AboutBrands />
            <PeopleImage />
            <Footer />
        </>
    )
}

export default AboutPage