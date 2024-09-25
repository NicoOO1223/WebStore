import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'> 
      <video src='' autoPlay loop muted/>
      <h1>WOOOOOW</h1>
      <p>some text here</p>
      <div className='hero-btns'>
        <Button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            guzik
        </Button>

        <Button className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            guzik
        </Button>

      </div>
    </div>
  )
} 
 
export default HeroSection
