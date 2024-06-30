// src/components/LoadingButton.js

import React, { useState } from 'react';

const LoadingButton = ({ onClick, children }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onClick();
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold transition duration-200 ${
        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
      }`}
      disabled={loading}
    >
      {loading ? (
        <div className='absolute inset-0 flex items-center justify-center'>
          <svg
            className='animate-spin h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z'
            ></path>
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
