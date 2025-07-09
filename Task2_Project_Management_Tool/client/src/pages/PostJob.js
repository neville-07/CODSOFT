import React, { useState } from 'react';
import './PostJob.css';

const PostJob = () => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', job);
    alert('Job posted successfully!');
    setJob({ title: '', company: '', location: '', description: '' });
  };

  return (
    <div className="form-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
