import React, { useState } from 'react';
import instagramIcon from '/ig.svg';
import telegramIcon from '/tg.svg';
import XIcon from '/x.svg';
import githubIcon from '/github.svg';

const SocialBox = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-5 w-full max-w-[83.333%] h-40 mx-auto flex flex-col justify-between items-center transition-transform duration-400 hover:scale-110 border border-black">
      {/* 社交媒體圖標區域 */}
      <div className="flex justify-around items-center w-full px-10">
        <a
          href="https://www.instagram.com/yimang__/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter('Instagram')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === 'Instagram' && (
            <span className="mt-2 text-sm text-gray-800">Instagram</span>
          )}
        </a>

        <a
          href="https://t.me/imyimang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter('Telegram')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={telegramIcon}
            alt="Telegram Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === 'Telegram' && (
            <span className="mt-2 text-sm text-gray-800">Telegram</span>
          )}
        </a>

        <a
          href="https://x.com/imyimang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter('X')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={XIcon}
            alt="X Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === 'X' && (
            <span className="mt-2 text-sm text-gray-800">X</span>
          )}
        </a>

        <a
          href="https://github.com/imyimang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter('Github')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={githubIcon}
            alt="Github Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === 'Github' && (
            <span className="mt-2 text-sm text-gray-800">Github</span>
          )}
        </a>
      </div>

      {/* 電子郵件地址區域 */}
      <div className="text-center">
        <p className="text-sm text-gray-800 font-sans">
          Email: <a href="mailto:me@yimang.tw" className="text-[#A3BFFA] hover:underline">me@yimang.tw</a>
        </p>
      </div>
    </div>
  );
};

export default SocialBox;