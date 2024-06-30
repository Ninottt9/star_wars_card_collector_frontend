// src/components/UpdateUserProfile.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import api from '../services/api';

const Profile = () => {
  const { user, updateUser } = useUser() as any;
  const [formData, setFormData] = useState({ email: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(
      user ? { email: user.email, description: user.description } : { email: '', description: '' }
    );
  }, [user]);

  if (!user) return <div>Loading...</div>;

  const handleUpdate = async () => {
    try {
      const response = await api.put('/user', formData);
      if (response.status === 200) {
        const updatedUser = response.data;
        updateUser(updatedUser);
        alert('User updated successfully');
      } else {
        console.error('Failed to update user');
        alert('Failed to update user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update user');
    }
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Update Profile</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Username:</label>
          <p className='bg-gray-200 p-2 rounded-lg'>{user.username}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 font-semibold mb-2'>Description:</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Description'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button
          onClick={handleUpdate}
          className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 mb-4'
        >
          Update
        </button>
        <button
          onClick={() => navigate('/')}
          className='w-full bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition duration-200'
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Profile;
