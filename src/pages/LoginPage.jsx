import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
import '../css/LoginPage.css'; // Updated import statement

const LoginPage = () => {
  const [role, setRole] = useState('admin');
  const [error, setError] = useState('');

  // Handle login
  const handleLogin = async (phoneNumber, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        phoneNumber,
        password,
        role
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        if (role === 'admin') {
          window.location.href = '/admin-dashboard';
        } else {
          window.location.href = '/assistant-doctor-dashboard';
        }
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="icon-container">
          <i className="fas fa-user-md icon"></i> {/* Sample icon */}
        </div>
        <h1>Welcome back</h1>
        <div className="role-switch">
          <button
            className={`role-button ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
          <button
            className={`role-button ${role === 'assistantDoctor' ? 'active' : ''}`}
            onClick={() => setRole('assistantDoctor')}
          >
            Assistant Doctor
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
