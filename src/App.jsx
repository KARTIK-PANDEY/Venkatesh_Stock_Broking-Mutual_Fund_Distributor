import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SIPCalculator from './components/SIPCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <SIPCalculator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
