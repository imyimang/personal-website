import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Mouse from './Mouse'

const NotFound = () => {
  return (

      <div className="text-center">
        <Title title = "404"/>
        <Mouse/>
        <p className="text-2xl text-gray-600 mb-8">頁面未找到</p>
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          返回首頁
        </Link>
      </div>
  );
};

export default NotFound;