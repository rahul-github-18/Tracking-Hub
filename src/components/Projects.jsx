import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'CodeDiary – Developer Workspace & Learning Platform',
      category: 'Next.js 14 / Supabase / Full-Stack Platform',
      bullets: [
        'Engineered a modern developer platform with Next.js 14 App Router, React 18, and Supabase for mastering Data Structures & Algorithms, Java, SQL, and System Design.',
        'Integrated an in-browser code editor powered by Monaco Editor (@monaco-editor/react) enabling real-time code preview and account-free code snippet sharing.',
        'Built comprehensive visual progress analytics, streak counters, topic completion metrics, and daily learning activity tracking.',
        'Formulated client-side report generation and data processing using jsPDF for PDF document exports and SheetJS (xlsx) for spreadsheet processing.',
        'Implemented automated email notifications using Nodemailer alongside optimized backend API requests using Axios.'
      ],
      tech: [
        'Next.js 14',
        'React 18',
        'Supabase',
        'Tailwind CSS',
        'Monaco Editor',
        'Axios',
        'Nodemailer',
        'jsPDF',
        'SheetJS (xlsx)'
      ],
      liveUrl: 'https://kodediary.vercel.app'
    },
    {
      title: 'TalentTrack – Job Discovery & Management Platform',
      category: 'Full-Stack Web Platform',
      bullets: [
        'Automated job application tracking through real-time candidate dashboards and automated email notifications, streamlining workflow efficiency.',
        'Integrated an AI chatbot assistant to guide job seekers, answer application FAQs, and provide instant candidate updates.',
        'Implemented secure multi-role authentication (Applicant vs Admin) with encrypted access controls and user session management.',
        'Built administrative dashboards to manage job listings, track application stages, and review applicant metrics efficiently.',
        'Reduced manual job tracking and candidate follow-up time by 40% using automated email alerts and chatbot assistance.'
      ],
      tech: ['Java', 'JSP', 'Servlet', 'MySQL', 'AI Chatbot', 'Email API', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://talenttrack.up.railway.app' // Blank placeholder for live link
    },
    {
      title: 'Sorting Visualizer and Analyzer',
      category: 'Java / Multithreading / GUI',
      bullets: [
        'Developed an interactive Java GUI application to animate and analyze fundamental sorting algorithms including Bubble, Merge, and Quick Sort.',
        'Simulated 300+ sorting visualizations to demonstrate algorithm execution, time complexity, and memory performance in real time.',
        'Engineered multithreaded rendering algorithms, optimizing UI frame rates and reducing rendering latency delay by 30%.',
        'Implemented custom array generation controls, speed adjustment sliders, and live comparison/swap counter metrics.',
        'Designed modular Swing & AWT view components adhering to object-oriented programming principles for extensible algorithm additions.'
      ],
      tech: ['Java', 'Swing', 'AWT', 'Multithreading', 'Algorithms', 'Eclipse IDE'],
      liveUrl: '' // Blank placeholder for live link
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-tag">02</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="clean-card project-card">
            <div className="proj-top">
              <span className="proj-category">{proj.category}</span>
              <a
                href={proj.liveUrl || '#'}
                target={proj.liveUrl ? '_blank' : '_self'}
                rel="noreferrer"
                className="proj-live-btn"
                onClick={(e) => {
                  if (!proj.liveUrl) {
                    e.preventDefault();
                  }
                }}
              >
                <Globe size={14} />
                <span>Live App</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <h3 className="proj-title">{proj.title}</h3>

            <ul className="proj-bullets">
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
