import React, { useState } from "react";
import instagramIcon from "../icon/ig.svg";
import discordIcon from "../icon/dc.svg";


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
          onMouseEnter={() => handleMouseEnter("Instagram")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === "Instagram" && (
            <span className="mt-2 text-sm text-gray-800">Instagram</span>
          )}
        </a>
        <a
          href="https://discord.gg/2vA8ms9X7y "
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex flex-col justify-center items-center m-1.5 hover:scale-110 transition-transform duration-400 ease-in-out"
          onMouseEnter={() => handleMouseEnter("Discord")}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={discordIcon}
            alt="Discord Icon"
            className="w-full h-full rounded-full object-contain"
          />
          {hoveredIcon === "Discord" && (
            <span className="mt-2 text-sm text-gray-800">Discord</span>
          )}
        </a>
      </div>
    );
  };

export default SocialBox