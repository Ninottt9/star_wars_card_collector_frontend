// src/components/InventoryList.js

import React, { useState, useEffect } from 'react';
import api from '../services/api';

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = async () => {
    try {
      const response = await api.get('/inventory/names');
      setInventories(response.data);
    } catch (error) {
      console.error('Error fetching inventories:', error);
    }
  };

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventories.map((inventory) => (
          <li key={inventory.id}>{inventory.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
