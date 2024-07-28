import React from 'react';
import '../css/AdminDashboard.css';
import {
  FaHome, FaChartLine, FaFileAlt, FaCog, FaUser, FaQuestionCircle, FaSignOutAlt,
  FaCalendarAlt, FaUserInjured, FaUserPlus, FaFileMedical
} from 'react-icons/fa';

const AdminDashboard = () => {
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = today.toLocaleDateString('en-US', options);

  // Placeholder data - replace with actual data from your backend
  const totalPatients = 100;
  const chronicPatients = 60;
  const acutePatients = 40;
  const newPatientsToday = 5;
  const pendingCallsFromApp = 3;
  const pendingMedicalRecords = 7;

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src="https://via.placeholder.com/40" alt="Logo" />
          <span>Admin</span>
        </div>
        <nav className="nav-items">
          <a href="#home" className="nav-item">
            <FaHome size={18} />
            <span>Home</span>
          </a>
          <a href="#analytics" className="nav-item">
            <FaChartLine size={18} />
            <span>Analytics</span>
          </a>
          <a href="#reports" className="nav-item">
            <FaFileAlt size={18} />
            <span>Reports</span>
          </a>
          <a href="#settings" className="nav-item">
            <FaCog size={18} />
            <span>Settings</span>
          </a>
          <a href="#profile" className="nav-item">
            <FaUser size={18} />
            <span>Profile</span>
          </a>
        </nav>
        <div className="sidebar-bottom">
          <a href="#help" className="bottom-item">
            <FaQuestionCircle size={18} />
            <span>Help</span>
          </a>
          <a href="#logout" className="bottom-item">
            <FaSignOutAlt size={18} />
            <span>Logout</span>
          </a>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="top-bar">
            <h1>Hello Admin</h1>
            <p>Track patient progress here</p>
          </div>
          <div className="progress-container">
            <p className="date-container">
              <span className="calendar-icon">
                <FaCalendarAlt size={18} color="#000" />
              </span>
              {date}
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card small-card">
            <div className="card-icon">
              <FaUserInjured size={24} color="#4a90e2" />
            </div>
            <h2>Total Patients</h2>
            <p className="card-number">{totalPatients}</p>
            <div className="card-details">
              <p>Chronic: {chronicPatients}</p>
              <p>Acute: {acutePatients}</p>
            </div>
          </div>
          <div className="card small-card">
            <div className="card-icon">
              <FaUserPlus size={24} color="#50c878" />
            </div>
            <h2>New Patients Today</h2>
            <p className="card-number">{newPatientsToday}</p>
            <div className="card-details">
              <p>Pending Calls: {pendingCallsFromApp}</p>
            </div>
          </div>
          <div className="card small-card">
            <div className="card-icon">
              <FaFileMedical size={24} color="#f39c12" />
            </div>
            <h2>Pending Records</h2>
            <p className="card-number">{pendingMedicalRecords}</p>
            <div className="card-details">
              <p>Medical Records to Review</p>
            </div>
          </div>
        </div>
        <div className="card full-width-card"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
