import React from 'react';

const Achievements = ({ content }) => {
  const achievements = [
    {
      icon: 'fas fa-road',
      color: 'text-saffron',
      titleKey: 'card-1-title',
      textKey: 'card-1-text'
    },
    {
      icon: 'fas fa-tint',
      color: 'text-green',
      titleKey: 'card-2-title',
      textKey: 'card-2-text'
    },
    {
      icon: 'fas fa-graduation-cap',
      color: 'text-saffron',
      titleKey: 'card-3-title',
      textKey: 'card-3-text'
    },
    {
      icon: 'fas fa-heartbeat',
      color: 'text-green',
      titleKey: 'card-4-title',
      textKey: 'card-4-text'
    }
  ];

  return (
    <section id="achievements" className="py-5 py-md-5 bg-light-orange">
      <div className="container">
        <h2 className="section-title text-center mb-5">{content['achievements-title']}</h2>
        <div className="row g-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
              <div className="card h-100 shadow-sm achievement-card">
                <div className="card-body text-center">
                  <i className={`${achievement.icon} fa-3x ${achievement.color} mb-3`}></i>
                  <h5 className="card-title fw-bold">{content[achievement.titleKey]}</h5>
                  <p className="card-text">{content[achievement.textKey]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;