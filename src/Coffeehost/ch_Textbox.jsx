import React, { useState } from "react";

const Textbox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const introduction = (
    <>CoffeeHost 是一個專注於提供高品質 Minecraft 伺服器託管服務的平台。
    我們致力於為客戶提供穩定、安全、高效的 Minecraft 伺服器託管解決方案。
    我們的團隊由一群志同道合的學生組成，隨時準備為您解決各種技術問題。
    <br/><br/>
    從 2024年2月 起，我們分別在馬來西亞和台灣架設了三台伺服器主機，提供了超過 150 台的 Minecraft 伺服器託管，服務超過 200 位客戶，
    致力於用較低的價格提供高品質的服務。
    </>
  );

  const experiences = {
    主機配置: {
      "TW-S節點": [
        { title: "CPU", role: "AMD R9-7950X 5.7GHz" },
        { title: "記憶體", role: "Micron 192GB DDR5 5600MHz" },
        { title: "硬碟", role: "Micron 2TB NVMe" },
        { title: "抗攻擊", role: "台灣速連" },
      ],
      "TW-P節點": [
        { title: "CPU", role: "Intel® Core™ i9-13900 5.6GHz" },
        { title: "記憶體", role: "Micron 128GB DDR4 3200MHz" },
        { title: "硬碟", role: "Micron 2TB NVMe" },
        { title: "抗攻擊", role: "台灣速連" },
      ],
      "MY-1節點": [
        { title: "CPU", role: "Intel Xeon E5-2686 v4*2 2.30GHz" },
        { title: "記憶體", role: "128GB DDR3 2333MHz" },
        { title: "硬碟", role: "3TB HDD" },
        { title: "抗攻擊", role: "OVH" },
      ],
    },
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-2xl p-8 mx-auto transition-all ease-in-out cursor-pointer
      ${
        isExpanded
          ? "fixed top-0 left-0 w-full h-full z-50 overflow-auto duration-700"
          : "w-full xl:max-w-5/6 h-40 hover:scale-110 duration-400"
      }`}
      onClick={toggleExpand}
    >
      <div
        className={`flex flex-col ${
          isExpanded ? "" : "justify-center items-center h-full"
        }`}
      >
        <h2 className="text-black text-2xl font-bold text-center font-sans mb-4">
          About Coffee Host
        </h2>
        {isExpanded ? (
          <div className="space-y-8">
            <p className="text-gray-700 font-sans mb-6">{introduction}</p>
            {Object.entries(experiences).map(([category, subcategories]) => (
              <div key={category} className="mb-6">
                <h4 className="text-black text-2xl font-semibold mb-2">
                  {category}
                </h4>
                {Object.entries(subcategories).map(([subcategory, items]) => (
                  <div key={subcategory} className="mb-4">
                    <h5 className="text-black text-xl font-semibold mb-2">
                      {subcategory}
                    </h5>
                    <div className="space-y-2">
                      {items.map((item, index) => (
                        <p key={index} className="text-gray-700 font-sans">
                          <span className="font-bold">{item.title}</span> - {item.role}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
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

export default Textbox;
