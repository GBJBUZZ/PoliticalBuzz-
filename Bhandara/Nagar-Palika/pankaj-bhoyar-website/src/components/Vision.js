import React, { useState, useEffect } from 'react';

const Vision = ({ content }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const visionCards = [
    {
      icon: 'fas fa-seedling',
      color: 'text-saffron',
      titleKey: 'vision-card-1-title',
      textKey: 'vision-card-1-text'
    },
    {
      icon: 'fas fa-graduation-cap',
      color: 'text-green',
      titleKey: 'vision-card-2-title',
      textKey: 'vision-card-2-text'
    },
    {
      icon: 'fas fa-heartbeat',
      color: 'text-saffron',
      titleKey: 'vision-card-3-title',
      textKey: 'vision-card-3-text'
    },
    {
      icon: 'fas fa-briefcase',
      color: 'text-green',
      titleKey: 'vision-card-4-title',
      textKey: 'vision-card-4-text'
    },
    {
      icon: 'fas fa-road',
      color: 'text-saffron',
      titleKey: 'vision-card-5-title',
      textKey: 'vision-card-5-text'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % visionCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [visionCards.length]);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % visionCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + visionCards.length) % visionCards.length);
  };

  const goToCard = (index) => {
    setCurrentCard(index);
  };

  return (
    <section id="vision" className="vision-section text-white py-5 py-md-5">
      <div className="container">
        <div data-aos="fade-down" data-aos-duration="1000">
          <h2 className="section-title text-white mb-4">{content['vision-title']}</h2>
          <blockquote className="blockquote display-5 fw-light fst-italic mb-5">
            <p className="mb-0">
              {content['vision-quote']}
            </p>
            <footer className="blockquote-footer text-white-50 mt-3">Shri Pankaj Bhoyar</footer>
          </blockquote>
        </div>

        {/* Vision Cards Slider */}
        <div className="vision-cards-container" data-aos="fade-up">
          <div 
            className="vision-cards-slider" 
            style={{ transform: `translateX(-${currentCard * 100}%)` }}
          >
            {visionCards.map((card, index) => (
              <div key={index} className="vision-card">
                <div className="vision-card-content">
                  <div className={`vision-card-icon ${card.color}`}>
                    <i className={card.icon}></i>
                  </div>
                  <h3 className="vision-card-title">{content[card.titleKey]}</h3>
                  <p className="vision-card-text">
                    {content[card.textKey]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Controls */}
          <div className="vision-slider-controls">
            <button className="vision-slider-btn" onClick={prevCard}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="vision-slider-dots">
              {visionCards.map((_, index) => (
                <div
                  key={index}
                  className={`vision-slider-dot ${index === currentCard ? 'active' : ''}`}
                  onClick={() => goToCard(index)}
                ></div>
              ))}
            </div>
            
            <button className="vision-slider-btn" onClick={nextCard}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Vision Statistics */}
        <div className="vision-stats" data-aos="fade-up" data-aos-delay="200">
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <span className="stat-number">{content['vision-stat-1']}</span>
                <span className="stat-text">{content['vision-stat-1-text']}</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <span className="stat-number">{content['vision-stat-2']}</span>
                <span className="stat-text">{content['vision-stat-2-text']}</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <span className="stat-number">{content['vision-stat-3']}</span>
                <span className="stat-text">{content['vision-stat-3-text']}</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item">
                <span className="stat-number">{content['vision-stat-4']}</span>
                <span className="stat-text">{content['vision-stat-4-text']}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Vision Images */}
        <div className="row mt-5" data-aos="fade-up" data-aos-delay="300">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80" 
                className="card-img-top" 
                alt="Rural Development" 
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title text-saffron">{content['vision-img-1-title']}</h5>
                <p className="card-text">{content['vision-img-1-text']}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80" 
                className="card-img-top" 
                alt="Youth Empowerment" 
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title text-green">{content['vision-img-2-title']}</h5>
                <p className="card-text">{content['vision-img-2-text']}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80" 
                className="card-img-top" 
                alt="Agricultural Development" 
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title text-saffron">{content['vision-img-3-title']}</h5>
                <p className="card-text">{content['vision-img-3-text']}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;