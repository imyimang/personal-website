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

    const updateHeight = () => {
      if (titleRef.current) {
        const height = titleRef.current.offsetHeight;
        onHeightChange(height);
      }
    };

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
      className="fixed left-1/2 top-20 transform -translate-x-1/2 z-50 flex justify-center items-center text-black
                 text-[max(4vw,24px)] max-w-[90vw] whitespace-nowrap overflow-hidden"
      style={{ fontFamily: 'CustomFont, sans-serif' }}
    >
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Title;
