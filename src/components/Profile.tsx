// src/components/UpdateUserProfile.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import api from '../services/api';

const Profile = () => {
  const { user, updateUser } = useUser() as any;
  const [formData, setFormData] = useState(user ? user : { email: '', description: '' });
  if (!user) return <div>Loading...</div>;

  const handleUpdate = async () => {
    try {
      const response = (await api.put('/user', formData)) as any;
      if (response.ok) {
        const updatedUser = await response.json();
        updateUser(updatedUser);
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <label>username: {user.username}</label>
      <input type='email' value={formData.email} onChange={handleChange} placeholder='Email' />
      <textarea value={formData.description} onChange={handleChange} placeholder='Description' />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Profile;
