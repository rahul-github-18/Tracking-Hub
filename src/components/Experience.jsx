import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      company: 'Mica Educational Co. Pvt. Ltd.',
      role: 'Software Developer',
      period: 'June 2026 - Present',
      bullets: [
        'Engineered and maintained 5+ business modules using PHP, CodeIgniter 4, Java, Spring Boot, and MySQL.',
        'Designed 10+ RESTful APIs and implemented backend features for scalable applications.',
        'Maintained 10+ application performance by troubleshooting issues and optimizing existing features.',
        'Integrated WhatsApp APIs, payment gateways, and AI chatbot solutions.'
      ],
      tech: ['PHP', 'CodeIgniter 4', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'REST APIs']
    },
    {
      company: 'Bluestock Fintech',
      role: 'Software Developer Engineer Intern',
      period: 'June 2025 - August 2025',
      bullets: [
        'Designed an IPO dashboard displaying multiple 50+ IPOs daily, improving market data accessibility.',
        'Implemented 10+ RESTful APIs with Spring Boot and PostgreSQL, reducing data latency.',
        'Collaborated in Agile teams with Git, improving sprint efficiency.'
      ],
      tech: ['Java', 'Spring Boot', 'REST API', 'Hibernate', 'PostgreSQL', 'IntelliJ IDEA']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span className="section-tag">01</span>
        <h2 className="section-title">Work Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="clean-card experience-card">
            <div className="exp-top">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>

            <ul className="exp-bullets">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>

            <div className="exp-tech-row">
              {exp.tech.map((t, tIdx) => (
                <span key={tIdx} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
