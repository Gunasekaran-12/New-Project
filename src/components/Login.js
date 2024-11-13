// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import your login-specific styles

const validatePassword = (password) => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasLetter && hasDigit && hasSpecialChar;
};

const validatePhoneNumber = (number) => {
  return /^\+91\d{10}$/.test(number); // Validates +91 followed by exactly 10 digits
};

const Login = () => {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Simulate a list of valid credentials
  const validUsers = [
    { emailOrNumber: 'Guna', password: 'Guna123?' },
    // Add more valid users as needed
  ];

  const handleRegister = () => {
    if (validatePhoneNumber(emailOrNumber) && validatePassword(password)) {
      alert('Registration successful!');
      navigate('/'); // Redirect to login page after successful registration
    } else {
      let errorMsg = '';
      if (!validatePhoneNumber(emailOrNumber)) errorMsg += 'Invalid phone number. ';
      if (!validatePassword(password)) errorMsg += 'Password must contain at least one letter, one digit, and one special character.';
      setError(errorMsg.trim());
    }
  };

  const handleLogin = () => {
    // Validate the credentials against the predefined list
    const isValidUser = validUsers.some(user => 
      (user.emailOrNumber === emailOrNumber || validatePhoneNumber(emailOrNumber)) && 
      validatePassword(password)
    );

    if (isValidUser) {
      navigate('/inventory'); // Redirect to Inventory page on successful login
    } else {
      setError('Invalid credentials or password. Password must contain at least one letter, one digit, and one special character.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">{isRegister ? 'Register' : 'Login'}</h2>

        <input
          type="text"
          placeholder={isRegister ? 'Phone Number (+91XXXXXXXXXX)' : 'Username or Phone Number'}
          value={emailOrNumber}
          onChange={(e) => setEmailOrNumber(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button onClick={isRegister ? handleRegister : handleLogin} className="login-button">
          {isRegister ? 'Register' : 'Login'}
        </button>

        {error && <p className="error-message">{error}</p>}

        <div className="toggle-register-login">
          {isRegister ? (
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsRegister(false)} className="toggle-link">
                Sign In!..
              </span>
            </p>
          ) : (
            <p>
              New to the website?{' '}
              <span onClick={() => setIsRegister(true)} className="toggle-link">
                Register
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
