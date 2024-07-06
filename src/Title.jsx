import React, { useEffect, useState } from 'react';
import './Title.css';

const Title = (props) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = props.title;
  const topPosition = props.top || '20'; // 使用傳入的 top 值，如果沒有則默認為 '20'

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 text-3xl text-black md:text-5xl lg:text-6xl py-4 animate-fade-in top-${topPosition}`}
         style={{ fontFamily: 'CustomFont, sans-serif' }}>
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Title;