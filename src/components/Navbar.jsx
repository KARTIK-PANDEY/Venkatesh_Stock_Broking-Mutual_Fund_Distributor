import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#home" className="logo">
                    Shri Venkatesh <span className="logo-highlight">Stock Broking</span>
                </a>
                <div className="menu-icon" onClick={toggleMenu}>
                    {/* Simple Hamburger/Close Icon with pure CSS or text if no FA */}
                    <span style={{fontSize: '30px', cursor: 'pointer'}}>
                        {isOpen ? '✕' : '☰'}
                    </span>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item"><a href="#home" className="nav-link" onClick={toggleMenu}>Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link" onClick={toggleMenu}>About Us</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link" onClick={toggleMenu}>Services</a></li>
                    <li className="nav-item"><a href="#calculators" className="nav-link" onClick={toggleMenu}>Calculators</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
                    <li className="nav-item">
                        <a href="https://investospeed.co.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary login-btn">Client Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
