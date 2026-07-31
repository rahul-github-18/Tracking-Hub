import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Backend',
      skills: 'Java • Spring Boot • Hibernate • PHP • CodeIgniter • RESTful APIs • Microservices'
    },
    {
      category: 'Frontend',
      skills: 'React • JavaScript • HTML5 • CSS3 • Next.js'
    },
    {
      category: 'Database',
      skills: 'PostgreSQL • MySQL • Supabase'
    },
    {
      category: 'Languages',
      skills: 'Java • Python • PHP • SQL • JavaScript'
    },
    {
      category: 'Tools',
      skills: 'Git • GitHub • VS Code • IntelliJ IDEA • Postman'
    },
    {
      category: 'Core Concepts',
      skills: 'DSA • OOP • DBMS • Computer Networks • Agile'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-clean-list">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-group-row">
            <h3 className="skill-group-name">{group.category}</h3>
            <p className="skill-group-text">{group.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
