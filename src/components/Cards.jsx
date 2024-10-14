import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img1 from './Throwie/logoBlack.png'
import img2 from './Throwie/logoReversed.png'

function Cards() {
  
  return (
    <div className='cards'>
       <h1>Oferta</h1>
      <div className='Outline'>
        <div className='cards-container'>
                <ul className='cards-items'>
                    <CardItem 
                    src={img1}
                    hoverSrc={img2}
                    text='Item'
                    label='label'
                    path=''
                    />
                  <CardItem 
                    src={img1}
                    hoverSrc={img2}
                    text='Item'
                    label='label'
                    path=''
                    />
                    <CardItem 
                    src={img1}
                    hoverSrc={img2}
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