import React, { useState, useEffect } from 'react';

const MouseTrail = () => {
  const [trails, setTrails] = useState([]);
  // 用來強制 re-render，讓軌跡的狀態隨時間更新
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(), // 作為唯一標識，同時也代表創建時間（毫秒）
        timestamp: Date.now(),
      };

      setTrails((prevTrails) => [...prevTrails, newTrail]);

      // 保留軌跡 1 秒後自動移除
      setTimeout(() => {
        setTrails((prevTrails) =>
          prevTrails.filter((trail) => trail.id !== newTrail.id)
        );
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 每隔 50ms 更新一次，讓軌跡根據年齡動態變化
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trails.map((trail) => {
        const age = Date.now() - trail.timestamp; // 軌跡存在的時間（毫秒）
        const progress = age / 1000; // 0 ~ 1 之間
        // 設定尺寸：剛出現時 scale 1.5，逐漸縮小到 0.5
        const scale = 1.5 - progress; 
        // 設定透明度：隨時間逐漸消失
        const opacity = Math.max(1 - progress, 0);

        return (
          <div
            key={trail.id}
            className="absolute pointer-events-none"
            style={{
              left: `${trail.x - 10}px`, // 調整位置使圓點中心對齊滑鼠
              top: `${trail.y - 10}px`,
              width: '20px',
              height: '20px',
              backgroundColor: '#fff', // 使用亮白色作為彗星頭的顏色
              borderRadius: '50%',
              // 用柔和的黃色光暈模擬彗星的光芒
              boxShadow: '0 0 15px rgba(173, 216, 230, 0.8)',
              transform: `scale(${scale})`,
              opacity: opacity,
              transition: 'transform 50ms linear, opacity 50ms linear',
            }}
          />
        );
      })}
    </>
  );
};

export default MouseTrail;
