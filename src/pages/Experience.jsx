import React from 'react';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-content">
                <span className="date">{job.period}</span>
                <h3 className="role">{job.role}</h3>
                <h4 className="company">{job.company}</h4>
                <p className="description">{job.description}</p>
                <div className="tech-stack">
                  {job.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
