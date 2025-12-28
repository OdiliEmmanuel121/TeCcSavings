import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, HelpCircle, ShieldCheck, Wallet, Zap } from 'lucide-react';
import './Faqs.css';

const Faqs = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: "General",
      icon: <HelpCircle size={20} />,
      questions: [
        { q: "What is Tecc Savings?", a: "Tecc Savings is a digital wealth management platform that allows Nigerians to save and invest in global Naira assets, including stocks and real estate, with professional management." },
        { q: "Is Tecc Savings regulated?", a: "Yes. We operate in partnership with SEC-licensed asset managers, ensuring all investments are held securely and follow strict regulatory guidelines." }
      ]
    },
    {
      category: "Savings & Circles",
      icon: <Wallet size={20} />,
      questions: [
        { q: "What is a 'Circle'?", a: "A Circle is a social savings feature where you and your friends can save towards a common goal or compete to see who reaches their target first." },
        { q: "How are interest rates calculated?", a: "Interest is calculated daily and paid out monthly or at the end of your savings tenor, depending on the specific product you choose." }
      ]
    },
    {
      category: "Security",
      icon: <ShieldCheck size={20} />,
      questions: [
        { q: "How secure is my data?", a: "We use bank-grade AES-256 encryption and multi-factor authentication (MFA) to protect your identity and financial information." }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <button className="faq-back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        <span>Go Back</span>
      </button>

      <header className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about growing your wealth with Tecc.</p>
      </header>

      <div className="faq-container">
        {faqData.map((section, sIndex) => (
          <div key={sIndex} className="faq-section">
            <div className="category-title">
              {section.icon}
              <h3>{section.category}</h3>
            </div>
            
            {section.questions.map((item, qIndex) => {
              const globalIndex = `${sIndex}-${qIndex}`;
              const isOpen = activeIndex === globalIndex;
              
              return (
                <div key={qIndex} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleAccordion(globalIndex)}>
                    <span>{item.q}</span>
                    <ChevronDown className={`chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  <div className="faq-answer">
                    <div className="answer-content">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <footer className="faq-footer">
        <p>Still have questions?</p>
        <div className="footer-links">
          <Link to="/contact" className="contact-link">Contact Support</Link>
          <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Faqs;