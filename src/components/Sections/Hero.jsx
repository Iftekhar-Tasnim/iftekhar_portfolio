import React from 'react';
import { Link } from 'react-scroll';
import { profile } from '../../data/profile';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-[1200px] mx-auto pt-20">
      <span className="font-mono text-accent mb-5 block animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        Hi, my name is
      </span>
      
      <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {profile.name}.
      </h1>
      
      <h2 className="text-4xl md:text-6xl font-bold text-text-muted mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        {profile.role}
      </h2>
      
      <p className="max-w-xl text-text-muted text-lg leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        {profile.bio}
      </p>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="inline-block px-8 py-4 bg-accent/10 border border-accent text-accent font-mono rounded hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all cursor-pointer"
        >
          Check out my work!
        </Link>
        
        <button 
          onClick={onOpenResume}
          className="inline-block px-8 py-4 border border-text-muted text-text-muted font-mono rounded hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all cursor-pointer"
        >
          Get Resume
        </button>

        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href={profile.x} target="_blank" rel="noopener noreferrer" aria-label="Follow me on X (Twitter)" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.667l-5.193-7.117 5.193-7.117h-4.667l-3.2 4.364-3.2-4.364h-4.667l5.193 7.117-5.193 7.117h4.667l3.2-4.364z"></path>
            </svg>
          </a>
          <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow me on Facebook" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send me an email" className="text-text-muted hover:text-accent transition-colors transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
