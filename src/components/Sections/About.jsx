import React from 'react';
import { profile } from '../../data/profile';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-[1000px] mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-accent font-mono text-xl">01.</span>
        <h2 className="text-3xl font-bold text-text-main">About Me</h2>
        <div className="h-[1px] bg-white/20 flex-grow max-w-[300px]"></div>
      </div>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12">
        <div className="text-text-muted text-lg leading-relaxed space-y-4">
          <p>
            I’m a <span className="text-accent">Full Stack Developer</span> passionate about building scalable, user-centric web applications. 
            I specialize in the <span className="text-accent">MERN Stack</span> (MongoDB, Express.js, React, Node.js), blending efficient backend logic with modern frontend design to create seamless digital experiences.
          </p>
          <p>
            Currently completing my <span className="text-accent">B.Sc. in Computer Science & Engineering</span> (Jan 2025) with a focus on 
            <span className="text-accent"> Software Engineering</span> and <span className="text-accent">Machine Learning</span>, 
            I am actively seeking <span className="text-accent">internship opportunities</span> where I can contribute to innovative teams and solve real-world problems.
          </p>

        </div>

        <div className="relative group max-w-[250px] mx-auto md:mx-0 h-fit">
          <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="relative rounded overflow-hidden bg-accent">
            <img 
              src={profile.img} 
              alt="Profile" 
              className="w-full h-full object-cover mix-blend-multiply grayscale hover:mix-blend-normal hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
