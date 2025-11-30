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
            Hello! I'm <span className="text-accent">Iftekhar Tasnim Md. Asif</span>, a Full Stack Developer driven by the art of building scalable, user-centric web applications. 
            I am currently wrapping up my <span className="text-accent">B.Sc. in Computer Science & Engineering</span> (Jan 2025), with a specialized focus on 
            <span className="text-accent"> Software Engineering</span> and <span className="text-accent">Machine Learning</span>.
          </p>
          <p>
            My expertise lies in the <span className="text-accent">MERN Stack</span> (MongoDB, Express.js, React, Node.js), where I blend robust backend logic with dynamic frontend experiences. 
            I love solving complex problems and crafting digital solutions that make an impact.
          </p>
          <p>
            I am currently looking for <span className="text-accent">internship opportunities</span> in Frontend, Backend, or Full Stack development. 
            I'm eager to bring my skills to a professional team, tackle new challenges, and contribute to innovative projects.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {profile.skills.flatMap(cat => cat.items).slice(0, 6).map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-accent">▹</span> {skill.name}
              </li>
            ))}
          </ul>
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
