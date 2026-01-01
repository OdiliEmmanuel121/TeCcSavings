
import './Invest.css';
import { TrendingUp, EventAvailable, Timer } from '@mui/icons-material';

const Invest = () => {
    const investmentData = [
        { id: 1, title: "House Rent", amount: "950,000", date: "Jan 12, 2025", maturity: "Jan 12, 2026", status: "Active" },
        { id: 2, title: "Kiddies Future", amount: "40,000,000", date: "Feb 01, 2025", maturity: "Feb 01, 2040", status: "Active" },
        { id: 3, title: "Vehicle Fund", amount: "7,000,000", date: "Mar 15, 2025", maturity: "Mar 15, 2027", status: "Active" },
    ];

    return (
        <div className='Invest-Container'>
            <header className="invest-header">
                <h1>My Investments</h1>
                <p>Track your portfolio growth and maturity dates.</p>
            </header>

            <div className="invest-list">
                {investmentData.map((item) => (
                    <div key={item.id} className="invest-item-card">
                        <div className="invest-card-top">
                            <div className="invest-title">
                                <div className="icon-bg"><TrendingUp /></div>
                                <h3>{item.title}</h3>
                            </div>
                            <span className="status-badge">{item.status}</span>
                        </div>

                        <div className="invest-amount">
                            <p>₦{item.amount}.00</p>
                        </div>

                        <div className="invest-dates-grid">
                            <div className="date-group">
                                <EventAvailable className="date-icon" />
                                <div>
                                    <span>Invested Date</span>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className="date-group">
                                <Timer className="date-icon maturity" />
                                <div>
                                    <span>Maturity Date</span>
                                    <p>{item.maturity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Invest;