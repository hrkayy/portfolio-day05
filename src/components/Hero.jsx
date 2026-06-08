import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import heroGraphic from '../assets/hero_graphic.png';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const words = ["Aspiring Tech Professional", "Software Developer", "Problem Solver"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (currentText === currentWord) {
          // Pause before starting to delete
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText((prev) => currentWord.substring(0, prev.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Intro */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Open to Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-gradient">Hansika Ravi Kumar</span>
          </h1>

          <div className="hero-subtitle">
            I am a <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-description">
            Aspiring tech professional proficient in C, Python and SQL, with hands-on
            experience in software development and database management. Committed to
            ongoing growth through learning, innovation, and impact.
          </p>

          <div className="hero-ctas">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollToSection(e, '#projects')}
              className="btn btn-primary"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="btn btn-secondary"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links & Info */}
          <div className="hero-socials">
            <a 
              href="https://github.com/hrkayy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hansika-ravi-kumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="mailto:hansika10rk@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-tech Graphic */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-img-wrapper">
            <div className="hero-img-glow" />
            <img 
              src={heroGraphic} 
              alt="Hansika Tech Illustration" 
              className="hero-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
