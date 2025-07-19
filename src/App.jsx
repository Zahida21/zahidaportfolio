import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import Footer from './components/Footer';

const App = () => {
  return (
   
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
         <StarsCanvas />

          <Footer/>
        </div>
      </div>
 
  );
};

export default App;
