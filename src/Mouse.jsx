import React, { useState, useEffect, useRef } from 'react';

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);
  // 用來產生唯一 id
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: idRef.current++,  // 使用 useRef 的值作為 id
        timestamp: Date.now(),
      };
      setTrails((prev) => [...prev, newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 每隔 30 毫秒檢查並移除超過 1000ms 的軌跡
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) =>
        prev.filter((trail) => Date.now() - trail.timestamp < 1000)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map((trail) => {
        const age = Date.now() - trail.timestamp; // 軌跡存在的時間（毫秒）
        const progress = age / 500; // 0 ~ 1 之間（在 1 秒內）
        // 頭大尾小效果：剛出現時 scale 1.5，逐漸縮小到 0.5
        const scale = 1.5 - progress;
        // 透明度從 1 漸漸降到 0
        const opacity = Math.max(1 - progress, 0);

        return (
          <div
            key={trail.id}
            className="absolute pointer-events-none"
            style={{
              left: `${trail.x - 10}px`,
              top: `${trail.y - 10}px`,
              width: '20px',
              height: '20px',
              backgroundColor: '#fff', // 這裡可調整顏色，預設為白色
              borderRadius: '50%',
              // 用淡藍色光暈模擬彗星效果（可根據需要調整 rgba 值）
              boxShadow: '0 0 15px rgba(173,216,230,0.8)',
              transform: `scale(${scale})`,
              opacity: opacity,
              transition: 'transform 30ms linear, opacity 30ms linear',
            }}
          />
        );
      })}
    </>
  );
};

export default MouseTrail;
