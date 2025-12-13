import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Work', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-[padding] duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className={`max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-[#0a192f]/85 backdrop-blur-md border border-white/10 rounded-full py-3 shadow-xl' : 'bg-transparent border-transparent rounded-none py-0'
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
                className="text-sm font-mono text-text-main hover:text-accent cursor-pointer transition-colors"
              >
                <span className="text-accent mr-1">0{i + 1}.</span>
                {link.name}
              </Link>
            ))}
            <button 
              onClick={onOpenResume}
              className="px-4 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span>Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 flex flex-col gap-1.5 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0a192f]/95 backdrop-blur-xl z-40 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-mono text-text-main hover:text-accent cursor-pointer transition-colors"
            >
              <span className="text-accent block text-sm mb-2">0{i + 1}.</span>
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onOpenResume}
            className="px-6 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
