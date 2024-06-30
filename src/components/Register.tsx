// src/components/Register.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Form from './reusable/Form';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('register failed');
    }
  };

  return Form({
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit,
    buttonText: 'Sign up',
  });
};

export default Register;
