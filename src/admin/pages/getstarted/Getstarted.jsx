import React from 'react';
import './Getstarted.css';
import efx1 from '../../../assets/efx1.png';

const Getstarted = () => {
  return (
    <div className='get-started-page-wrapper'>
      <div className='get-started-container'>
        
        {/* Left Side: Form Content */}
        <div className='auth-section'>
          <div className='auth-header'>
            <h1>Create Account</h1>
            <p>Join Tecc Savings and start your investment journey.</p>
          </div>

          <div className='stepper-wrapper'>
            <div className='step active'><span>1</span> Nationality</div>
            <div className='step'><span>2</span> Info</div>
            <div className='step'><span>3</span> Address</div>
            <div className='step'><span>4</span> Review</div>
            <div className='step'><span>5</span> Security</div>
          </div>

          <div className='form-card'>
            <label className='input-label'>Select Nationality</label>
            <div className='input-group'>
              <select className='country-dropdown'>
                <option value="" disabled selected>Select your country</option>
                <option value="NG">Nigeria</option>
                <option value="GH">Ghana</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
              </select>

              <a className='Continuebutton' href="#">Continue</a>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <a className='have' href="#">Already have an account? Log in</a>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Effect */}
        <div className='efxmain'>
          <img src={efx1} alt="App Preview" className='iphoneimgup' />
        </div>

      </div>
    </div>
  );
}

export default Getstarted;