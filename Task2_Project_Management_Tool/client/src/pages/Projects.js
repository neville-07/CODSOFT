import React, { useEffect, useState } from 'react';
import { getProjects, createProject } from '../services/projectService';
import './Projects.css';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newProject = await createProject({ title });
    setProjects([...projects, newProject]);
    setTitle('');
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>

      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
