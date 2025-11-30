

import React, { useState } from 'react';
import { profile } from '../../data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${profile.email}?subject=Message from ${formData.name}&body=${formData.message} (%0D%0A%0D%0AContact: ${formData.email})`;
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-20 max-w-[1200px] mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10"></div>


      <div className="glass rounded-2xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Info */}
          <div className="space-y-8">
            <div>
              <span className="font-mono text-accent text-lg mb-2 block">06. What's Next?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">Get In Touch</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                I'm currently looking for new opportunities, and my inbox is always open. 
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-text-muted">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-text-muted">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={profile.x} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.667l-5.193-7.117 5.193-7.117h-4.667l-3.2 4.364-3.2-4.364h-4.667l5.193 7.117-5.193 7.117h4.667l3.2-4.364z"></path>
                </svg>
              </a>
              <a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-bg-dark/50 p-6 rounded-xl border border-white/5">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-text-muted mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#112240] border border-white/10 rounded px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-text-muted mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#112240] border border-white/10 rounded px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-text-muted mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#112240] border border-white/10 rounded px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-accent/10 border border-accent text-accent font-mono rounded hover:bg-accent hover:text-bg-dark transition-all duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
