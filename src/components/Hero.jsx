import React from 'react';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-header-line">
        <div>
          <span className="hero-role-pill">Software Developer</span>
          <h1 className="hero-name">Rahul Ranjan</h1>
        </div>
        <div className="hero-location-badge">
          <MapPin size={16} />
          <span>Ranchi, Jharkhand, India</span>
        </div>
      </div>

      {/* Clean Profile Card */}
      <div className="clean-card hero-card">
        <p className="hero-summary">
          Software Developer with experience in designing and developing scalable web applications. 
          Strong foundation in software engineering, data structures, algorithms, object-oriented programming, 
          and database management. Committed to building reliable and efficient software solutions.
        </p>

        {/* Contact & Social Links arranged in a clean line */}
        <div className="hero-contact-line">
          <a href="mailto:rahulranjan62067@gmail.com" className="hero-link-btn">
            <Mail size={16} />
            <span>rahulranjan62067@gmail.com</span>
          </a>
          <a href="tel:+916206789352" className="hero-link-btn">
            <Phone size={16} />
            <span>+91-6206789352</span>
          </a>
          <a
            href="https://github.com/rahul-github-18"
            target="_blank"
            rel="noreferrer"
            className="hero-link-btn"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://linkedin.com/in/rahul-ranjan-6b2ab424a"
            target="_blank"
            rel="noreferrer"
            className="hero-link-btn"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
