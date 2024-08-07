// Homepage.js
import React from 'react';
import ExperienceBox from "./ExperienceBox";
import SocialBox from "./SocialBox";
import Title from "../Title";
import HomeIcon from '../Homeicon';
//import Mouse from '../Mouse';

const Homepage = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <HomeIcon/>
      <Title title = "This is yimang's website"/>
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
