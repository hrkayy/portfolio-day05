import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-indicator" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Cyberpunk Grid Background */}
      <div className="bg-container">
        <div className="bg-grid" />
        <div className="bg-glow-orb-1" />
        <div className="bg-glow-orb-2" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Hansika Ravi Kumar. All Rights Reserved.
          </p>
          <p className="footer-text" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Built with <span className="footer-heart">♥</span> using React & CSS Grid.
          </p>
        </div>
      </footer>
    </div>
  );
}
