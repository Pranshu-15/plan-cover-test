import React from 'react'
import Navbar from '../Navbar'
import './style.css'
import HeroImageSection from '../HeroImageSection'
import SectionTwo from '../SectionTwo'
import SectionThree from '../SectionThree'
import SectionFour from '../SectionFour'
import SectionFive from '../SectionFive'
import SectionSix from '../SectionSix'
import SectionSeven from '../SectionSeven'
import SectionEight from '../SectionEight'
import Footer from '../Footer'

const Body = () => {
    return (
        <>
            <Navbar />
            <HeroImageSection />
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight/>
            <Footer/>

        </>
    )
}

export default Body
