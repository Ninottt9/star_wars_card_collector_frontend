// src/pages/Home.js

import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import Inventory from '../components/Inventory';

const Home = () => {
  const { user } = useUser() as any;
  const [currency, setCurrency] = useState(user?.currency || 0);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrency(user?.currency || 0);
  }, [user]);

  useEffect(() => {
    if (user) {
      window.location.reload(); // Force reload if user just logged in
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from useAuth
      navigate('/login'); // Redirect to login page after successful logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleCurrencyChange = (newCurrency: number) => {
    console.log('Currency changed:', newCurrency);
    setCurrency(newCurrency);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-4xl font-bold mb-4'>Home</h1>
      <p className='text-lg mb-2'>
        Welcome, <span className='font-semibold'>{user?.username}</span>!
      </p>
      <p className='text-lg mb-6'>
        Money: <span className='font-semibold text-yellow-500'>{currency} Gold</span>
      </p>

      <button
        onClick={handleLogout}
        className='mb-4 bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition duration-200'
      >
        Logout
      </button>

      <Link to='/profile'>
        <button className='mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200'>
          Go to Profile
        </button>
      </Link>

      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-xxl'>
        <Inventory onOpenCreateBtnClick={handleCurrencyChange} />
      </div>
    </div>
  );
};

export default Home;
