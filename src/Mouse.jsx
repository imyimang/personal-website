import React, { useState, useEffect } from 'react';
import trailImage from '/beast.jpg'; // 導入您的圖片

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setTrails((prevTrails) => [...prevTrails, newTrail]);

      // 移除超過1秒的軌跡
      setTimeout(() => {
        setTrails((prevTrails) => prevTrails.filter((trail) => trail.id !== newTrail.id));
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <img
          key={trail.id}
          src={trailImage}
          alt="trail"
          className="absolute pointer-events-none"
          style={{
            left: `${trail.x - 10}px`, // 調整位置使圖片中心對準鼠標
            top: `${trail.y - 10}px`,
            width: '20px', // 設置圖片大小
            height: '20px',
            transition: 'opacity 1s',
            opacity: 0.7, // 設置透明度
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;