const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTask = async (taskData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  return res.json();
};
