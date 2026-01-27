import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SIPCalculator from '../components/SIPCalculator';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <SIPCalculator />
            <Contact />
        </div>
    );
};

export default Home;
