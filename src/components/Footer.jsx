import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
  
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Menu</h2>
            <Link to='/'>Strona główna</Link>
            <Link to='/'>Oferta</Link>
            <Link to='/'>Newsletter</Link>
            <Link to='/'>Koszyk</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Informacje</h2>
            <Link to='/'>Zwroty</Link>
            <Link to='/'>Płatność</Link>
            <Link to='/'>Regulamin</Link>
            <Link to='/'>Polityka Prywatności</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Pomoc</h2>
            <Link to='/'>Kontakt</Link>
            <Link to='/'>Współpraca</Link>
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
          <small className='website-rights'>Throwie 2024 © Wszystkie prawa zastrzeżone</small>
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
