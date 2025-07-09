import React from 'react';
import { useParams } from 'react-router-dom';

const jobData = {
  'react-developer': {
    title: 'React Developer',
    company: 'Netflix',
    location: 'Mumbai',
    description: 'Work with a top-tier team to build beautiful UIs using React.js.'
  },
  'devops-engineer': {
    title: 'DevOps Engineer',
    company: 'Infosys',
    location: 'Pune',
    description: 'Automate infrastructure and CI/CD pipelines for cloud-native apps.'
  },
  'product-manager': {
    title: 'Product Manager',
    company: 'Swiggy',
    location: 'Remote',
    description: 'Lead product strategy and roadmap with cross-functional teams.'
  }
};

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobData[jobId];

  if (!job) {
    return <h2 style={{ padding: '20px' }}>Job not found</h2>;
  }

  return (
    <div style={{ padding: '30px' }}>
      <h2>{job.title}</h2>
      <h4>{job.company} – {job.location}</h4>
      <p style={{ marginTop: '20px' }}>{job.description}</p>
    </div>
  );
};

export default JobDetail;
