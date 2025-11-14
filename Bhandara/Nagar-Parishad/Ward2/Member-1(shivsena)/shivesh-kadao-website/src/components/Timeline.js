import React from 'react';

const Timeline = ({ content }) => {
  return (
    <section id="timeline">
      <div className="container timeline-container">
        <h2 className="section-title">{content.timeline.title}</h2>

        {content.timeline.items.map((item, index) => (
          <div key={index} className={`timeline-item ${item.position}`}>
            <div className="timeline-content">
              <h4>{item.year}: {item.title}</h4>
              <small>{item.subtitle}</small>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;