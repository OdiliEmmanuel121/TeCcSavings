import { useNavigate } from 'react-router-dom';
import './Privacypolicy.css';
import {ArrowBack,Security,TrendingUp,AccountBalance,PhonelinkRing} from '@mui/icons-material';

const Privacypolicy = () => {
    const navigate = useNavigate();
    return (
        <div className='privacy-wrapper'>
            <header className="privacy-header">
                <button className="Privacy-back-button" onClick={() => navigate(-1)}>
                    <ArrowBack /> <span>Back</span>
                </button>
            </header>

            <header className='privacy-hero'>
                <h1>Privacy Policy</h1>
                <p>Last Updated: Feburary 2026• 8 min read</p>
            </header>

            <div className='privacy-container'>
                <aside className='privacy-sidebar'>
                    <h3>Contents</h3>
                    <ul>
                        <li><a href="#intro">1. Introduction</a></li>
                        <li><a href="#data">2. Data We Collect</a></li>
                        <li><a href="#usage">3. How We Use Data</a></li>
                        <li><a href="#security">4. Security Measures</a></li>
                        <li><a href="#rights">5. Your Rights</a></li>
                    </ul>
                </aside>

                <main className='privacy-content'>
                    <section id="intro">
                        <h2>1. Introduction</h2>
                        <p>At <strong>Tecc Savings</strong>, your financial privacy is our highest priority. This policy outlines how we handle your personal information with the integrity and transparency you expect from a SEC-regulated fintech partner.</p>
                    </section>

                    <section id="data">
                        <h2>2. Data We Collect</h2>
                        <div className='data-grid'>
                            <div className='data-item'>
                                <h4>Identity Data</h4>
                                <p>Full name, BVN (Bank Verification Number), and government-issued ID for KYC compliance.</p>
                            </div>
                            <div className='data-item'>
                                <h4>Financial Data</h4>
                                <p>Transaction history, funding sources, and investment preferences within the Tecc ecosystem.</p>
                            </div>
                        </div>
                    </section>

                    <section id="usage">
                        <h2>3. How We Use Your Data</h2>
                        <ul className='usagelist' >
                            <li>To facilitate global Naira investments and savings cycles.</li>
                            <li>To prevent fraudulent activities and satisfy AML (Anti-Money Laundering) regulations.</li>
                            <li>To provide personalized financial growth insights.</li>
                        </ul>
                    </section>

                    <section id="security">
                        <h2>4. Security Measures</h2>
                        <p>We utilize AES-256 encryption and multi-factor authentication (MFA) to ensure that your wealth and data remain inaccessible to unauthorized parties.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Privacypolicy;