
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';
import './Disclosure.css';

const Disclosure = () => {
  const navigate = useNavigate();

  return (
    <div className="disclosure-wrapper">
      {/* Back Button */}
      <button className="back-nav" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        <span>Return</span>
      </button>

      <header className="disclosure-hero">
        <div className="hero-content">
          <Scale size={48} className="hero-icon" />
          <h1>Legal Disclosure</h1>
          <p>Transparency and Integrity in every investment.</p>
        </div>
      </header>

      <main className="disclosure-body">
        <div className="disclosure-card main-warning">
          <AlertTriangle size={24} color="#00d094" />
          <div>
            <h3>Investment Risk Warning</h3>
            <p>
              Investment involves risk. The value of investments and the income from them can go down as well as up and you may not get back the amount originally invested.
            </p>
          </div>
        </div>

        <section className="disclosure-section">
          <h2>1. Regulatory Status</h2>
          <p>
            Tecc Savings Technology is a registered entity. Our investment products are managed in partnership with SEC-licensed asset managers. We strictly adhere to the guidelines set by the Securities and Exchange Commission (SEC) to ensure the safety of your funds.
          </p>
        </section>

        <section className="disclosure-section">
          <h2>2. No Financial Advice</h2>
          <p>
            The content on this platform is for informational purposes only. Tecc Savings does not provide personal financial advice. We recommend consulting with a certified financial advisor before making significant investment decisions.
          </p>
        </section>

        <section className="disclosure-section">
          <h2>3. Past Performance</h2>
          <p>
            Past performance is not a reliable indicator of future results. Projected returns are based on current market analysis and are not guaranteed.
          </p>
        </section>

        <div className="disclosure-grid">
          <div className="grid-item">
            <ShieldCheck size={20} />
            <h4>Data Protection</h4>
            <p>Your data is encrypted using 256-bit AES technology.</p>
          </div>
          <div className="grid-item">
            <ShieldCheck size={20} />
            <h4>KYC Compliance</h4>
            <p>We perform rigorous identity checks to prevent fraud.</p>
          </div>
        </div>
      </main>

      <footer className="disclosure-footer">
        <p>&copy; 2026 Tecc Savings Technology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Disclosure;