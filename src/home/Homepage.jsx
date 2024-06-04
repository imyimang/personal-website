// Homepage.js
import React from 'react';
import ExperienceBox from "./ExperienceBox";
import SocialBox from "./SocialBox";
import Title from "./Title";
import HomeIcon from './Homeicon';

const Homepage = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <HomeIcon/>
      <Title />
      <div className="mt-24">
        {/* 調整不重疊的間距 */}
        <ExperienceBox />
      </div>
      <div className="mt-8">
        {/* 調整不重疊的間距 */}
        <SocialBox />
      </div>
    </>
  );
};

export default Homepage;
