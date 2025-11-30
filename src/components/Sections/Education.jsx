import React from 'react';
import { profile } from '../../data/profile';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-20 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-4 mb-16 animate-fade-in-up">
        <span className="text-accent font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-text-main">Education</h2>
        <div className="h-[1px] bg-white/20 flex-grow max-w-[300px]"></div>
      </div>

      <div className="space-y-12">
        {profile.education.map((edu, index) => (
          <div 
            key={index} 
            className="relative pl-8 border-l-2 border-white/10 hover:border-accent transition-colors duration-300 group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-dark border-2 border-accent group-hover:bg-accent transition-colors duration-300"></div>
            
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors duration-300">
                {edu.degree}
              </h3>
              <h4 className="text-xl text-text-muted mt-1">{edu.institution}</h4>
            </div>
            
            <span className="inline-block px-3 py-1 text-sm font-mono text-accent bg-accent/10 rounded mt-2 mb-4">
              {edu.period}
            </span>
            
            {edu.description && (
              <p className="text-text-muted mt-2 text-sm max-w-2xl">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
