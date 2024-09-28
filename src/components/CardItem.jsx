import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards-item'>
        <Link className='cards-item-link' to={props.link}>
        <figure className='cards-item-picwrap' data-category={props.label}>
            <img
            className='cards-item-img'
            src={props.src}
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
