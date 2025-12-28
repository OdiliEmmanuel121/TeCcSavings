
import { useNavigate } from 'react-router-dom';
import {
    ArrowBack,
    Security,
    TrendingUp,
    AccountBalance,
    PhonelinkRing
} from '@mui/icons-material';
import './Whyteccsavings.css';

const Whyteccsavings = () => {
    const navigate = useNavigate();

    const benefits = [
        {
            icon: <Security />,
            title: "Bank-Grade Security",
            desc: "We use 256-bit AES encryption and two-factor authentication to ensure your hard-earned money stays exactly where it belongs."
        },
        {
            icon: <TrendingUp />,
            title: "Competitive Interest",
            desc: "Don't let inflation eat your savings. Earn up to 15% per annum, paid daily into your TeCc wallet."
        },
        {
            icon: <AccountBalance />,
            title: "Disciplined Savings",
            desc: "Our 'Lock-In' feature prevents you from spending your savings impulsively, helping you reach your financial goals faster."
        },
        {
            icon: <PhonelinkRing />,
            title: "24/7 Accessibility",
            desc: "Monitor your growth, automate your savings, and manage your portfolio anytime, anywhere from your mobile device."
        }
    ];

    return (
        <div className="why-container">
            {/* Back Arrow Header */}
            <header className="why-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <ArrowBack /> <span>Back</span>
                </button>
            </header>

            <div className="why-content">
                <div className="text-section">
                    <h1>Why Choose <span className="green-text">TeCc Savings?</span></h1>
                    <p>We provide a smarter way to save, invest, and grow your wealth with transparency and ease.</p>
                </div>

                {/* Responsive Grid of Cards */}
                <div className="benefit-grid">
                    {benefits.map((item, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="benefit-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="why-footer-cta">
                    <h2>Start your journey to financial freedom today.</h2>
                    <button className="join-btn" onClick={() => navigate('/getstarted')}>
                        Join 500,000+ Savers
                    </button>
                </div>
            </div>

            {/* Comparison Section */}
            <section className="comparison-section">
                <div className="text-section">
                    <h2>TeCc vs. Traditional Banks</h2>
                    <p>See why other savers are moving their money to TeCc.</p>
                </div>

                <div className="table-container">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Traditional Banks</th>
                                <th className="highlight-column">TeCc Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Interest Rate (p.a)</td>
                                <td>1% - 3%</td>
                                <td className="highlight-column">Up to 15%</td>
                            </tr>
                            <tr>
                                <td>Maintenance Fees</td>
                                <td>Monthly Charges</td>
                                <td className="highlight-column">Zero Fees</td>
                            </tr>
                            <tr>
                                <td>Withdrawal Limit</td>
                                <td>Unlimited (Hard to Save)</td>
                                <td className="highlight-column">Controlled (Goal-focused)</td>
                            </tr>
                            <tr>
                                <td>Account Opening</td>
                                <td>Paperwork & Queues</td>
                                <td className="highlight-column">2 Minutes on Phone</td>
                            </tr>
                            <tr>
                                <td>Customer Support</td>
                                <td>Automated Bots</td>
                                <td className="highlight-column">24/7 Priority Support</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Whyteccsavings;