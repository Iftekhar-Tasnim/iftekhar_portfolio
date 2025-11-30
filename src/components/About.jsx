import React from 'react';
import { profile } from '../data/profile';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{profile.bio}</p>
            
            <div className="education-container">
              <h3>Education</h3>
              {profile.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <span className="period">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills-list">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
