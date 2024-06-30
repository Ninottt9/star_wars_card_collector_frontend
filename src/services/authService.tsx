// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8081/';
const USER_URL = 'http://localhost:8081/api/';

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'authenticate', { username, password });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (username, password) => {
  const response = await axios.post(API_URL + 'register', { username, password });
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  login,
  register,
  logout,
  getCurrentUser,
};

export default authService;
