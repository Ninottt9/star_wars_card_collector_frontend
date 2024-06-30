// src/pages/Home.js

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserProvider, useUser } from '../context/UserContext';
import Profile from '../components/Profile';
import Inventory from '../components/Inventory';

const Home = () => {
  const { user } = useUser() as any;
  const [currency, setCurrency] = useState(user?.currency || 0);

  useEffect(() => {
    setCurrency(user?.currency || 0);
  }, [user]);

  const handleCurrencyChange = (newCurrency: number) => {
    console.log('Currency changed:', newCurrency);
    setCurrency(newCurrency);
  };

  return (
    <UserProvider>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        <h1 className='text-4xl font-bold mb-4'>Home</h1>
        <p className='text-lg mb-2'>
          Welcome, <span className='font-semibold'>{user?.username}</span>!
        </p>
        <p className='text-lg mb-6'>
          Money: <span className='font-semibold text-yellow-500'>{currency} Gold</span>
        </p>

        <Link to='/profile'>
          <button className='mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200'>
            Go to Profile
          </button>
        </Link>

        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-xxl'>
          <Inventory onOpenCreateBtnClick={handleCurrencyChange} />
        </div>
      </div>
    </UserProvider>
  );
};

export default Home;
