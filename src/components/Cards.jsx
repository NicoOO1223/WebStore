import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img1 from './Throwie/MAIN LOGO FORMAT PNG.png'

function Cards() {
  return (
    <div className='cards'>
        <h1>Oferta</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem 
                    src={img1}
                    text='Item'
                    label='label'
                    path=''
                    />
                    <CardItem 
                    src={img1}
                    text='Item'
                    label='label'
                    path=''
                    />
                    <CardItem 
                    src={img1}
                    text='Item'
                    label='label'
                    path=''
                    />
                    <CardItem 
                    src={img1}
                    text='Item'
                    label='label'
                    path=''
                    />
                    <CardItem 
                    src={img1}
                    text='Item'
                    label='label'
                    path=''
                    />
                    <CardItem 
                    src={img1}
                    text='Item'
                    label='label'
                    path=''
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
