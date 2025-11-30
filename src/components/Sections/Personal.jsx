import React from 'react';
import { profile } from '../../data/profile';

const Personal = () => {
  return (
    <section id="personal" className="py-24 px-6 md:px-20 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-accent font-mono text-xl">07.</span>
        <h2 className="text-3xl font-bold text-text-main">Personal Life</h2>
        <div className="h-[1px] bg-white/20 flex-grow max-w-[300px]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Philosophy Section */}
        <div className="bg-[#112240] p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all group">
          <h3 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-3">
            <span className="text-accent">☕</span> {profile.philosophy.title}
          </h3>
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            {profile.philosophy.description}
          </p>
          <blockquote className="border-l-4 border-accent pl-4 italic text-text-main font-mono">
            "{profile.philosophy.quote}"
          </blockquote>
        </div>

        {/* Hobbies Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-text-main mb-6">When I'm not coding...</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.hobbies.map((hobby, index) => (
              <div key={index} className="bg-[#112240] p-4 rounded-lg border border-white/5 hover:border-accent/30 hover:-translate-y-1 transition-all group/hobby">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl text-accent">
                    {hobby.icon === 'bike' && '🚴'}
                    {hobby.icon === 'football' && '⚽'}
                    {hobby.icon === 'gamepad' && '🎮'}
                    {hobby.icon === 'tv' && '📺'}
                  </span>
                  <h4 className="font-bold text-text-main group-hover/hobby:text-accent transition-colors">{hobby.name}</h4>
                </div>
                <p className="text-sm text-text-muted">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
