import React, { useState } from "react";

const ExperienceBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleExpand = () => {
    if (isExpanded) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsTransitioning(false);
      }, 700); // This duration should match the CSS transition duration
    } else {
      setIsExpanded(true);
    }
  };

  const introduction = (
    <>
      一個喜歡寫程式和參與社群的高中生
    </>
  );

  const experiences = {
    活動經歷: [
      {
        title: "g0v Summit 2024",
        role: "會眾",
        link: "https://summit.g0v.tw/2024/",
      },
      {
        title: "CYBERSEC 2024 臺灣資安大會",
        role: "參與者",
        link: "https://cybersec.ithome.com.tw/",
      },
      {
        title: "SITCON Hackathon 2024",
        role: "參賽者",
        link: "https://hackathon.sitcon.org/2024/",
      },
    ],
    社群經歷: [
      { title: "CoffeeHost超大咖託管", role: "創辦人", link: "/coffeehost" },
    ],
    其他經歷: [
      {
        title: "大安高工第26屆電腦研究社",
        role: "副社/軟教",
        link: "https://www.instagram.com/dacsc26th/",
      },
      {
        title: "大安高工第1屆資訊安全研究社",
        role: "網管",
        link: "https://www.instagram.com/taivs.cssc/",
      },
    ],
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-2xl p-8 mx-auto transition-all ease-in-out cursor-pointer
      ${
        isExpanded || isTransitioning
          ? "fixed top-0 left-0 w-full h-full z-50 overflow-auto duration-700"
          : "w-full xl:max-w-5/6 h-40 hover:scale-110 duration-400"
      }
      ${isTransitioning ? "scale-90 opacity-0" : "scale-100 opacity-100"}
      `}
      onClick={toggleExpand}
    >
      <div
        className={`flex flex-col ${
          isExpanded ? "" : "justify-center items-center h-full"
        }`}
      >
        <h2 className="text-black text-2xl font-bold text-center font-sans mb-4">
          About me
        </h2>
        {isExpanded ? (
          <div className="space-y-8">
            <p className="text-gray-700 font-sans mb-6">{introduction}</p>
            {Object.entries(experiences).map(([category, items]) => (
              <div key={category} className="mb-6">
                <h3 className="text-black text-xl font-bold mb-3">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <p key={index} className="text-gray-700 font-sans">
                      <a
                        href={item.link}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>{" "}
                      <span className="font-bold">{item.role}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 text-center font-sans">
            點擊查看
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceBox;
