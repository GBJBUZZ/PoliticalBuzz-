import React, { useState, useEffect } from 'react';
import AOS from 'aos';

const Hero = ({ currentLang, content, heroSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const currentSlideData = heroSlides[currentSlide][currentLang];

  return (
    <header id="home" className="hero-section text-white d-flex align-items-center text-center">
      <div className="hero-slider">
        <img 
          src="https://media.assettype.com/sarkarnama%2F2022-05%2F56e2980a-d9d5-4a4b-b9d3-1f6afdaaf7c2%2FMLA_Pankaj_Bhoyar_ff.jpg" 
          alt="Pankaj Rajesh Bhoyar" 
          className="hero-slide-img" 
        />
        <img 
          src="https://d3pc1xvrcw35tl.cloudfront.net/images/686x514/nm-pankaj-bhoyar-nm_2025021403595.jpg" 
          alt="Pankaj Rajesh Bhoyar" 
          className="hero-slide-img" 
        />
        <img 
          src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/02/13/Pictures/bjp-national-convention_02cd06da-2f76-11e9-8feb-c7253ea4083e.jpg" 
          alt="Infrastructure Development" 
          className="hero-slide-img" 
        />
        <img 
          src="https://www.shutterstock.com/image-photo/guwahati-india-29-april-2024-600nw-2464178207.jpg" 
          alt="Pankaj Rajesh Bhoyar" 
          className="hero-slide-img" 
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="container position-relative" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="display-3 fw-bold">
          {currentSlideData.headline}
        </h1>
        <p className="lead mt-4 mb-5">
          {currentSlideData.subtext}
        </p>
        <a href="#biography" className="btn btn-lg btn-saffron-outline">
          {content['hero-cta']}
        </a>
      </div>
    </header>
  );
};

export default Hero;