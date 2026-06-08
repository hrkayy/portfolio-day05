import React from 'react';
import { Code, Terminal, Database, Server, Smartphone, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C Programming', level: 80 }
      ],
      colorClass: 'accent-cyan'
    },
    {
      title: 'Databases & Systems',
      icon: Database,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Database Management', level: 80 },
        { name: 'JDBC / Data Connectivity', level: 75 }
      ],
      colorClass: 'accent-indigo'
    },
    {
      title: 'Web Technologies',
      icon: Code,
      skills: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React (Vite)', level: 80 }
      ],
      colorClass: 'accent-violet'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, idx) => {
          const IconComponent = category.icon;
          return (
            <motion.div 
              key={idx}
              className="skills-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="skills-card-header">
                <div className={`skills-icon-wrapper ${category.colorClass}`}>
                  <IconComponent size={22} />
                </div>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      <motion.div 
                        className={`skill-progress-bar ${category.colorClass}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
