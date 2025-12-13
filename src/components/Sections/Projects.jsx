import React from 'react';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-accent font-mono text-xl">05.</span>
        <h2 className="text-3xl font-bold text-text-main">Some Things I've Built</h2>
        <div className="h-px bg-white/20 grow max-w-[300px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="group relative bg-[#112240] rounded hover:-translate-y-2 transition-all duration-300">
            {/* Header */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-bg-dark border border-white/10 rounded text-text-muted hover:border-accent hover:text-accent transition-all text-xs font-mono"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      {project.backend ? 'Frontend' : 'GitHub'}
                    </a>
                  )}
                  {project.backend && (
                    <a 
                      href={project.backend} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-bg-dark border border-white/10 rounded text-text-muted hover:border-accent hover:text-accent transition-all text-xs font-mono"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      Backend
                    </a>
                  )}
                  {project.link && project.link !== project.github && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-bg-dark border border-white/10 rounded text-text-muted hover:border-accent hover:text-accent transition-all text-xs font-mono"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Live
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-text-muted mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                  {project.technologies.map((tech, t) => (
                    <React.Fragment key={t}>
                      <span className="text-[10px] font-mono text-text-muted/70 hover:text-accent transition-colors">
                        {tech}
                      </span>
                      {t < project.technologies.length - 1 && (
                        <span className="text-text-muted/30 text-[8px]">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
