// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Empowering Your <br />
                    <span className="text-highlight">Financial Future</span>
                </h1>
                <p className="hero-subtitle">
                    Shri Venkatesh Stock Broking Company is your trusted partner for Mutual Funds, SIPs, and strategic wealth creation.
                </p>
                <div className="hero-btns">
                    <a href="#services" className="btn btn-primary">Our Services</a>
                    <a href="#contact" className="btn btn-outline">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
