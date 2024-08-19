import React from 'react';
import Icon from "/icon.png"

const HomeIcon = () => {
  const handleClick = () => {
    window.location.href = '/'; // 將用戶返回到首頁
  };

  return (
    <div style={{ position: 'fixed', top: '10px', left: '10px', cursor: 'pointer' }}>
      <img src={Icon} alt="Home Icon" style={{ width: '40px' }} onClick={handleClick} />
    </div>
  );
};

export default HomeIcon;