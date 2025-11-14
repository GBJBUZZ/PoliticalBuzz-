import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/App.css';

// Components
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import Timeline from './components/Timeline';
import Issues from './components/Issues';
import Footer from './components/Footer';

// Data
import { content } from './data/content';

function App() {
  const [currentLang, setCurrentLang] = useState('mr'); // Default to Marathi

  useEffect(() => {
    // Smooth scrolling functionality
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
  };

  const currentContent = content[currentLang];

  return (
    <div className="App">
      <Navbar 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        content={currentContent}
      />
      <HeroCarousel content={currentContent} />
      <About content={currentContent} />
      <Timeline content={currentContent} />
      <Issues content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}

export default App;