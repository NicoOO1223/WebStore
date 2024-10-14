import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Insta from '../Insta'
import Footer from '../Footer'
import Newsletter from '../Newsletter'
import About from '../About'


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Newsletter />
      <Insta />
      <Footer />
    </>
  )
}

export default Home
