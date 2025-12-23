import './Getstarted.css';

const Getstarted = () => {
  return (
    <div className='get-started-container'>
      <div className='auth-header'>
        <h1>Create Account</h1>
        <p>Join Tecc Savings and start your investment journey.</p>
      </div>

      <div className='stepper-wrapper'>
        <div className='step active'><span>1</span> Nationality</div>
        <div className='step'><span>2</span> Personal Info</div>
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
            <option value="KN">Kenya</option>
            <option value="CM">Cameroon</option>
            <option value="GH">Ghana</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
          </select>
          
          <a className='Continuebutton' href="#">Continue</a>
        </div>

        <div>
          <a className='have' href="#">Have an account Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;