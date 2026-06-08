import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart, Globe, MapPin, Calendar } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('profile');

  const education = [
    {
      institution: 'Presidency University, Bangalore',
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      duration: '2024 - 2028',
      scoreType: 'CGPA',
      score: '9.52',
      highlight: 'Top Tier Academic Standing'
    },
    {
      institution: 'Presidency School, Bangalore East',
      degree: '11th & 12th Standard (High School)',
      duration: '2022 - 2024',
      scoreType: 'Percentage',
      score: '82.2%',
      highlight: 'Focused in Science & Mathematics'
    }
  ];

  const certifications = [
    {
      title: 'Cybersecurity Awareness and Innovation',
      provider: 'EIT Digital',
      icon: Award
    },
    {
      title: 'Java Concepts',
      provider: 'Infosys Springboard',
      icon: Award
    }
  ];

  const languages = ['English', 'Tamil', 'Hindi', 'Kannada'];

  const hobbies = [
    { name: 'Basketball', detail: 'CBSE Clusters Athlete' },
    { name: 'Anchoring Club', detail: 'Active Member, Presidency University' }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-tabs-container">
        {/* Tab Header */}
        <div className="about-tabs">
          <button
            onClick={() => setActiveTab('profile')}
            className={`tab-btn ${activeTab === 'profile' ? 'tab-btn-active' : ''}`}
          >
            Profile & Interests
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`tab-btn ${activeTab === 'education' ? 'tab-btn-active' : ''}`}
          >
            Education & Credentials
          </button>
        </div>

        {/* Tab Body */}
        <div className="tab-content-wrapper glass-panel">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' ? (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="tab-content"
              >
                <div className="profile-grid">
                  {/* Left: Bio Summary */}
                  <div className="bio-summary">
                    <h3 className="tab-title text-gradient">Professional Overview</h3>
                    <p className="bio-text">
                      I am an ambitious Computer Science & Engineering student at Presidency University. My academic journey is driven by a passion for creating impactful software solutions and developing robust database architectures. 
                    </p>
                    <p className="bio-text">
                      With proficiency in programming core fundamentals like C, Python, Java, and database systems like SQL, I focus on constructing neat, logical code structures that solve real-world problems.
                    </p>
                    
                    <div className="contact-meta-grid">
                      <div className="contact-meta-item">
                        <MapPin size={16} className="meta-icon" />
                        <span>OMBR Layout, Banaswadi, Bangalore</span>
                      </div>
                      <div className="contact-meta-item">
                        <Globe size={16} className="meta-icon" />
                        <span>Indian National</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Languages & Hobbies */}
                  <div className="extra-details">
                    <div className="details-card">
                      <h4 className="detail-subtitle">
                        <Globe size={16} className="detail-icon" />
                        Languages Spoken
                      </h4>
                      <div className="lang-chips">
                        {languages.map((lang) => (
                          <span key={lang} className="lang-chip">{lang}</span>
                        ))}
                      </div>
                    </div>

                    <div className="details-card">
                      <h4 className="detail-subtitle">
                        <Heart size={16} className="detail-icon" />
                        Hobbies & Interests
                      </h4>
                      <div className="hobbies-list">
                        {hobbies.map((hobby) => (
                          <div key={hobby.name} className="hobby-item">
                            <span className="hobby-name">{hobby.name}</span>
                            <span className="hobby-detail">{hobby.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="tab-content"
              >
                <div className="edu-grid">
                  {/* Education Timeline */}
                  <div>
                    <h3 className="tab-title">
                      <GraduationCap size={20} className="tab-icon text-gradient" />
                      Education
                    </h3>
                    <div className="timeline">
                      {education.map((edu, idx) => (
                        <div key={idx} className="timeline-item">
                          <div className="timeline-dot" />
                          <div className="timeline-content glass-card">
                            <div className="timeline-header">
                              <span className="timeline-duration">
                                <Calendar size={12} className="meta-icon" />
                                {edu.duration}
                              </span>
                              <span className="timeline-score">
                                {edu.scoreType}: {edu.score}
                              </span>
                            </div>
                            <h4 className="timeline-inst">{edu.institution}</h4>
                            <p className="timeline-degree">{edu.degree}</p>
                            <p className="timeline-highlight">{edu.highlight}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications list */}
                  <div>
                    <h3 className="tab-title">
                      <Award size={20} className="tab-icon text-gradient" />
                      Certifications
                    </h3>
                    <div className="certs-list">
                      {certifications.map((cert, idx) => {
                        const IconComponent = cert.icon;
                        return (
                          <div key={idx} className="cert-card glass-card">
                            <div className="cert-icon-wrapper">
                              <IconComponent size={20} />
                            </div>
                            <div className="cert-info">
                              <h4 className="cert-title">{cert.title}</h4>
                              <p className="cert-provider">{cert.provider}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
