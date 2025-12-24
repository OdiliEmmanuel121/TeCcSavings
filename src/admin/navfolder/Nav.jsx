import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav className='NavContainer'>
            <div className='NavContent'>
                <div className='logoDiv'>
                    <Link to="/">
                        <img src={logo} alt="Tecc Logo" className='logoclass' />
                    </Link>
                </div>

                {/* Main Navigation Links */}
                <div className={`linkDiv1 ${isOpen ? "nav-active" : ""}`}>
                    <Link className='navLink' to="/">Why TeCc</Link>
                    <Link className='navLink' to="/goforgrowth">Go for growth</Link>
                    <Link className='navLink' to="/blog">Blog</Link>
                    
                        <div className="mobile-only-actions">
                            <Link className='Login' to="/login">Log in</Link>
                            <Link className='GetStartedBtn' to="/getstarted">Get Started</Link>
                        </div> 
                </div>

                {/* Desktop Actions & Hamburger */}
                <div className='linkdDiv2'>
                    <Link className='Login desktop-only' to="/login">Log in</Link>
                    <Link className='GetStartedBtn desktop-only' to="/getstarted">Get Started</Link>

                    <button
                        className='hamburger-btn'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <Close /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
        </nav>
    );
}

export default Nav;