import React from 'react';
import { profile } from '../data/profile';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-center mb-16 text-text-primary relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:block after:w-16 after:h-1 after:bg-accent after:mt-2 after:rounded-sm">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="flex justify-center">
            <img 
              src={profile.img} 
              alt={profile.name} 
              className="w-full max-w-[280px] rounded shadow-xl border-2 border-accent transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-1 hover:shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="text-lg text-text-secondary leading-relaxed">
              <p>{profile.bio}</p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl mb-8 text-text-primary flex items-center gap-4 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-accent">
                Technical Arsenal
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#112240]/40 border border-accent-glow rounded-lg p-6 text-center transition-all hover:border-accent hover:-translate-y-1 hover:bg-[#112240]/60">
                  <span className="block text-4xl font-bold text-accent mb-2 leading-none">{profile.summary.total_skills}</span>
                  <span className="text-sm text-text-secondary uppercase tracking-wider">Total Skills</span>
                </div>
                <div className="bg-[#112240]/40 border border-accent-glow rounded-lg p-6 text-center transition-all hover:border-accent hover:-translate-y-1 hover:bg-[#112240]/60">
                  <span className="block text-4xl font-bold text-accent mb-2 leading-none">{profile.summary.advanced_expert}</span>
                  <span className="text-sm text-text-secondary uppercase tracking-wider">Expert/Advanced</span>
                </div>
                <div className="bg-[#112240]/40 border border-accent-glow rounded-lg p-6 text-center transition-all hover:border-accent hover:-translate-y-1 hover:bg-[#112240]/60">
                  <span className="block text-4xl font-bold text-accent mb-2 leading-none">{profile.summary.intermediate}</span>
                  <span className="text-sm text-text-secondary uppercase tracking-wider">Intermediate</span>
                </div>
                <div className="bg-[#112240]/40 border border-accent-glow rounded-lg p-6 text-center transition-all hover:border-accent hover:-translate-y-1 hover:bg-[#112240]/60">
                  <span className="block text-4xl font-bold text-accent mb-2 leading-none">{profile.summary.total_categories}</span>
                  <span className="text-sm text-text-secondary uppercase tracking-wider">Domains</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profile.skills.map((category, index) => (
                  <div key={index} className="bg-[#112240]/60 backdrop-blur-md border border-accent-glow rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent-glow to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                    <div className="mb-6">
                      <h4 className="text-xl text-accent font-semibold tracking-wide">{category.category}</h4>
                    </div>
                    <div className="flex flex-col gap-5">
                      {category.items.map((skill, idx) => (
                        <div key={idx} className="w-full">
                          <div className="flex justify-between mb-2 text-sm">
                            <span className="text-text-primary font-medium">{skill.name}</span>
                            <span className="text-text-secondary text-xs">{skill.level}</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent to-[#00ff88] rounded-full relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:-translate-x-full after:animate-shimmer"
                              style={{ 
                                width: skill.level === 'Expert' ? '95%' : 
                                       skill.level === 'Advanced' ? '85%' : 
                                       '70%' 
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-2xl mb-8 text-text-primary flex items-center gap-4 before:content-[''] before:block before:w-8 before:h-0.5 before:bg-accent">
                Education
              </h3>
              {profile.education.map((edu, index) => (
                <div key={index} className="mb-8 pl-6 border-l-2 border-accent relative before:content-[''] before:absolute before:-left-[7px] before:top-0 before:w-2.5 before:h-2.5 before:rounded-full before:bg-bg-primary before:border-2 before:border-accent">
                  <h4 className="text-xl mb-2 text-text-primary">{edu.degree}</h4>
                  <span className="block text-text-secondary mb-2 text-base">{edu.institution}</span>
                  <span className="text-sm text-accent font-mono bg-accent-glow px-2 py-1 rounded">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
