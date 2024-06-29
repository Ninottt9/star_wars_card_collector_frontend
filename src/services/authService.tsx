// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth/';
const USER_URL = 'http://localhost:8081/api/users/';

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

const fetchUserData = async () => {
  const response = await axios.get(USER_URL + 'me', {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')),
    },
  });
  return response.data;
};

const updateUserData = async (userData) => {
  const response = await axios.put(USER_URL + 'me', userData, {
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')),
    },
  });
  return response.data;
};

const authService = {
  login,
  register,
  logout,
  getCurrentUser,
  fetchUserData,
  updateUserData,
};

export default authService;
