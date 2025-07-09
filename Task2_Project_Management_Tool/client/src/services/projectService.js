const API_URL = 'http://localhost:5000/api/projects';

export const getProjects = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createProject = async (projectData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(projectData),
  });
  return res.json();
};
