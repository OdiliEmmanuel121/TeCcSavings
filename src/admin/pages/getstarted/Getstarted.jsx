import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Getstarted.css';
import efx1 from '../../../assets/efx1.png';

const Getstarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false); // State for the pop-up

  const nextStep = () => {
    if (currentStep === 5) {
      setIsSuccess(true); // Show pop-up on the last step
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className='get-started-page-wrapper'>
      {/* --- SUCCESS POP-UP MODAL --- */}
      {isSuccess && (
        <div className="modal-overlay">
          <div className="modal-content success-card">
            <div className="success-icon">✓</div>
            <h2>Account Created!</h2>
            <p>Your Tecc Savings account has been set up successfully. You can now log in to start growing your wealth.</p>
            <Link className='Login' to="/login" style={{
              display: 'block',
              marginTop: '20px',
              padding: '14px',
              backgroundColor: '#00d094',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}>
              Log in to Continue
            </Link>
          </div>
        </div>
      )}

      <div className='get-started-container'>
        <div className='auth-section'>
          <div className='auth-header'>
            <h1>{currentStep === 1 ? "Create Account" : currentStep === 2 ? "Personal Info" : currentStep === 3 ? "Address" : currentStep === 4 ? "Review" : "Security"}</h1>
            <p>Step {currentStep} of 5 - Join Tecc Savings today.</p>
          </div>

          <div className='stepper-wrapper'>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={`step ${currentStep === num ? 'active' : currentStep > num ? 'completed' : ''}`}>
                <span>{num}</span> {num === 1 ? 'Nationality' : num === 2 ? 'Info' : num === 3 ? 'Address' : num === 4 ? 'Review' : 'Security'}
              </div>
            ))}
          </div>

          <div className='form-card'>
            {/* SPAN 1: NATIONALITY */}
            {currentStep === 1 && (
              <div className='input-group-vertical'>
                <label className='input-label'>Select Nationality</label>
                <select className='form-input' defaultValue="">
                  <option value="" disabled>Select your country</option>
                  <option value="NG">Nigeria</option>
                  <option value="GH">Ghana</option>
                  <option value="KE">Kenya</option>
                  <option value="CA">Canada</option>
                  <option value="US">USA</option>
                  <option value="US">England</option>
                </select>
                <button className='Continuebutton' onClick={nextStep}>Continue</button>
              </div>
            )}

            {/* SPAN 2: INFO */}
            {currentStep === 2 && (
              <div className='input-group-vertical'>
                <div className='input-field-wrap'>
                  <label className='input-label'>Full Name</label>
                  <input type="text" className='form-input' placeholder='Enter legal name' />
                </div>
                <div className='input-field-wrap'>
                  <label className='input-label'>Email Address</label>
                  <input type="email" className='form-input' placeholder='name@email.com' />
                </div>
                <div className='button-row' style={{display: 'flex', gap: '10px'}}>
                  <button className='BackButton' onClick={prevStep}>Back</button>
                  <button className='Continuebutton' onClick={nextStep}>Continue</button>
                </div>
              </div>
            )}

            {/* SPAN 3: ADDRESS */}
            {currentStep === 3 && (
              <div className='input-group-vertical'>
                <label className='input-label'>Home Address</label>
                <input type="text" className='form-input' placeholder='Street address' />
                <div className='button-row' style={{display: 'flex', gap: '10px'}}>
                  <button className='BackButton' onClick={prevStep}>Back</button>
                  <button className='Continuebutton' onClick={nextStep}>Continue</button>
                </div>
              </div>
            )}

            {/* SPAN 4 & 5 */}
            {currentStep >= 4 && (
              <div className='input-group-vertical'>
                <p>Finalizing your {currentStep === 4 ? 'Review' : 'Security'}...</p>
                <div className='button-row' style={{display: 'flex', gap: '10px'}}>
                  <button className='BackButton' onClick={prevStep}>Back</button>
                  <button className='Continuebutton' onClick={nextStep}>
                    {currentStep === 5 ? "Finish" : "Continue"}
                  </button>
                </div>
              </div>
            )}

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p className='have'>
                Already have an account? <Link className='Login' to="/login">Log in </Link>
              </p>
            </div>
          </div>
        </div>

        <div className='efxmain'>
          <img src={efx1} alt="App Preview" className='iphoneimgup' />
        </div>
      </div>
    </div>
  );
}

export default Getstarted;