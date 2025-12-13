import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: [
        'C++',
        'Java',
        'Python',
        'C#',
        'JavaScript (ES6+)',
        'TypeScript'
      ]
    },
    {
      name: 'Frontend Engineering',
      skills: [
        'React',
        'Next.js',
        'Vite',
        'Tailwind CSS',
        'Bootstrap',
        'Material UI',
        'shadcn/ui',
        'HTML5',
        'CSS3'
      ]
    },
    {
      name: 'Backend & System Architecture',
      skills: [
        'Node.js',
        'Express.js',
        'NestJS',
        'ASP.NET Core',
        'MVC Architecture',
        'Firebase',
        'MongoDB',
        'MySQL',
        'PostgreSQL'
      ]
    },
    {
      name: 'Mobile & Desktop Development',
      skills: [
        'React Native (Expo – fundamentals)',
        'Java Swing (JFrame)'
      ]
    },
    {
      name: 'AI, Computer Vision & Data',
      skills: [
        'YOLO (v8 / v10)',
        'U-Net',
        'TensorFlow',
        'OpenCV',
        'Pandas',
        'NumPy'
      ]
    },
    {
      name: 'IoT & Embedded Systems',
      skills: [
        'Arduino',
        'ESP32',
        'Raspberry Pi',
        'Sensors & Actuators',
        'Circuit Design',
        'I2C / SPI / UART'
      ]
    },
    {
      name: 'DevOps & Developer Tools',
      skills: [
        'Git',
        'Docker',
        'Linux',
        'Postman',
        'Figma'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-20 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-accent font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-text-main">Technical Skills</h2>
        <div className="h-px bg-white/20 grow max-w-[300px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-[#112240] p-6 rounded-lg hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/30 group"
          >
            <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
              <span className="text-accent">#</span> {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="relative group/skill">
                  <span className="px-3 py-1.5 bg-bg-dark text-text-muted text-sm font-mono rounded border border-white/5 hover:border-accent hover:text-accent transition-colors cursor-default block">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
