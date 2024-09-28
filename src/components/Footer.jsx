import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
  
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Section</h2>
            <Link to='/sign-up'>sign up</Link>
            <Link to='/'>item 1</Link>
            <Link to='/'>item 2</Link>
            <Link to='/'>item 3</Link>
            <Link to='/'>item 4</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Section</h2>
            <Link to='/sign-up'>sign up</Link>
            <Link to='/'>item 1</Link>
            <Link to='/'>item 2</Link>
            <Link to='/'>item 3</Link>
            <Link to='/'>item 4</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Section</h2>
            <Link to='/sign-up'>sign up</Link>
            <Link to='/'>item 1</Link>
            <Link to='/'>item 2</Link>
            <Link to='/'>item 3</Link>
            <Link to='/'>item 4</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Section</h2>
            <Link to='/sign-up'>sign up</Link>
            <Link to='/'>item 1</Link>
            <Link to='/'>item 2</Link>
            <Link to='/'>item 3</Link>
            <Link to='/'>item 4</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              logo
            </Link>
          </div>
          <small className='website-rights'>website rights</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
