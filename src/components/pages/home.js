import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import SomeSection from '../SomeSection'

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <SomeSection />
            <Footer />
        </>
    )
}

export default Home;