import { useNavigate } from 'react-router-dom';
import './Teccbusiness.css';
import { ArrowBack, BusinessCenter, Security, Insights, Groups } from '@mui/icons-material';



const Teccbusiness = () => {
    const navigate = useNavigate();

    return (
        <div className="business-page">
            <header className="why-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <ArrowBack /> <span>Back</span>
                </button>
            </header>

            <section className="business-hero">
                <h1>TeCc for Business</h1>
                <p>The corporate wealth management tool designed for the modern African enterprise.</p>
            </section>

            <section className="business-content">
                <div className="business-grid">
                    <div className="b-card">
                        <BusinessCenter className="b-icon" />
                        <h3>Automated Payroll Savings</h3>
                        <p>Empower your employees by allowing them to save a percentage of their salary automatically before they even see it.</p>
                    </div>

                    <div className="b-card">
                        <Groups className="b-icon" />
                        <h3>Project Funding</h3>
                        <p>Lock away business capital for specific projects and earn high-yield interest while your funds sit idle.</p>
                    </div>

                    <div className="b-card">
                        <Security className="b-icon" />
                        <h3>Institutional Security</h3>
                        <p>We use 256-bit AES encryption to ensure your corporate treasury is as safe as a bank vault.</p>
                    </div>
                </div>

                <div className="about-text">
                    <h2>About the TeCc Model</h2>
                    <p>
                        Inspired by the proven "Piggyvest" micro-investment model, TeCc Business
                        bridges the gap between traditional corporate banking and modern wealth tech.
                        We provide a platform where businesses can manage liquidity ratio efficiently,
                        invest in low-risk financial instruments, and offer financial wellness
                        benefits to their staff.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Teccbusiness;