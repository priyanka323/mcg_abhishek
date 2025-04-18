

import React from 'react';
import Hero from './components/Hero';
import FlowWords from './components/FlowWords';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Hero />
      <Service/>
      
      <Pricing/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
