import React from "react";

const Textbox = () => {
    return (
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full xl:max-w-10xl h-40 mx-auto flex flex-col justify-center items-center experience-box transition-transform duration-300 hover:scale-110">
        <h2 className="text-black text-2xl font-bold text-center font-sans">
          服務內容
        </h2>
        <p className="text-gray-700 text-center font-sans leading-relaxed text-container">
          CoffeeHost致力於向玩家提供低價的Minecraft主機和DirectAdmin網頁主機
          <br />
          使用Pterodactyl面板以降低玩家架設伺服器的難度
          <br />
          提供馬來西亞及台灣兩種主機節點供玩家選擇
          <br />
          並且搭配台灣速連抗攻擊服務以保障連線的穩定性
        </p>
      </div>
    );
  };

  export default Textbox