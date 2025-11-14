import React from 'react';

const Issues = ({ content }) => {
  return (
    <section id="issues">
      <div className="container">
        <h2 className="section-title">{content.issues.title}</h2>
        <div className="row g-4">
          {content.issues.items.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="issue-card">
                <i className={`${item.icon} fa-4x mb-3`}></i>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;