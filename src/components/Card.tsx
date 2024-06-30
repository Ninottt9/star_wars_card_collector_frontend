// src/components/Card.js

import React from 'react';

const Card = ({ eye_color, gender, skin_color, mass, name, birth_year, hair_color, height }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-56">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">Eye Color: {eye_color}</p>
      <p className="text-gray-700 mb-2">Gender: {gender}</p>
      <p className="text-gray-700 mb-2">Skin Color: {skin_color}</p>
      <p className="text-gray-700 mb-2">Mass: {mass} kg</p>
      <p className="text-gray-700 mb-2">Birth Year: {birth_year}</p>
      <p className="text-gray-700 mb-2">Hair Color: {hair_color}</p>
      <p className="text-gray-700 mb-2">Height: {height} cm</p>
    </div>
  );
};

export default Card;
