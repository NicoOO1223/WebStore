import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logoBlack from './Throwie/logoBlack.png'
import logoWhite from './Throwie/logoWhite.png'

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [stickyNavbar, setNavbarSticky] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setlastScrollY] = useState(0);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleScroll = () => {
        if(window.scrollY > 100) {
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
                    <img className='logo-img' src={stickyNavbar ? logoWhite : logoBlack }></img> 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Oferta
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Info
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Newsletter?
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn-outline'>Sprawdz</Button>}
            </div>
        </nav>
    );
}

export default NavBar;