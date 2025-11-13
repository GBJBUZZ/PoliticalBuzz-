import React from 'react';

const Navbar = ({ currentLang, onLanguageChange, content }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollBy(0, -100);
    }
  };

  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
          <img 
            src="https://rukminim2.flixcart.com/image/480/480/xif0q/poster/p/y/1/large-poster-bjp-logo-bhartiya-janta-party-sl-9485-large-poster-original-imah3jbsjsn4vfta.jpeg?q=90" 
            alt="BJP Logo" 
            className="bjp-logo me-2"
          />
          <span className="fw-bold text-dark-blue">Pankaj Rajesh Bhoyar</span>
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button 
                className="nav-link border-0 bg-transparent" 
                onClick={(e) => handleNavClick(e, '#home')}
                style={{cursor: 'pointer'}}
              >
                {content['nav-home']}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link border-0 bg-transparent" 
                onClick={(e) => handleNavClick(e, '#biography')}
                style={{cursor: 'pointer'}}
              >
                {content['nav-bio']}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link border-0 bg-transparent" 
                onClick={(e) => handleNavClick(e, '#achievements')}
                style={{cursor: 'pointer'}}
              >
                {content['nav-achievements']}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link border-0 bg-transparent" 
                onClick={(e) => handleNavClick(e, '#vision')}
                style={{cursor: 'pointer'}}
              >
                {content['nav-vision']}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link border-0 bg-transparent" 
                onClick={(e) => handleNavClick(e, '#media')}
                style={{cursor: 'pointer'}}
              >
                {content['nav-media']}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link border-0 bg-transparent" 
                onClick={(e) => handleNavClick(e, '#contact')}
                style={{cursor: 'pointer'}}
              >
                {content['nav-contact']}
              </button>
            </li>
          </ul>

          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <div className="lang-switch me-3" role="button">
              <span 
                className={`lang-option ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => onLanguageChange('en')}
              >
                EN
              </span> | 
              <span 
                className={`lang-option ${currentLang === 'mr' ? 'active' : ''}`}
                onClick={() => onLanguageChange('mr')}
              >
                मराठी
              </span>
            </div>

            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mx-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white mx-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white mx-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" className="text-white mx-1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;