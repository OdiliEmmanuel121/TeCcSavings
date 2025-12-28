import './Home.css'
import { Link } from 'react-router-dom';
import { 
  AccountBalanceWallet, 
  TrendingUp, 
  SupportAgent, 
  Person 
} from '@mui/icons-material';
import './Home.css';

const Home = () => {
  return (
    <div className="internal-home">
      <header className="home-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here is your financial overview.</p>
      </header>

      {/* Quick Stats / Top Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Savings</h3>
          <p>₦450,000.00</p>
        </div>
        <div className="stat-card">
          <h3>Total Interest</h3>
          <p className="green-text">+₦12,400.00</p>
        </div>
      </div>

      {/* Internal Navigation Links (Middle of screen) */}
      <div className="internal-nav-grid">
        <Link to="/wall" className="nav-box">
          <AccountBalanceWallet className="icon" />
          <span>My Wallet</span>
        </Link>
        <Link to="/inv" className="nav-box">
          <TrendingUp className="icon" />
          <span>Invest</span>
        </Link>
        <Link to="/acc" className="nav-box">
          <Person className="icon" />
          <span>Account</span>
        </Link>
        <Link to="/con" className="nav-box">
          <SupportAgent className="icon" />
          <span>Support</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;