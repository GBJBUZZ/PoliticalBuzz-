import React, { useState, useEffect } from 'react';

const HeroCarousel = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === content.carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [content.carouselItems.length]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === content.carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? content.carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="hero-carousel" className="carousel slide">
      <div className="carousel-indicators">
        {content.carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#hero-carousel"
            className={index === activeIndex ? 'active' : ''}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {content.carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url('${item.backgroundImage}')` }}
          >
            <div className="carousel-caption container">
              <h1 className="text-uppercase">{item.title}</h1>
              <h3 className="mb-4">{item.subtitle}</h3>
              <a 
                href={item.buttonLink} 
                className="btn btn-primary-custom btn-lg"
                onClick={(e) => handleNavClick(e, item.buttonLink)}
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default HeroCarousel;