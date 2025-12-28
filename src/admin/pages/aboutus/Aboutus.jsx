import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Target, ShieldCheck, Globe, Zap } from 'lucide-react';
import './Aboutus.css';

const Aboutus = () => {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      {/* Back Button */}
      <button className="back-icon-link" onClick={() => navigate(-1)} aria-label="Go back">
        <ArrowLeft size={24} />
      </button>

      <header className="about-hero">
        <div className="hero-content">
          <span className="hero-subtitle">Our Journey</span>
          <h1>We’re on a mission to <br /><span>democratize wealth.</span></h1>
          <p>Tecc Savings is more than an app; it’s a global bridge for the modern Nigerian investor to access premium financial growth.</p>
        </div>
      </header>

      <section className="stats-strip">
        <div className="stat-item">
          <h3>5k+</h3>
          <p>Active Investors</p>
        </div>
        <div className="stat-item">
          <h3>SEC</h3>
          <p>Regulated Partners</p>
        </div>
        <div className="stat-item">
          <h3>10%</h3>
          <p>Target Returns</p>
        </div>
      </section>

      <main className="about-main">
        <section className="mission-grid">
          <div className="mission-text">
            <h2>The Tecc Vision</h2>
            <p>Founded in 2024, Tecc Savings was born out of a simple observation: wealth-building tools shouldn't be reserved for the elite. We combined cutting-edge technology with deep financial expertise to create a platform where your Naira works as hard as you do.</p>
          </div>
          <div className="mission-image-placeholder">
             {/* Add a high-quality team or abstract glass image here */}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <ShieldCheck className="v-icon" />
              <h3>Radical Integrity</h3>
              <p>We operate with absolute transparency. No hidden fees, no complex jargon.</p>
            </div>
            <div className="value-card">
              <Globe className="v-icon" />
              <h3>Global Access</h3>
              <p>Connecting local savings to global opportunities effortlessly.</p>
            </div>
            <div className="value-card">
              <Zap className="v-icon" />
              <h3>Built for Speed</h3>
              <p>Technology that processes investments in real-time with bank-grade security.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <p>&copy; 2026 Tecc Savings Technology. Global Naira Empowerment.</p>
        </div>
      </footer>
    </div>
  );
};

export default Aboutus;