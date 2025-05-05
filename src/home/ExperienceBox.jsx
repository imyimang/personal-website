import React, { useState } from "react";

const profileImage = "/icon.png";

const ExperienceBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleExpand = () => {
    console.log("Toggle clicked, isExpanded:", isExpanded);
    if (isExpanded) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsTransitioning(false);
        document.body.classList.remove("restrict-scroll");
      }, 700);
    } else {
      setIsExpanded(true);
      document.body.classList.add("restrict-scroll");
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
      { title: "Blog", period: "", link: "https://blog.yimang.tw" },
    ],
    商業經歷: [
      {
        title: "CoffeeHost超大咖託管",
        role: "合夥創辦人",
        period: "(2024/2 – Present)",
        link: "https://coffeehost.net",
      },
    ],
    校園經歷: [
      {
        title: "大安高工第26屆電腦研究社",
        role: "副社/軟教",
        period: "",
        link: "https://www.instagram.com/dacsc26th/",
      },
      {
        title: "大安高工第1屆資訊安全研究社",
        role: "網管",
        period: "",
        link: "https://www.instagram.com/taivs.cssc/",
      },
    ],
    活動經歷: [
      { title: "g0v Summit", years: [{ year: "2024", link: "/g0v-2024" }], period: "" },
      {
        title: "CYBERSEC 臺灣資安大會",
        years: [
          { year: "2024", link: "/cybersec-2024" },
          { year: "2025", link: "/cybersec-2025" },
        ],
        period: "",
      },
      { title: "SITCON Hackathon", years: [{ year: "2024", link: "/sitcon-hackathon-2024" }], period: "" },
      { title: "SITCON", years: [{ year: "2025", link: "/sitcon-2025" }], period: "" },
    ],
  };

  const renderCommunityItem = (item) => {
    return (
      <>
        <span className="text-[#4A4A4A]">{item.title}</span>
        <span className="text-[#4A4A4A] mx-1">|</span>
        {item.years.map((entry, index) => (
          <React.Fragment key={entry.year}>
            <a
              href={entry.link}
              className="text-[#1E40AF] hover:text-[#3B82F6] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {entry.year}
            </a>
            {index < item.years.length - 1 && <span className="text-[#4A4A4A]">、</span>}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-2xl p-8 mx-auto transition-all ease-in-out cursor-pointer
        ${isExpanded || isTransitioning
          ? "fixed top-0 left-0 w-full h-full z-[60] overflow-auto duration-700 gradient-bound"
          : "w-full max-w-[83.333%] h-40 hover:scale-105 duration-400 relative border border-black"
        }
        ${isTransitioning ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
      onClick={toggleExpand}
    >
      <div className={`flex flex-col ${isExpanded ? "content-container" : "justify-center items-center h-full"}`}>
        <h2 className="text-[#4A4A4A] text-2xl font-bold text-center font-sans mb-4">
          About me
        </h2>
        {isExpanded ? (
          <div className="space-y-8">
            <div className="mb-6">{introduction}</div>
            {Object.entries(experiences).map(([category, items]) => (
              <div key={category} className="mb-6 flex flex-col">
                <h3 className="text-[#4A4A4A] text-xl font-bold mb-3">
                  {category}
                </h3>
                <div className="w-full max-w-md pl-8">
                  <ul className="list-disc">
                    {items.map((item, index) => (
                      <li key={index} className="text-[#4A4A4A] font-sans mb-2">
                        {category === "活動經歷" ? (
                          renderCommunityItem(item)
                        ) : (
                          <>
                            <a
                              href={item.link}
                              className="text-[#1E40AF] hover:text-[#3B82F6] hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.title}
                            </a>
                            {item.role && ` | ${item.role}`}
                            {item.period && ` ${item.period}`}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#4A4A4A] text-center font-sans">點擊查看</p>
        )}
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .restrict-scroll {
            overflow-x: hidden;
            touch-action: pan-y;
            width: 100vw;
            height: 100vh;
            position: fixed; /* 防止 body 滾動 */
          }
          .gradient-bound {
            max-width: 100vw;
            max-height: 100vh;
            overflow-y: auto; /* 允許垂直滾動 */
            overflow-x: hidden; /* 禁止水平滾動 */
            box-sizing: border-box;
          }
          .content-container {
            padding: 16px; /* 內邊距，確保內容不貼邊 */
            max-width: 100%;
            max-height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceBox;