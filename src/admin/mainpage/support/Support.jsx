
import { useNavigate } from 'react-router-dom';
import { 
  ArrowBack, 
  WhatsApp, 
  Email, 
  QuestionAnswer, 
  HeadsetMic 
} from '@mui/icons-material';
import './Support.css';

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className='Support-Container'>
      <header className="support-header">
        <button className="back-arrow" onClick={() => navigate(-1)}>
          <ArrowBack /> <span>Back</span>
        </button>
        <h1>Customer Support</h1>
        <p>Got a question? We're here to help you grow your wealth.</p>
      </header>

      <div className="support-grid">
        {/* Quick Contact Cards */}
        <div className="support-card whatsapp">
          <WhatsApp className="s-icon" />
          <h3>Chat on WhatsApp</h3>
          <p>Instant response from our team.</p>
          <a href="https://wa.me/2348101384066" target="_blank" rel="noreferrer">Message us</a>
        </div>

        <div className="support-card email">
          <Email className="s-icon" />
          <h3>Email Support</h3>
          <p>Get a response within 24 hours.</p>
          <a href="mailto:support@tecc.com">Send an Email</a>
        </div>

        <div className="support-card faq">
          <QuestionAnswer className="s-icon" />
          <h3>Visit FAQs</h3>
          <p>Quick answers to common questions.</p>
          <button onClick={() => navigate('/faqs')}>View FAQs</button>
        </div>
      </div>

      {/* Support Form */}
      <section className="support-form-section">
        <div className="form-title">
          <HeadsetMic />
          <h2>Send us a message</h2>
        </div>
        <form className="support-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="How can we help?" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell us more about your issue..." required></textarea>
          </div>
          <button type="submit" className="submit-support">Submit Request</button>
        </form>
      </section>
    </div>
  );
}

export default Support;