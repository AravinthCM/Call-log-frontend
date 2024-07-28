import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/PatientsTable.css';

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
        try{
            const response = await axios.get('http://localhost:5000/api/patients/list');
            setPatients(response.data);
          }catch (error) {
            console.error('Error fetching patients:', error.response ? error.response.data : error.message);
        }
    };

    fetchPatients();
  }, []);

  if (!Array.isArray(patients) || patients.length === 0) {
    return <div>No patients data available</div>;
  }

  return (
    <table className="patients-table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Disease Type</th>
          <th>Call Status</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={patient._id}>
            <td>{index + 1}</td>
            <td>{patient.name}</td>
            <td>{patient.mobileNumber}</td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>{patient.diseaseType}</td>
            <td>
              {patient.callFromApp === 'pending' ? (
                <span className="pending">Pending</span>
              ) : (
                <span className="done">Done</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientsTable;
