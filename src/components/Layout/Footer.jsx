import React from 'react';
import { profile } from '../../data/profile';

const Footer = () => {
  return (
    <footer className="py-8 text-center bg-[#0a192f] text-text-muted font-mono text-sm">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-4">
        <div className="flex justify-center gap-6 mb-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">Email</a>
        </div>
        <p>Designed & Built by <span className="text-accent">{profile.name}</span></p>
      </div>
    </footer>
  );
};

export default Footer;
