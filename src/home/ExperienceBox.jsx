import React, { useState } from "react";

const itemIcons = {
  "Blog": "/experience/hexo.png",
  "g0v Summit 2024": "/experience/g0v.png",
  "CYBERSEC 2024 臺灣資安大會": "/experience/cybersec.jpg",
  "SITCON Hackathon 2024": "/experience/hackathon.ico",
  "SITCON 2025": "/experience/sitcon.jpg",
  "CoffeeHost超大咖託管": "/experience/coffeehost.png",
  "大安高工第26屆電腦研究社": "/experience/dacsc.jpg",
  "大安高工第1屆資訊安全研究社": "/experience/cssc.png",
};

const profileImage = "/icon.png";

const ExperienceBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState({});

  const toggleExpand = () => {
    if (isExpanded) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsTransitioning(false);
      }, 700);
    } else {
      setIsExpanded(true);
    }
  };

  const introduction = (
    <div className="flex items-center justify-center space-x-4">
      <img
        src={profileImage}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover border-2 border-[#A3BFFA] shadow-sm"
      />
      <span className="text-[#4A4A4A] font-sans text-center">
        一個喜歡寫程式和參與社群的高中生
      </span>
    </div>
  );

  const experiences = {
    其他網站: [
      { title: "Blog", role: "", period: "", link: "https://blog.yimang.tw" },
    ],
    商業經歷: [
      { title: "CoffeeHost超大咖託管", role: "合夥創辦人", period: "(2024 – Present)", link: "https://coffeehost.net" },
    ],
    校園經歷: [
      { title: "大安高工第26屆電腦研究社", role: "副社/軟教", period: "(2024 – Present)", link: "https://www.instagram.com/dacsc26th/" },
      { title: "大安高工第1屆資訊安全研究社", role: "網管", period: "(2024 – Present)", link: "https://www.instagram.com/taivs.cssc/" },
    ],
    社群經歷: [
      { title: "g0v Summit 2024", role: "會眾", period: "", link: "/g0v-2024" },
      { title: "CYBERSEC 2024 臺灣資安大會", role: "參與者", period: "", link: "/cybersec-2024" },
      { title: "SITCON Hackathon 2024", role: "參賽者", period: "", link: "/sitcon-hackathon-2024" },
      { title: "SITCON 2025", role: "會眾", period: "", link: "/sitcon-2025" },
    ],
  };

  const handlePrev = (category, itemCount) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [category]: prev[category] === 0 ? itemCount - 1 : (prev[category] || 0) - 1,
    }));
  };

  const handleNext = (category, itemCount) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [category]: prev[category] === itemCount - 1 ? 0 : (prev[category] || 0) + 1,
    }));
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-8 mx-auto transition-all ease-in-out cursor-pointer
    ${isExpanded || isTransitioning
          ? "fixed top-0 left-0 w-full h-full z-[60] overflow-auto duration-700"
          : "w-full max-w-[83.333%] h-40 hover:scale-105 duration-400 relative border border-gray-200"
        }
    ${isTransitioning ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
      onClick={toggleExpand}
    >
      <div className={`flex flex-col ${isExpanded ? "" : "justify-center items-center h-full"}`}>
        <h2 className="text-[#4A4A4A] text-2xl font-bold text-center font-sans mb-4">
          About me
        </h2>
        {isExpanded ? (
          <div className="space-y-8">
            <div className="mb-6">{introduction}</div>
            {Object.entries(experiences).map(([category, items]) => (
              <div key={category} className="mb-6 flex flex-col items-center">
                <h3 className="text-[#4A4A4A] text-xl font-bold mb-3 text-center border-b-2 border-[#A3BFFA] inline-block pb-1">
                  {category}
                </h3>
                <div className="relative w-64 mx-auto">
                  <div className="relative h-auto min-h-[200px]">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className={`absolute top-0 left-0 w-full transition-opacity duration-300 flex justify-center
                          ${index === (carouselIndices[category] || 0) ? "opacity-100 visible" : "opacity-0 invisible"}`}
                      >
                        <div className="flex flex-col items-center w-64 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                          {/* 將圖片包在 <a> 標籤中，並設置與下方文字相同的連結 */}
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <img
                              src={itemIcons[item.title] || "https://example.com/default-icon.png"}
                              alt={item.title}
                              className="w-16 h-16 mb-4 object-contain rounded-full border border-[#A3BFFA] p-1 
                                transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(163,191,250,0.5)]"
                            />
                          </a>
                          <p className="text-[#4A4A4A] font-sans text-center">
                            <a href={item.link} className="text-[#A3BFFA] hover:underline" target="_blank" rel="noopener noreferrer">
                              {item.title}
                            </a>
                          </p>
                          <p className="text-[#4A4A4A] font-sans text-center">
                            <span className="font-bold">{item.role}</span>{" "}
                            <span>{item.period}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {items.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrev(category, items.length);
                        }}
                        className="absolute top-1/2 left-[-2.5rem] transform -translate-y-1/2 bg-[#A3BFFA] bg-opacity-50 text-white p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-300"
                      >
                        {"<"}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext(category, items.length);
                        }}
                        className="absolute top-1/2 right-[-2.5rem] transform -translate-y-1/2 bg-[#A3BFFA] bg-opacity-50 text-white p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-300"
                      >
                        {">"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#4A4A4A] text-center font-sans">點擊查看</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceBox;