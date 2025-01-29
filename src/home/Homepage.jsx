// Homepage.js
import React from 'react';
import ExperienceBox from "./ExperienceBox";
import SocialBox from "./SocialBox";
import Title from "../Title";
import HomeIcon from '../Homeicon';

const Homepage = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <HomeIcon/>
      <Title title = "This is yimang's website"/>
      <div className="mt-24">
        <ExperienceBox />
      </div>
      <div className="mt-8">
        <SocialBox />
      </div>
      <footer className="text-white text-center mt-8 mb-4">
        Copyright © 2025 yimang. All rights reserved.
      </footer>
    </>
  );
};

export default Homepage;