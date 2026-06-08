import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Layers, ExternalLink, Cpu, AppWindow, Database, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'College Event Registration System',
      category: 'java',
      icon: Database,
      tags: ['Java Servlets', 'Apache Tomcat', 'JDBC', 'MySQL'],
      shortDesc: 'A Java-based dynamic web application facilitating seamless event registration, participant tracking, and system workflows.',
      bullets: [
        'Built using Java Servlets, Dynamic Web Project architecture, & Apache Tomcat server.',
        'Integrated secure user authentication and session management protocols.',
        'Developed features for dynamic event creation and real-time participant tracking.',
        'Implemented database connectivity using JDBC to support efficient CRUD operations.'
      ],
      details: 'This project utilizes the Model-View-Controller (MVC) architecture pattern to decouple the data presentation from the business logic. By utilizing Tomcat as the servlet container and MySQL as the data store, the system successfully manages active concurrency during registration peaks, reducing database overhead with optimized connection parameters.'
    },
    {
      id: 2,
      title: 'AesthRec: Aesthetic Recommendation Web Application',
      category: 'web',
      icon: AppWindow,
      tags: ['Full Stack', 'RESTful API', 'React.js', 'Node.js'],
      shortDesc: 'A full-stack recommendations engine analyzing visual preferences and user inputs to suggest harmonized aesthetic content.',
      bullets: [
        'Designed and implemented a full-stack web application for visual analysis & content suggestion.',
        'Engineered a RESTful backend API using structured JSON payloads and schema validation.',
        'Crafted an interactive frontend interface with smooth micro-interactions and transitions.',
        'Validated system reliability with end-to-end test cases and user preference matrix models.'
      ],
      details: 'AesthRec analyzes design inputs, color profiles, and style vectors. The backend processes these parameters against aesthetic style models to calculate alignment coefficients and return recommended content in milliseconds. Complete validation suites ensure application stability and sub-second response times.'
    },
    {
      id: 3,
      title: 'SmartHighway: IoT-Driven Accident Prevention',
      category: 'iot',
      icon: Cpu,
      tags: ['IoT', 'Arduino', 'ESP32 / Cloud', 'Sensors'],
      shortDesc: 'An IoT highway safety system conducting real-time road hazard tracking, obstacle detection, and automated driver alerts.',
      bullets: [
        'Developed an IoT highway safety system integrating IR obstacle & LM35 temperature sensors.',
        'Implemented real-time sensor polling and safety alerts to mitigate highway collision risks.',
        'Programmed microcontroller logical triggers using Arduino C/C++ libraries.',
        'Enabled serial telemetry and ESP32 data routing for cloud-based dashboards.'
      ],
      details: 'SmartHighway connects physical sensors directly to microprocessor logic, calculating real-time safety indices. The IR sensors measure obstruction distance while the LM35 tracks road surface temperatures to check for ice/overheating. Telemetry streams via serial port to cloud-connected ESP32 boards for remote monitoring.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      {/* Filter Tabs */}
      <div className="projects-filters">
        {['all', 'web', 'java', 'iot'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setExpandedId(null); // Reset expand on filter change
            }}
            className={`filter-btn ${filter === cat ? 'filter-btn-active' : ''}`}
          >
            {cat === 'all' ? 'All' : cat === 'web' ? 'Full Stack' : cat === 'java' ? 'Java & DB' : 'IoT / Hardware'}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                layout
                className="project-card glass-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-card-header">
                  <div className="project-icon-wrapper">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="project-short-desc">{project.shortDesc}</p>

                <ul className="project-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="project-bullet-item">{bullet}</li>
                  ))}
                </ul>

                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="project-expand-btn"
                >
                  <span>{isExpanded ? 'Show Less' : 'Technical Details'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="project-details-expanded"
                    >
                      <div className="details-expanded-inner">
                        <h4 className="expanded-title">System Architecture & Workflow</h4>
                        <p className="expanded-text">{project.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
