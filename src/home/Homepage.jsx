import React, { useState } from 'react';  // 添加 useState 導入
import ExperienceBox from "./ExperienceBox";
import SocialBox from "./SocialBox";
import Title from "../Title";
import HomeIcon from '../Homeicon';

const Homepage = () => {
  const [titleHeight, setTitleHeight] = useState(0);
  const handleTitleHeightChange = (height) => {
    setTitleHeight(height);
  };

  return (
    <div className="overflow-x-hidden w-full">
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