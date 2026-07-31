import React from 'react';
import './EducationCertificates.css';

export default function EducationCertificates() {
  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      institution: 'Amity University Jharkhand',
      period: '2022–2026',
      score: 'CGPA: 8.43'
    },
    {
      degree: 'Intermediate in Science',
      institution: 'Geeta Science Inter College',
      period: '2020–2022',
      score: '79.8%'
    }
  ];

  const certificates = [
    {
      title: 'Database Fundamentals',
      issuer: 'Infosys Springboard',
      year: '2024'
    },
    {
      title: 'Java Basic Certification',
      issuer: 'HackerRank',
      year: '2024'
    },
    {
      title: 'Software Engineer Intern',
      issuer: 'HackerRank',
      year: '2024'
    }
  ];

  return (
    <div className="ed-cert-clean-wrap">
      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-simple-list">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-simple-item">
              <div className="edu-item-top">
                <h3 className="edu-degree-name">{edu.degree}</h3>
                <span className="edu-period">{edu.period}</span>
              </div>
              <div className="edu-item-bottom">
                <span className="edu-inst-name">{edu.institution}</span>
                <span className="edu-score-tag">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="cert-simple-list">
          {certificates.map((cert, idx) => (
            <div key={idx} className="cert-simple-item">
              <span className="cert-check">✓</span>
              <div className="cert-text-group">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-meta">{cert.issuer} • {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
