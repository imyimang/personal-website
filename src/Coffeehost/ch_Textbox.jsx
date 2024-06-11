import React from "react";
import "./Textbox.css";

const Textbox = () => {
    return (
      <div className="textbox">
        <h2 className="title2">服務內容</h2>
        <p className="content">
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

export default Textbox;
