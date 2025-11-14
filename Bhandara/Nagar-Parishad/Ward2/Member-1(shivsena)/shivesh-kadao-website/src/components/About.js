import React from 'react';

const About = ({ content }) => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">{content.about.title}</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src={content.about.image} alt="Shivesh Kadao" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h3>{content.about.name}</h3>
            {content.about.description.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'lead' : ''}>
                {paragraph}
              </p>
            ))}
            <a href="#" className="btn btn-primary-custom">
              {content.about.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;