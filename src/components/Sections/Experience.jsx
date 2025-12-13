import React from 'react';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-accent font-mono text-xl">04.</span>
        <h2 className="text-3xl font-bold text-text-main">Where I've Worked</h2>
        <div className="h-px bg-white/20 grow max-w-[300px]"></div>
      </div>

      <div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-12">
        {experience.map((job, i) => (
          <div key={i} className="relative pl-8 md:pl-12 group">
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-bg-dark border border-accent group-hover:bg-accent transition-colors"></div>
            
            <h3 className="text-xl font-bold text-text-main">
              {job.role} <span className="text-accent">@ {
                job.link ? (
                  <a 
                    href={job.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline transition-all"
                  >
                    {job.company}
                  </a>
                ) : (
                  job.company
                )
              }</span>
            </h3>
            <p className="font-mono text-sm text-text-muted mb-4">{job.period}</p>
            
            <p className="text-text-muted mb-4 max-w-2xl">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {job.technologies.map((tech, t) => (
                <span key={t} className="text-xs font-mono text-accent bg-accent/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
