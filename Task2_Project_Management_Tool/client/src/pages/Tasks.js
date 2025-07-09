import React, { useEffect, useState } from 'react';
import { getTasks, createTask } from '../services/taskService';
import './Tasks.css';


const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ title: '', projectId: '' });

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleChange = (e) => {
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask(taskInput);
    setTasks([...tasks, newTask]);
    setTaskInput({ title: '', projectId: '' });
  };

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={taskInput.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="projectId"
          placeholder="Project ID"
          value={taskInput.projectId}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} — Project: {task.projectId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
