import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Achievements from './components/Achievements';
import Vision from './components/Vision';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data
import { content, heroSlides } from './data/content';

function App() {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }, []);

  const handleLanguageChange = (lang) => {
    console.log('Changing language to:', lang);
    setCurrentLang(lang);
  };

  const currentContent = content[currentLang];
  
  // Debug: Check if content is loading properly
  useEffect(() => {
    console.log('Current Language:', currentLang);
    console.log('Available Content Keys:', Object.keys(currentContent));
  }, [currentLang, currentContent]);

  return (
    <div className="App">
      <Navbar 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange}
        content={currentContent}
      />
      <Hero 
        currentLang={currentLang}
        content={currentContent}
        heroSlides={heroSlides}
      />
      <Biography content={currentContent} />
      <Achievements content={currentContent} />
      <Vision content={currentContent} />
      <Media content={currentContent} />
      <Contact content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}

export default App;