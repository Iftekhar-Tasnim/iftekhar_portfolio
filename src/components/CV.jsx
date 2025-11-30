import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <section id="cv" className="cv-section">
      <div className="container">
        <div className="cv-content">
          <h2 className="section-title">Curriculum Vitae</h2>
          <p className="cv-intro">
            Interested in my professional journey? You can view or download my full resume below.
          </p>
          <a href="#" className="download-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
