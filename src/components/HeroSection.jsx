import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='' autoPlay loop muted/>
        <h1>Stronka Throwie</h1>
        <p>Wideo here?</p>
        <div className='hero-btns'>
            <Button className='btns'
            buttonStyle='btn-normal'
            buttonSize='btn-large'
            >
                Oferta
            </Button>
            <Button className='btns'
            buttonStyle='btn-outline'
            buttonSize='btn-large'
            >
                Oferta
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
