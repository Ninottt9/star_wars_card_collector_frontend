// src/components/Profile.js (example component)
import React, { useEffect, useState } from 'react';
import authService from '../services/authService';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    description: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await authService.fetchUserData();
        setUserData(data);
        setFormData({
          email: data.email,
          nickname: data.nickname,
          description: data.description,
          // Populate other fields as needed
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await authService.updateUserData(formData);
      setUserData(updatedUser);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nickname: {formData.nickname}</label>
        </div>
        <div>
          <label>Email:</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name='description' value={formData.description} onChange={handleChange} />
        </div>
        <button type='submit'>Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
