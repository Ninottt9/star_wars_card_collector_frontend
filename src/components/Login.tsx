// src/components/Login.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Form from './reusable/Form';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('login failed');
    }
  };

  return Form({ username, password, setUsername, setPassword, handleSubmit, buttonText: 'Login' });
};

export default Login;
