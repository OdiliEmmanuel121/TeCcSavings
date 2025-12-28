import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, Code, Security, Storage, Language } from '@mui/icons-material';
import './Developer.css';

const Developer = () => {
  const navigate = useNavigate();

  const devDetails = [
    {
      icon: <Code />,
      title: "Frontend Engineering",
      writeup: "Built with React.js and a focus on pixel-perfect, responsive user interfaces to ensure a seamless savings experience."
    },
    {
      icon: <Storage />,
      title: "Backend & Systems",
      writeup: "Powered by robust Node.js architectures and secure databases to handle millions of transactions in real-time."
    },
    {
      icon: <Security />,
      title: "Cyber Security",
      writeup: "Implementing bank-grade 256-bit encryption and multi-factor authentication to protect every user's treasury."
    },
    {
      icon: <Language />,
      title: "Open API",
      writeup: "Designed with developers in mind, our modular API allows for easy integration with third-party financial tools."
    }
  ];

  return (
    <div className="dev-container">
      {/* Navigation Header */}
      <header className="dev-header">
        <button className="back-arrow" onClick={() => navigate(-1)}>
          <ArrowBack /> <span>Back</span>
        </button>
      </header>

      <section className="dev-hero">
        <h1>Meet the <span className="green-text">Architects</span></h1>
        <p>The engineering team behind TeCc is dedicated to building the most secure and scalable wealth-tech solution in Africa.</p>
      </section>

      {/* Responsive Card Grid */}
      <div className="dev-grid">
        {devDetails.map((item, index) => (
          <div className="dev-card" key={index}>
            <div className="dev-icon-circle">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.writeup}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;