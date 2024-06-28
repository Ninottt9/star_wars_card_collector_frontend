// src/services/authService.js

import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'http://localhost:8081/api/auth/';

const login = async (nickname, password) => {
  const response = await axios.post(API_URL + 'login', { nickname, password });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (nickname, password) => {
  const response = await axios.post(API_URL + 'register', { nickname, password });
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
