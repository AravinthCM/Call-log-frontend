import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminDashboard.css';
import {
  FaHome, FaChartLine, FaFileAlt, FaCog, FaUser, FaQuestionCircle, FaSignOutAlt,
  FaCalendarAlt, FaUserInjured, FaUserPlus, FaFileMedical
} from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalPatients: 0,
    chronicPatients: 0,
    acutePatients: 0,
    newPatientsToday: 0,
    pendingCallsFromApp: 0,
    pendingMedicalRecords: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/api/dashboard');
        console.log('Dashboard data received:', response.data);
        setDashboardData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError('Failed to fetch dashboard data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = today.toLocaleDateString('en-US', options);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const pieData = {
    labels: ['Chronic Patients', 'Acute Patients'],
    datasets: [
      {
        data: [dashboardData.chronicPatients, dashboardData.acutePatients],
        backgroundColor: ['#4a90e2', '#50c878'],
        hoverBackgroundColor: ['#357ABD', '#3CA454'],
        borderWidth: 0,
        cutout: '60%',
        circumference: 180,
      }
    ]
  };

  const pieOptions = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      }
    }
  };

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

            <div className='dummy'>
                <div className="card-header">
                  <div className="card-icon">
                    <FaUserInjured size={24} color="#4a90e2" />
                  </div>
                  <h2>Total Patients</h2>
                  <div className="card-text">
                    <p className="card-number">{dashboardData.totalPatients}</p>
                    <div className="card-details">
                      <p>Chronic: {dashboardData.chronicPatients}</p>
                      <p>Acute: {dashboardData.acutePatients}</p>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="chart-container">
                    <Doughnut data={pieData} options={pieOptions} />
                    <div className="legend-container">
                      <div className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: '#4a90e2' }}></div>
                        <span className="legend-text">Chronic</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: '#50c878' }}></div>
                        <span className="legend-text">Acute</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

          </div>
          <div className="card small-card">
            <div className="card-icon">
              <FaUserPlus size={24} color="#50c878" />
            </div>
            <h2>New Patients Today</h2>
            <p className="card-number">{dashboardData.newPatientsToday}</p>
            <div className="card-details">
              <p>Pending Calls: {dashboardData.pendingCallsFromApp}</p>
            </div>
          </div>
          <div className="card small-card">
            <div className="card-icon">
              <FaFileMedical size={24} color="#f39c12" />
            </div>
            <h2>Pending Records</h2>
            <p className="card-number">{dashboardData.pendingMedicalRecords}</p>
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
