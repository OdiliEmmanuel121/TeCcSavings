
import './Wallet.css';
import { 
    AccountBalanceWallet, 
    Savings, 
    CreditCard, 
    AccountBalance, 
    QrCodeScanner,
    TrendingUp 
} from '@mui/icons-material';

const Wallet = () => {
    return (
        <div className='Wallet-Container'>
            <header className="wallet-header">
                <h2>My Wallet</h2>
                <p>Monitor your savings and top up your account.</p>
            </header>

            {/* --- BALANCE CARDS --- */}
            <div className="balance-grid">
                <div className="balance-card saved">
                    <div className="card-top">
                        <div className="icon-circle"><Savings /></div>
                        <h3>Total Amount Saved</h3>
                    </div>
                    <p className="balance-amount">₦12,450,000.00</p>
                    <div className="balance-footer">
                        <TrendingUp className="trend-icon" />
                        <span>+12.5% since last month</span>
                    </div>
                </div>

                <div className="balance-card remaining">
                    <div className="card-top">
                        <div className="icon-circle"><AccountBalanceWallet /></div>
                        <h3>Remaining to Goal</h3>
                    </div>
                    <p className="balance-amount">₦7,550,000.00</p>
                    <div className="progress-bar-container">
                        <div className="progress-fill" style={{ width: '62%' }}></div>
                    </div>
                    <span className="progress-text">62% of your target reached</span>
                </div>
            </div>

            {/* --- FUNDING SECTION --- */}
            <div className="funding-section">
                <h3>Add Money</h3>
                <div className="funding-options">
                    <div className="fund-method">
                        <CreditCard className="method-icon" />
                        <div className="method-text">
                            <h4>ATM Card</h4>
                            <p>Visa, Mastercard, Verve</p>
                        </div>
                    </div>

                    <div className="fund-method">
                        <AccountBalance className="method-icon" />
                        <div className="method-text">
                            <h4>Bank Transfer</h4>
                            <p>Instant deposit via USSD/App</p>
                        </div>
                    </div>

                    <div className="fund-method">
                        <QrCodeScanner className="method-icon" />
                        <div className="method-text">
                            <h4>Scan to Pay</h4>
                            <p>Use your banking app QR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wallet;