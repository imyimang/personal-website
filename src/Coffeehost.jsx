import React, { useState } from 'react';
import instagramIcon from './icon/ig.svg';
import discordIcon from './icon/dc.svg';
import HomeIcon from './Homeicon';

const Title = () => {
  return (
    <div className="title absolute top-20 left-1/2 transform -translate-x-1/2 animate-fadeIn text-3xl text-black md:text-5xl lg:text-6xl py-4">
      CoffeeHost超大咖託管
    </div>
  );
};


const Subtitle = () => {
    return (
      <div className="title absolute top-20 left-1/2 transform -translate-x-1/2 animate-fadeIn text-0.8xl text-black md:text-1.5xl lg:text-2.5xl py-20">
        致力於提供低價的Minecraft主機和網頁主機
      </div>
    );
  };
  

const Textbox = () => {
    return (
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full xl:max-w-10xl h-40 mx-auto flex flex-col justify-center items-center experience-box transition-transform duration-300 hover:scale-110">
      <h2 className="text-black text-2xl font-bold text-center font-sans">
        服務內容
      </h2>
      <p className="text-gray-700 text-center font-sans leading-relaxed">
        CoffeeHost致力於向玩家提供低價的Minecraft主機和DirectAdmin網頁主機<br/>
        使用Pterodactyl面板以降低玩家架設伺服器的難度<br/>
        提供馬來西亞及台灣兩種主機節點供玩家選擇<br/>
        並且搭配台灣速連抗攻擊服務以保障連線的穩定性
      </p>
    </div>
    );
  };


  const SocialBox = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
  
    const handleMouseEnter = (icon) => {
      setHoveredIcon(icon);
    };
  
    const handleMouseLeave = () => {
      setHoveredIcon(null);
    };
  
    return (
      <div className="bg-white rounded-lg shadow-2xl p-5 w-full max-w-5/6 h-40 mx-auto flex justify-around items-center px-10 transition-transform duration-400 hover:scale-110">
        <a
          href="https://www.instagram.com/clubcoffeehub/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter('Instagram')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === 'Instagram' && (
            <span className="mt-2 text-sm text-gray-800">Instagram</span>
          )}
        </a>
        <a
          href="https://discord.gg/2vA8ms9X7y "
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter('Discord')}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={discordIcon}
            alt="Discord Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === 'Discord' && (
            <span className="mt-2 text-sm text-gray-800">Discord</span>
          )}
        </a>
      </div>
    );
  };
  


const Coffeehost = () =>{
    return(
        <>
        <HomeIcon/>
        <Title/>
        <Subtitle/>
        <div className="mt-20">
        {/* 調整不重疊的間距 */}
        <Textbox />
      </div>
      <div className="mt-16">
        {/* 調整不重疊的間距 */}
      <SocialBox/>
      </div>
        </>
    )
}

export default Coffeehost;