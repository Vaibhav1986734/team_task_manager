import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Member'
  });

  const submit = async () => {
    await API.post('/auth/register', form);
    alert('Registered');
    navigate('/');
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder='Name' onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type='password' placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option>Member</option>
        <option>Admin</option>
      </select>
      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;