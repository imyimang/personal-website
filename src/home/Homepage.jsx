import React, { useState, useEffect } from 'react';  // 添加 useEffect 導入
import ExperienceBox from "./ExperienceBox";
import SocialBox from "./SocialBox";
import Title from "../Title";
import HomeIcon from '../Homeicon';

const Homepage = () => {
  const [titleHeight, setTitleHeight] = useState(0);
  const handleTitleHeightChange = (height) => {
    setTitleHeight(height);
  };

  // 手機版首頁滾動控制
  useEffect(() => {
    const addHomepageClass = () => {
      if (window.innerWidth <= 768) {
        document.body.classList.add('homepage-mobile');
      }
    };

    const removeHomepageClass = () => {
      document.body.classList.remove('homepage-mobile');
    };

    // 初始檢查
    addHomepageClass();

    // 監聽視窗大小變化
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        document.body.classList.add('homepage-mobile');
      } else {
        document.body.classList.remove('homepage-mobile');
      }
    });

    // 清理函數
    return () => {
      removeHomepageClass();
      window.removeEventListener('resize', addHomepageClass);
    };
  }, []);

  return (
    <div className="overflow-hidden md:overflow-auto w-full">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <HomeIcon />
      <Title
        title="This is yimang's website"
        onHeightChange={handleTitleHeightChange}
      />
      <div
        className="container mx-auto"
        style={{ marginTop: `${titleHeight + 40}px` }}
      >
        <ExperienceBox />
      </div>
      <div className="mt-8">
        <SocialBox />
      </div>
      <footer className="text-white text-center mt-8 mb-4 flex justify-center items-center whitespace-nowrap">
        <span className="text-xs sm:text-sm md:text-base">
          Copyright © 2024-2025 yimang. All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default Homepage;