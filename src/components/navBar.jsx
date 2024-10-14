import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logoBlack from './Throwie/logoBlack.png'
import logoWhite from './Throwie/THROWIE_NAV_WHITE.png'
import logo from './Throwie/THROWIE_NAV.png'
import logoRed from './Throwie/THROWIE_NAV_RED.png'
import logoInstaC from './Throwie/ig-color.png'
import logoInsta from './Throwie/ig-black.png'


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [stickyNavbar, setNavbarSticky] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setlastScrollY] = useState(0);
    const [logoSrc, setLogoSrc] = useState(logo);
    const [instaSrc, setInstaSrc] = useState(logoInsta)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogoHover = () => {
            setLogoSrc(logoRed);
            setInstaSrc(logoInstaC)
    };

    const handleLogoLeave = () => {
        setLogoSrc(logo);
        setInstaSrc(logoInsta)
    }

    const handleInstaHover = () => {
        setLogoSrc(logoRed);
        setInstaSrc(logoInstaC)
    }
    const handleInstaLeave = () => {
        setLogoSrc(logo);
        setInstaSrc(logoInsta)
    }

    const handleScroll = () => {
        if(window.scrollY > 800) {
            setNavbarSticky(true);
        } else {
            setNavbarSticky(false);
        }
    
        if (window.scrollY >= (lastScrollY)) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setlastScrollY(window.scrollY);
    }

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', showButton);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${stickyNavbar ? 'sticky-navbar' : ''} ${showNavbar ? 'navbar-show' : 'navbar-hidden'}`}>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img className='logo-img' src={logoSrc} onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave}></img> 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className='nav-items-left'>
                <img className='logo-insta' src={instaSrc} onMouseEnter={handleInstaHover} onMouseLeave={handleInstaLeave}></img>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                    <li className='nav-item'>
                        <Link to='/' className={stickyNavbar ? 'nav-links-sticky' : 'nav-links'} onClick={closeMobileMenu}>
                            Oferta
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className={stickyNavbar ? 'nav-links-sticky' : 'nav-links'} onClick={closeMobileMenu}>
                            Newsletter
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className={stickyNavbar ? 'nav-links-sticky' : 'nav-links'} onClick={closeMobileMenu}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            
                {button && <Button buttonStyle='btn-outline'>Sprawdz</Button>}
            </div>
        </nav>
    );
}

export default NavBar;