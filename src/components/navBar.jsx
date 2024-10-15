import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo from './Throwie/THROWIE_NAV.png';
import logoRed from './Throwie/THROWIE_NAV_RED.png';
import logoIgC from './Throwie/Svg/ig-color.svg';
import logoIg from './Throwie/Svg/ig-black.svg';
import logoYtC from './Throwie/Svg/yt-color.svg';
import logoYt from './Throwie/Svg/yt-black.svg';
import logoFbC from './Throwie/Svg/f-color.svg';
import logoFb from './Throwie/Svg/f-black.svg';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [stickyNavbar, setNavbarSticky] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setlastScrollY] = useState(0);
    const [logoSrc, setLogoSrc] = useState(logo);
    const [igSrc, setIgSrc] = useState(logoIg);
    const [ytSrc, setYtSrc] = useState(logoYt);
    const [fbSrc, setFbSrc] = useState(logoFb);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleLogoHover = () => setLogoSrc(logoRed);
    const handleLogoLeave = () => setLogoSrc(logo);

    const handleIgHover = () => setIgSrc(logoIgC);
    const handleIgLeave = () => setIgSrc(logoIg);

    const handleFbHover = () => setFbSrc(logoFbC);
    const handleFbLeave = () => setFbSrc(logoFb);

    const handleYtHover = () => setYtSrc(logoYtC);
    const handleYtLeave = () => setYtSrc(logoYt);

    const handleScroll = () => {
        setNavbarSticky(window.scrollY > 800);

        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setlastScrollY(window.scrollY);
    };

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
                    <img className='logo-img' src={logoSrc} alt='Logo' onMouseEnter={handleLogoHover} onMouseLeave={handleLogoLeave} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className='nav-items-left'>
                    <img className='logo' src={igSrc} alt='Instagram' onMouseEnter={handleIgHover} onMouseLeave={handleIgLeave} />
                    <img className='logo' src={ytSrc} alt='YouTube' onMouseEnter={handleYtHover} onMouseLeave={handleYtLeave} />
                    <img className='logo' src={fbSrc} alt='Facebook' onMouseEnter={handleFbHover} onMouseLeave={handleFbLeave} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='oferta' className={stickyNavbar ? 'nav-links-sticky' : 'nav-links'} onClick={closeMobileMenu}>
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
