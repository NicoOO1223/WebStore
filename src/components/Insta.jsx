import React from 'react'
import img1 from './Throwie/logoBlack.png' 
import './Insta.css'

function Insta() {
  return (
    <div className='InstaContainer'>
      <div className='Outline'>
        <h1 class='Insta-text' data-after=''>Wbijaj na instagrama!</h1>
        <div className='PicWrap'>
          <ul className='Pictures'>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img1' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img2' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img3' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img4' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img5' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img6' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img7' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img8' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img9' />
            </li>
            <li className='Picture'>
              <img className='Img' src={img1} alt='img10' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Insta
