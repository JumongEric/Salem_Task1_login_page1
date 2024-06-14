import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/add-user.png';
import password_icon from '../Assets/key.png';

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Username:', username);
      console.log('Password:', password);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (errors.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: '',
      }));
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (errors.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };

  return (
    <div className="container">
      <div className="left-side"></div>
      <div className="right-side">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="Email Icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            {errors.username && <div className="error">{errors.username}</div>}
            <div className="input">
              <img src={password_icon} alt="Password Icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="forgot-password">
            Forgot Password? <span>Click Here!</span>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">
              Login
            </button>
            <div className="sign-up">
              Don't have an account? <span>Sign Up</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;