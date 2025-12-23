import React, { useState } from 'react';
import {
  Visibility,
  VisibilityOff,
  ArrowBackIosOutlined
} from '@mui/icons-material';
import './Login.css'
import efx1 from '../../../assets/efx1.png'



const Login = () => {
  // 1. State should be at the top level of the component
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 2. Logic for validation
  const isStrong = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  return (
    <div className='loginContainer'>
      <div className='loginDetails'>
        <h1 className='loginclassh1'>TeCc Savings.</h1>
        <h2 className='loginclassh2'>Welcome to TeCc Savings.</h2>
        <p className='loginclassh3'>Please enter your sign-in details to continue.</p>

        <div className='logincard'>
          {/* Email Input */}
          <input
            type="text"
            placeholder='Email address'
            className='loginEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Wrapper */}
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='loginPassword'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='visiblepassword'
            >
              {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </button>
          </div>

          {/* Password Strength Feedback */}
          {password.length > 0 && (
            <p style={{ color: isStrong ? 'green' : 'red', fontSize: '12px', marginTop: '8px', margin: '20px' }}>
              {isStrong ? '✓ Strong password' : 'Password Must be 8+ chars, include uppercase & number'}
            </p>
          )}
          <a className='loginButton' href="#">Log in </a>
          <a className='loginButton2' href="#">Forgot password</a>
          <a className='loginButton3' href="#">Create account </a>
        </div>
      </div>
      <div>
        <img src={efx1} alt="efx" className='iphoneimgup' />
      </div>

    </div>
  );
};

export default Login;