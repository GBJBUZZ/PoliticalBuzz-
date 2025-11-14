import React from 'react';

const Navbar = ({ currentLang, onLanguageChange, content }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top py-3">
      <div className="container">
        <a className="navbar-brand" href="#hero-carousel" onClick={(e) => handleNavClick(e, '#hero-carousel')}>
          {currentLang === 'mr' ? 'शिवेश कडाव' : 'Shivesh Kadao'}
        </a>
        
        {/* Language Switch */}
        <div className="language-switcher me-3">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn btn-sm ${currentLang === 'mr' ? 'btn-primary-custom' : 'btn-outline-secondary'}`}
              onClick={() => onLanguageChange('mr')}
            >
              मराठी
            </button>
            <button
              type="button"
              className={`btn btn-sm ${currentLang === 'en' ? 'btn-primary-custom' : 'btn-outline-secondary'}`}
              onClick={() => onLanguageChange('en')}
            >
              English
            </button>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {content.navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  className="nav-link" 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.text}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a 
                className="nav-link btn btn-donate-nav ms-lg-3" 
                href="#donate"
                onClick={(e) => handleNavClick(e, '#donate')}
              >
                {content.donateButton}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;