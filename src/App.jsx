import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCertificates from './components/EducationCertificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
