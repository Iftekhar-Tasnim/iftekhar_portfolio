import React from 'react';
import { Link } from 'react-scroll';
import { profile } from '../../data/profile';

const Hero = () => {
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
      
      <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="inline-block px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-all cursor-pointer"
        >
          Check out my work!
        </Link>
      </div>
    </section>
  );
};

export default Hero;
