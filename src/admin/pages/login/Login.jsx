import React, { useState } from 'react';
import { Visibility, VisibilityOff, Close, MarkEmailRead } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Login.css';
import efx1 from '../../../assets/efx1.png';
import logoimg from '../../../assets/logo.png'


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const isStrong = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setIsEmailSent(true);
  };

  return (
    <div className='loginContainer'>
      <div className='logo1'>
        <img src={logoimg} alt="Tecc Logo" className='logoclasslog' />
      </div>
      <div className='loginDetails'>
        <h1 className='loginclassh1'>TeCc Savings.</h1>
        <h2 className='loginclassh2'>Welcome to TeCc Savings.</h2>
        <p className='loginclassh3'>Please enter your sign-in details to continue.</p>

        <form className='logincard' onSubmit={(e) => e.preventDefault()}>
          <input
            type="email" /* Changed to email for better mobile keyboard support */
            placeholder='Email address'
            className='loginEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='loginPassword'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className='visiblepassword'>
              {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </button>
          </div>

          {password.length > 0 && (
            <p style={{ color: isStrong ? '#278f2e' : '#ff4d4d', fontSize: '12px', margin: '10px 20px' }}>
              {isStrong ? '✓ Strong password' : 'Password Must be 8+ chars, include uppercase & number'}
            </p>
          )}

          <button type="submit" className='loginButton'>Log in</button>

          {/* Added type="button" to prevent form submission */}
          <button type="button" className='loginButton2' onClick={() => setShowModal(true)}>
            Forgot password
          </button>

          <Link className='loginButton3' to="/getstarted">Create account</Link>
        </form>
      </div>

      <div>
        <img src={efx1} alt="efx" className='iphoneimgup' />
      </div>

      {/* --- FORGOT PASSWORD MODAL --- */}
      {showModal && (
        <div className='modal-overlay'>
          <div className='forgot-modal-card'>
            <button className='close-modal' onClick={() => { setShowModal(false); setIsEmailSent(false); }}><Close /></button>

            {!isEmailSent ? (
              <>
                <h2>Reset Password</h2>
                <p>Enter the email associated with your account and we'll send a link to reset your password.</p>
                <form onSubmit={handleForgotSubmit}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className='loginEmail'
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                  />
                  <button type="submit" className='loginButton'>Send Reset Link</button>
                </form>
              </>
            ) : (
              <div className='success-state'>
                <div className='success-icon-wrap'><MarkEmailRead /></div>
                <h2>Check your email</h2>
                <p>We've sent a password reset link to <strong>{resetEmail}</strong>. Please check your inbox.</p>
                <button className='loginButton' onClick={() => setShowModal(false)}>Back to Login</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;