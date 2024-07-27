import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AssistantDoctorDashboard from './pages/AssistantDoctorDashboard';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/assistant-doctor-dashboard" element={<AssistantDoctorDashboard />} />
      </Routes>
    </Router> 
  );
};

export default App;
