import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Work', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className={`max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-[#0a192f]/85 backdrop-blur-md border border-white/10 rounded-full py-3 shadow-xl' : ''
        }`}>
          <Link to="hero" smooth={true} duration={500} className="text-accent font-mono font-bold text-xl cursor-pointer z-50">
            &lt;Iftekhar /&gt;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-sm font-mono text-text-primary hover:text-accent cursor-pointer transition-colors"
              >
                <span className="text-accent mr-1">0{i + 1}.</span>
                {link.name}
              </Link>
            ))}
            <a href="/resume.pdf" target="_blank" className="px-4 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-all">
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 flex flex-col gap-1.5 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-accent transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0a192f]/95 backdrop-blur-xl z-40 flex justify-center items-center transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-mono text-text-primary hover:text-accent cursor-pointer"
            >
              <span className="text-accent block text-sm mb-2">0{i + 1}.</span>
              {link.name}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" className="px-8 py-4 border border-accent text-accent font-mono text-lg rounded hover:bg-accent/10 transition-all">
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
