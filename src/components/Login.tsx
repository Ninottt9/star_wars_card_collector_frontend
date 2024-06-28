// src/components/Login.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(nickname, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('login failed');
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
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
