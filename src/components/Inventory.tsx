// src/components/Inventory.js

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Card from './Card';
import LoadingButton from './LoadingButton';

const Inventory = ({ onOpenCreateBtnClick }) => {
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
      const response = await api.post('/pushToInventory/');
      if (response.status !== 200) {
        console.error('Failed to push to inventory:', response);
        alert('Failed to push to inventory');
        return;
      }
      onOpenCreateBtnClick(response.data.remainingCurrency);
    } catch (error) {
      console.error('Error pushing to inventory:', error);
      alert('Failed to push to inventory: you dont have enough gold');
    }
    await fetchInventory();
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-4'>Inventory</h1>
      <LoadingButton onClick={openCreate}>Open Create</LoadingButton>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {inventory.map((item, index) => (
          <Card key={index} {...JSON.parse(item)} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
