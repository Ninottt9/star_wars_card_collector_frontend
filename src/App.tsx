// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<PrivateRoute component={Home} />} />
        <Route path='/profile' element={<PrivateRoute component={Profile} />} />
        {/* <Route path='*' element={<h1>Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
