import React from 'react';
import { profile } from '../../data/profile';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 max-w-[600px] mx-auto text-center">
      <span className="font-mono text-accent text-lg mb-4 block">04. What's Next?</span>
      <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Get In Touch</h2>
      <p className="text-text-muted text-lg leading-relaxed mb-12">
        I'm currently looking for new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a 
        href={`mailto:${profile.email}`} 
        className="inline-block px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-all"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
