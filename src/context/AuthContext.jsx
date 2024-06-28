// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());

  useEffect(() => {
    setCurrentUser(authService.getCurrentUser());
  }, []);

  const login = async (nickname, password) => {
    const user = await authService.login(nickname, password);
    setCurrentUser(user);
  };

  const register = async (nickname, password) => {
    await authService.register(nickname, password);
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
