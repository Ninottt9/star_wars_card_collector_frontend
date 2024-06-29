// src/components/Register.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(nickname, password);
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('register failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nickname:</label>
        <input type='text' value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type='submit'>Register</button>
    </form>
  );
};

export default Register;
