// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Profile from '../components/Profile';
import Inventory from '../components/Inventory';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold mb-4'>Home</h1>
      <p className='text-lg mb-6'>Welcome to the Home page!</p>

      <Link to='/profile'>
        <button className='mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200'>
          Go to Profile
        </button>
      </Link>

      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4'>Inventory</h2>
        <Inventory />
      </div>
    </div>
  );
}
