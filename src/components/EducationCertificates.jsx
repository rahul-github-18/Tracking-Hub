import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import './EducationCertificates.css';

export default function EducationCertificates() {
  const education = [
    {
      institution: 'Amity University Jharkhand',
      degree: 'B.Tech in Computer Science and Engineering',
      period: 'June 2022 - June 2026',
      score: 'CGPA: 8.43'
    },
    {
      institution: 'Geeta Science Inter College, Hazaribagh',
      degree: 'Intermediate in Science',
      period: 'April 2020 - April 2022',
      score: 'Score: 79.8 %'
    }
  ];

  const certificates = [
    { title: 'Database Fundamentals', issuer: 'Infosys Springboard' },
    { title: 'Java Basic Certification', issuer: 'HackerRank' },
    { title: 'Software Engineer Intern', issuer: 'HackerRank' }
  ];

  return (
    <section id="education" className="ed-cert-section">
      <div className="ed-cert-grid">
        {/* Education Column */}
        <div className="ed-col">
          <div className="section-header">
            <span className="section-tag">04</span>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="education-list">
            {education.map((edu, idx) => (
              <div key={idx} className="clean-card edu-card">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-inst">{edu.institution}</h4>
                  </div>
                  <span className="edu-score">{edu.score}</span>
                </div>
                <span className="edu-period">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="cert-col">
          <div className="section-header">
            <span className="section-tag">05</span>
            <h2 className="section-title">Certifications</h2>
          </div>

          <div className="clean-card cert-card-container">
            {certificates.map((cert, idx) => (
              <div key={idx} className="cert-line-item">
                <CheckCircle2 size={18} className="cert-check-icon" />
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">Issued by {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
