import React from 'react';

const Media = ({ content }) => {
  const mediaItems = [
    {
      videoId: '3kPZvcmsv20',
      titleKey: 'media-video-1'
    },
    {
      videoId: 'bOeFZs5ZNdY',
      titleKey: 'media-video-2'
    }
  ];

  const eventImages = [
    {
      src: 'https://www.tripurastarnews.com/wp-content/uploads/2024/09/image001KTY0.jpg',
      alt: 'Public Event 1'
    },
    {
      src: 'https://www.newsonair.gov.in/wp-content/uploads/2025/04/nitin.jpg',
      alt: 'Public Event 2'
    },
    {
      src: 'https://indiashippingnews.com/wp-content/uploads/2024/07/gadkari75.jpg',
      alt: 'Public Event 3'
    }
  ];

  return (
    <section id="media" className="py-5 py-md-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">{content['media-title']}</h2>
        <div className="row g-4">
          {/* Video Section */}
          {mediaItems.map((item, index) => (
            <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="ratio ratio-16x9 shadow-lg">
                <iframe 
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center mt-2 text-muted small">{content[item.titleKey]}</p>
            </div>
          ))}

          {/* Event Images */}
          {eventImages.map((image, index) => (
            <div key={index} className="col-md-4" data-aos="zoom-in" data-aos-delay={index * 100}>
              <img 
                src={image.src} 
                className="img-fluid rounded shadow-sm event-img" 
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;