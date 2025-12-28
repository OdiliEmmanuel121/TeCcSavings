import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Cpu, PieChart, Users, Star } from 'lucide-react';
import './Professions.css';

const Professions = () => {
    const navigate = useNavigate();

    const jobs = [
        { icon: <Cpu />, title: "Full Stack Engineer", dept: "Engineering", type: "Remote" },
        { icon: <PieChart />, title: "Investment Analyst", dept: "Finance", type: "Lagos, NG" },
        { icon: <Users />, title: "Growth Manager", dept: "Marketing", type: "Remote" },
        { icon: <Briefcase />, title: "Compliance Officer", dept: "Legal", type: "Hybrid" },
    ];

    return (
        <div className="professions-wrapper">
            {/* Back Button */}
            <button className="back-navigation-btn" onClick={() => navigate(-1)}>
                <ArrowLeft size={20} />
                <span>Back</span>
            </button>

            <header className="professions-hero">
                <div className="hero-badge">
                    <Star size={14} fill="#00d094" color="#00d094" />
                    <span>We are hiring</span>
                </div>
                <h1>Build the future of <br /><span>Naira Investments</span></h1>
                <p>Join a team of visionaries, engineers, and financial experts dedicated to empowering growth for every Nigerian.</p>
            </header>

            <main className="professions-container">
                <section className="culture-section">
                    <h2>Why Tecc Savings?</h2>
                    <div className="culture-grid">
                        <div className="culture-item">
                            <h4>Global Impact</h4>
                            <p>Work on products that help millions manage wealth across borders.</p>
                        </div>
                        <div className="culture-item">
                            <h4>Equity & Growth</h4>
                            <p>We offer competitive stock options and clear career paths.</p>
                        </div>
                    </div>
                </section>

                <section className="open-roles">
                    <h3>Current Openings</h3>
                    <div className="roles-list">
                        {jobs.map((job, index) => (
                            <div key={index} className="role-card">
                                <div className="role-icon">{job.icon}</div>
                                <div className="role-info">
                                    <h4>{job.title}</h4>
                                    <p>{job.dept} • {job.type}</p>
                                </div>
                                <button className="apply-btn">Apply Now</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="professions-footer">
                <div className="footer-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <p>&copy; 2026 Tecc Savings Technology</p>
                </div>
            </footer>
        </div>
    );
};

export default Professions;