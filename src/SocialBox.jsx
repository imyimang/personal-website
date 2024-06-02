import React from 'react';
import facebookIcon from './icon/fb.svg';
import instagramIcon from './icon/ig.svg';
import githubIcon from './icon/github.svg';

const SocialBox = () => {
  return (
    
    <div className="bg-white rounded-lg shadow-2xl p-5 w-full max-w-5/6 h-40 mx-auto flex justify-around items-center px-10 experience-box">
      <a
        href="https://www.facebook.com/profile.php?id=100056011625720"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex justify-center items-center m-1.5 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <img src={facebookIcon} alt="Facebook Icon" className="w-full h-full rounded-full object-contain" />
      </a>
      <a
        href="https://www.instagram.com/yimang__/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex justify-center items-center m-1.5 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <img src={instagramIcon} alt="Instagram Icon" className="w-full h-full rounded-full object-contain" />
      </a>
      <a
        href="https://github.com/imyimang"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex justify-center items-center m-1.5 hover:scale-110 transition-transform duration-200 ease-in-out"
      >
        <img src={githubIcon} alt="Github Icon" className="w-full h-full rounded-full object-contain" />
      </a>
    </div>
  );
};

export default SocialBox;
