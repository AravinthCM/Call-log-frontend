import React, { useState } from 'react';
import '../css/LoginPage.css';
const LoginForm = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(phoneNumber, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='fieldContainer'>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          placeholder="Phone number*"
          className='inputFieldlog'
        />
      </div>
      <div> 
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password*"
          className='inputFieldlog'
        />
      </div>
      <button type="submit" className='loginButton'>Login</button>
    </form>
  );
};

export default LoginForm;
