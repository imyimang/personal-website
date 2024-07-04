import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (

      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">頁面未找到</p>
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          返回首頁
        </Link>
      </div>
  );
};

export default NotFound;