import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <span className="footer-copy">
          © {new Date().getFullYear()} Rahul Ranjan. All rights reserved.
        </span>

        <button className="scroll-top-btn" onClick={scrollToTop}>
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
