import React from 'react';
import './Jobs.css';

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h1>Available Jobs</h1>

      <div className="job-list">
        <div className="job-card">
          <h3>React Developer</h3>
          <p>Netflix – Mumbai</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="job-card">
          <h3>DevOps Engineer</h3>
          <p>Infosys – Pune</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="job-card">
          <h3>Product Manager</h3>
          <p>Swiggy – Remote</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
