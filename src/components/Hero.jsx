import React from 'react';
import { profile } from '../data/profile';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span className="highlight">{profile.name}</span></h1>
          <h2 className="hero-subtitle">{profile.role}</h2>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={profile.img} alt={profile.name} className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
