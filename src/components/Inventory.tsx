// src/components/Inventory.js

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Card from './Card';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const response = await api.get(`/inventory/`);
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const openCreate = async () => {
    try {
      await api.post('/pushToInventory/');
    } catch (error) {
      console.error('Error pushing to inventory:', error);
    }
    await fetchInventory();
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-4'>Inventory</h1>
      <p className='text-lg mb-6'>Welcome to the Inventory page!</p>
      <button
        onClick={openCreate}
        className='mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200'
      >
        Open Create
      </button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {inventory.map((item, index) => (
          <Card key={index} {...JSON.parse(item)} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
