import React, { useState } from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material'; // Import Icons

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='NavContainer'>
            <div className='logoDiv'>
                <img src={logo} alt="logo" className='logoclass' />
            </div>

            {/* This div uses your .linkDiv for desktop and .nav-active for mobile */}
            <div className={`${isOpen ? "nav-active" : "linkDiv1"}`}>
                <Link className='whyT' to="/whytecc" onClick={() => setIsOpen(false)}>Why TeCc</Link>
                <Link className='whyT' to="/goforgrowth" onClick={() => setIsOpen(false)}>Go for growth</Link>
                <Link className='whyT' to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                
            </div>

            <div className='linkdDiv2'>
                {/* These stay visible on desktop, hidden on mobile via CSS if desired */}
                <Link className='Login desktop-only' to="/login">Log in</Link>
                <a className='linkbutton desktop-only' href="#">Get Started</a>
                
                {/* Hamburger Button - Only visible on mobile */}
                <button className='hamburger-btn' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <Close /> : <Menu />}
                </button>
            </div>
        </div>
    );
}

export default Nav;