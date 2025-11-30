import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Education from './components/Sections/Education';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Personal from './components/Sections/Personal';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="bg-bg-dark min-h-screen">
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Personal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
