import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        <div className="footer-brand">
          <span className="footer-name">Rahul Ranjan</span>
          <span className="footer-sub">• Software Developer</span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/rahul-github-18"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <GithubIcon size={13} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/rahul-ranjan-6b2ab424a"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <LinkedinIcon size={13} />
            <span>LinkedIn</span>
          </a>

          <a href="mailto:rahulranjan62067@gmail.com" className="footer-link">
            <Mail size={13} />
            <span>Email</span>
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Rahul Ranjan
        </span>
      </div>
    </footer>
  );
}
