import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Inventory() {
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

  const pushToInventory = async () => {
    try {
      const response = await api.post('/pushToInventory/');
    } catch (error) {
      console.error('Error pushing to inventory:', error);
    }
    await fetchInventory();
  };

  return (
    <div>
      <h1>Inventory</h1>
      <p>Welcome to the Inventory page!</p>
      <button onClick={pushToInventory}>Push to Inventory</button>
      <ul>
        {inventory.map((name, id) => (
          <li key={`${id}${name}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
