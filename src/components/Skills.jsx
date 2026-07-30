import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'PHP', 'HTML5', 'CSS3']
    },
    {
      category: 'Frameworks & APIs',
      items: ['Spring Boot', 'CodeIgniter 4', 'JSP', 'Servlets', 'RESTful APIs']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL']
    },
    {
      category: 'Tools & IDEs',
      items: ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'Eclipse IDE', 'NetBeans']
    },
    {
      category: 'Core Concepts',
      items: ['Data Structures & Algorithms', 'OOPS', 'DBMS', 'Computer Networks', 'SDLC', 'Agile Methodology']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-tag">03</span>
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="clean-card skills-card">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-line-row">
            <h3 className="skill-group-name">{group.category}</h3>
            <div className="skill-pills-wrap">
              {group.items.map((item, iIdx) => (
                <span key={iIdx} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
