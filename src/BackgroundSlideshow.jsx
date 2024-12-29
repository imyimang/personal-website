import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = () => {
  const images = [
    '/backgrounds/1.jpg',
    '/backgrounds/2.jpg',
    '/backgrounds/3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 每5秒切換一次

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;