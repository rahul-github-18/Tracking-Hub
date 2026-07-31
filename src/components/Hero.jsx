import React from 'react';
import { MapPin, Mail, ArrowUpRight, FileText, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import resumePdf from '../assets/Rahul Ranjan - Resume.pdf';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-header-meta">
        <div>
          <span className="hero-role-tag">Software Developer</span>
          <h1 className="hero-name">Rahul Ranjan</h1>
        </div>

        <div className="hero-location">
          <MapPin size={14} />
          <span>Ranchi, Jharkhand, India</span>
        </div>
      </div>

      <p className="hero-bio">
        Software Developer with experience in designing and developing scalable web applications. 
        Strong foundation in software engineering, data structures, algorithms, object-oriented programming, 
        and database management. Committed to building reliable and efficient software solutions.
      </p>

      <div className="hero-buttons-row">
        <a
          href={resumePdf}
          download="Rahul_Ranjan_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hero-btn primary-btn"
        >
          <FileText size={14} />
          <span>Resume</span>
          <Download size={12} />
        </a>

        <a
          href="https://github.com/rahul-github-18"
          target="_blank"
          rel="noreferrer"
          className="hero-btn secondary-btn"
        >
          <GithubIcon size={14} />
          <span>GitHub</span>
          <ArrowUpRight size={12} />
        </a>

        <a
          href="https://linkedin.com/in/rahul-ranjan-6b2ab424a"
          target="_blank"
          rel="noreferrer"
          className="hero-btn secondary-btn"
        >
          <LinkedinIcon size={14} />
          <span>LinkedIn</span>
          <ArrowUpRight size={12} />
        </a>

        <a href="mailto:rahulranjan62067@gmail.com" className="hero-btn secondary-btn">
          <Mail size={14} />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
