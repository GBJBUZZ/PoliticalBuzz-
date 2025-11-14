import React from 'react';

const Footer = ({ content }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="footer-logo text-uppercase">{content.footer.logo}</div>
            <p>{content.footer.description}</p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="mb-3 text-uppercase">{content.footer.linksTitle}</h5>
            <ul className="list-unstyled footer-links">
              {content.footer.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h5 className="mb-3 text-uppercase">{content.footer.contactTitle}</h5>
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                {content.footer.contact.address.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < content.footer.contact.address.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${content.footer.contact.email}`}>
                {content.footer.contact.email}
              </a>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <span>{content.footer.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0 text-white-50">
            &copy; {content.footer.copyright} | <a href="#">{content.footer.privacyPolicy}</a>
          </p>
          <div className="social-icons">
            <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;