import React from 'react';
import { profile } from '../data/profile';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href={`mailto:${profile.email}`} className="contact-btn">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
