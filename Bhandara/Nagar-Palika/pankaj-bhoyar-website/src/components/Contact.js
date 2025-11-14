import React, { useState } from 'react';

const Contact = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5 py-md-5 contact-section-bg text-white">
      <div className="container">
        <h2 className="section-title text-center mb-5 text-white">{content['contact-title']}</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card contact-form-card shadow-lg p-4 p-md-5 border-0" data-aos="fade-up">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="contactName" className="form-label fw-bold text-dark-blue">
                    {content['contact-name']}
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="contactName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content['contact-name']}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactEmail" className="form-label fw-bold text-dark-blue">
                    {content['contact-email']}
                  </label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content['contact-email']}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactPhone" className="form-label fw-bold text-dark-blue">
                    {content['contact-phone']}
                  </label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="contactPhone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={content['contact-phone']}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactSubject" className="form-label fw-bold text-dark-blue">
                    {content['contact-subject']}
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="contactSubject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={content['contact-subject']}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactMessage" className="form-label fw-bold text-dark-blue">
                    {content['contact-message']}
                  </label>
                  <textarea 
                    className="form-control" 
                    id="contactMessage" 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={content['contact-message']}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-saffron-filled w-100 py-3 fw-bold">
                  <i className="fas fa-paper-plane me-2"></i>
                  {content['contact-send']}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5 text-center" data-aos="fade-up">
          <div className="col-md-4 mb-4">
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt fa-3x text-saffron mb-3"></i>
              <h5 className="fw-bold text-dark-blue">{content['contact-office']}</h5>
              <p className="text-muted">{content['office-text']}</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-info-item">
              <i className="fas fa-phone-alt fa-3x text-green mb-3"></i>
              <h5 className="fw-bold text-dark-blue">{content['contact-phone']}</h5>
              <p className="text-muted">+91 XXXXX XXXXX</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-info-item">
              <i className="fas fa-globe fa-3x text-saffron mb-3"></i>
              <h5 className="fw-bold text-dark-blue">Official Website</h5>
              <p><a href="https://www.pankajbhoyar.com" className="text-decoration-none text-saffron fw-bold">www.pankajbhoyar.com</a></p>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="row mt-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-6 mb-4">
            <div className="contact-info-item">
              <i className="fas fa-envelope fa-3x text-green mb-3"></i>
              <h5 className="fw-bold text-dark-blue">Email Address</h5>
              <p className="text-muted">contact@pankajbhoyar.com</p>
              <p className="text-muted">info@pankajbhoyar.com</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="contact-info-item">
              <i className="fas fa-clock fa-3x text-saffron mb-3"></i>
              <h5 className="fw-bold text-dark-blue">{content['office-hours']}</h5>
              <p className="text-muted">Monday - Friday: 10:00 AM - 5:00 PM</p>
              <p className="text-muted">Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mt-4" data-aos="fade-up" data-aos-delay="300">
          <div className="col-12">
            <div className="contact-info-item text-center">
              <h5 className="fw-bold text-dark-blue mb-3">{content['connect-with-us']}</h5>
              <div className="social-icons-contact">
                <a href="https://facebook.com" className="btn btn-saffron-filled rounded-circle mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" className="btn btn-saffron-filled rounded-circle mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="btn btn-saffron-filled rounded-circle mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com" className="btn btn-saffron-filled rounded-circle mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-saffron-filled rounded-circle mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;