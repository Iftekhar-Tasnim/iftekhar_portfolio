import React, { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ResumeModal from './components/Layout/ResumeModal';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Education from './components/Sections/Education';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Personal from './components/Sections/Personal';
import Contact from './components/Sections/Contact';

function App() {
  const [showResume, setShowResume] = useState(false);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <div className="bg-bg-dark min-h-screen">
        <Navbar onOpenResume={() => setShowResume(true)} />
        <main className="container mx-auto">
          <Hero onOpenResume={() => setShowResume(true)} />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
          <Personal />
        </main>
        <Footer />
        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default App;
