import React from 'react';

const Biography = ({ content }) => {
  return (
    <section id="biography" className="py-5 py-md-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">{content['bio-title']}</h2>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 text-center mb-4 mb-lg-0" data-aos="fade-right">
            <img 
              src="https://media.assettype.com/sarkarnama%2F2022-05%2F56e2980a-d9d5-4a4b-b9d3-1f6afdaaf7c2%2FMLA_Pankaj_Bhoyar_ff.jpg" 
              alt="Pankaj Rajesh Bhoyar Portrait" 
              className="profile-photo shadow-lg"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="fw-bold text-saffron mb-4">Early Life & Education</h3>
            <p className="lead">
              {content['bio-text']}
            </p>
            <p>
              {content['bio-early-life']}
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2 text-center mb-4 mb-lg-0" data-aos="fade-left">
            <img 
              src="https://d3pc1xvrcw35tl.cloudfront.net/images/686x514/nm-pankaj-bhoyar-nm_2025021403595.jpg" 
              alt="Pankaj Bhoyar Political Work" 
              className="img-fluid rounded shadow-lg"
              style={{maxHeight: '400px', width: '100%', objectFit: 'cover'}}
            />
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <h3 className="fw-bold text-saffron mb-4">Political Journey</h3>
            <p>
              {content['bio-political']}
            </p>
            <p>
              {content['bio-grassroots']}
            </p>
            <ul className="list-unstyled mt-3">
              <li><i className="fas fa-check text-green me-2"></i>{content['bio-point-1']}</li>
              <li><i className="fas fa-check text-green me-2"></i>{content['bio-point-2']}</li>
              <li><i className="fas fa-check text-green me-2"></i>{content['bio-point-3']}</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4" data-aos="zoom-in">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-users fa-3x text-saffron mb-3"></i>
                <h5 className="card-title fw-bold">{content['bio-card-1-title']}</h5>
                <p className="card-text">{content['bio-card-1-text']}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-hands-helping fa-3x text-green mb-3"></i>
                <h5 className="card-title fw-bold">{content['bio-card-2-title']}</h5>
                <p className="card-text">{content['bio-card-2-text']}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-chart-line fa-3x text-saffron mb-3"></i>
                <h5 className="card-title fw-bold">{content['bio-card-3-title']}</h5>
                <p className="card-text">{content['bio-card-3-text']}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="fw-bold text-saffron mb-3">{content['bio-responsibilities-title']}</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-arrow-right text-saffron me-2"></i>{content['bio-resp-1']}</li>
                    <li><i className="fas fa-arrow-right text-saffron me-2"></i>{content['bio-resp-2']}</li>
                    <li><i className="fas fa-arrow-right text-saffron me-2"></i>{content['bio-resp-3']}</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-arrow-right text-saffron me-2"></i>{content['bio-resp-4']}</li>
                    <li><i className="fas fa-arrow-right text-saffron me-2"></i>{content['bio-resp-5']}</li>
                    <li><i className="fas fa-arrow-right text-saffron me-2"></i>{content['bio-resp-6']}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;