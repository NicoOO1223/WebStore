import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
  const [hovered, setHovered] = useState(false);


  return (
    <>
      <li className={hovered ? 'cards-item-hover' : 'cards-item'}>
        <Link className='cards-item-link' to={props.link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <figure className='cards-item-picwrap' data-category={props.label}>
            <img
            className='cards-item-img'
            src={hovered ? props.hoverSrc : props.src}
            />
        </figure>
        <div className='cards-item-info'>
            <h5 className='cards-item-text'>{props.text}</h5>
        </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
