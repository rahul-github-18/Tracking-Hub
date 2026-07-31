import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 'codediary',
      title: 'CodeDiary – Developer Workspace & Learning Platform',
      category: 'Next.js 14 / Supabase',
      bullets: [
        'Monaco Editor Integration',
        'Progress Tracking Dashboard',
        'PDF & Excel Export',
        'Email Notification System'
      ],
      tech: ['Next.js 14', 'React 18', 'Supabase', 'Monaco Editor', 'Axios', 'jsPDF', 'SheetJS'],
      githubUrl: 'https://github.com/rahul-github-18',
      liveUrl: 'https://kodediary.vercel.app'
    },
    {
      id: 'talenttrack',
      title: 'TalentTrack – Job Discovery & Management Platform',
      category: 'Java / Spring Boot / PostgreSQL',
      bullets: [
        'Candidate & Application Dashboard',
        'AI Chatbot Assistant',
        'Multi-Role Authentication',
        'Automated Email Alerts'
      ],
      tech: ['Java', 'Spring Boot', 'JSP', 'PostgreSQL', 'AI Chatbot', 'Email API'],
      githubUrl: 'https://github.com/rahul-github-18',
      liveUrl: 'https://talenttrack.up.railway.app'
    },
    {
      id: 'sorting-visualizer',
      title: 'Sorting Visualizer and Algorithm Analyzer',
      category: 'Java / Multithreading / GUI',
      bullets: [
        '300+ Array Algorithm Animations',
        'Multithreaded Frame Optimization',
        'Speed & Array Controls',
        'Modular Swing & AWT Architecture'
      ],
      tech: ['Java', 'Swing', 'AWT', 'Multithreading', 'Algorithms'],
      githubUrl: 'https://github.com/rahul-github-18',
      liveUrl: '' // NO Live Demo button for Sorting Visualizer
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((proj) => (
          <div key={proj.id} className="clean-card proj-card">
            <div className="proj-top-header">
              <div>
                <span className="proj-cat-tag">{proj.category}</span>
                <h3 className="proj-card-title">{proj.title}</h3>
              </div>

              <div className="proj-actions">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn secondary-btn"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>
                )}

                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn primary-btn"
                  >
                    <Globe size={13} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={12} />
                  </a>
                ) : null}
              </div>
            </div>

            <ul className="proj-short-features">
              {proj.bullets.map((b, bIdx) => (
                <li key={bIdx}>{b}</li>
              ))}
            </ul>

            <div className="proj-tech-row">
              {proj.tech.map((t, tIdx) => (
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
