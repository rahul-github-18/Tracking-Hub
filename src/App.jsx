import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCertificates from './components/EducationCertificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <main className="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <EducationCertificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
