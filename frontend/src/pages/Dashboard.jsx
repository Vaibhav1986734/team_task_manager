import { useEffect, useState } from 'react';
import API from '../api';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const p = await API.get('/projects');
    const t = await API.get('/tasks');

    setProjects(p.data);
    setTasks(t.data);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}

      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
          <p>Assigned To: {task.assignedTo?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;