import React, { useEffect, useState } from 'react';
import './Title.css';

const Title = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "This is yimang's website";

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
  }, []);

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-3xl text-black md:text-5xl lg:text-6xl py-4 animate-fade-in"
         style={{ fontFamily: 'CustomFont, sans-serif' }}>
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Title;