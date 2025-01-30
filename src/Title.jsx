//Title.jsx
import React, { useEffect, useState, useRef } from 'react';
import './Title.css';

const Title = ({ title, onHeightChange }) => {
  const [displayText, setDisplayText] = useState('');
  const titleRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < title.length) {
        setDisplayText(title.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    // 監聽高度變化
    const updateHeight = () => {
      if (titleRef.current) {
        const height = titleRef.current.offsetHeight;
        onHeightChange(height);
      }
    };

    // 初始更新和窗口調整時更新
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateHeight);
    };
  }, [title, onHeightChange]);

  return (
    <div 
      ref={titleRef}
      className="fixed left-1/2 transform -translate-x-1/2 text-3xl text-black md:text-5xl lg:text-6xl py-4 animate-fade-in top-20 z-50"
      style={{ fontFamily: 'CustomFont, sans-serif' }}
    >
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Title;