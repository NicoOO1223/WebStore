import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Itemy</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src=''
              text='Item' 
              label='-90% :O'
              path='/services'
            />
             <CardItem 
              src=''
              text='Item' 
              label='-90% :O'
              path='/services'
            />
            <CardItem 
              src=''
              text='Item' 
              label='-90% :O'
              path='/services'
            />
            <CardItem 
              src=''
              text='Item' 
              label='-90% :O'
              path='/services'
            />
            <CardItem 
              src=''
              text='Item' 
              label='-90% :O'
              path='/services'
            />
            <CardItem 
              src=''
              text='Item' 
              label='-90% :O'
              path='/services'
            />
          </ul>
          
        </div>
      </div>     
    </div>
  );
}

export default Cards;
