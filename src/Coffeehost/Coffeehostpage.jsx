import React, { useState } from "react";
import HomeIcon from "../Homeicon";
import Title from "../Title";
import Subtitle from "./ch_Subtitle";
import Textbox from "./ch_Textbox";
import SocialBox from "./ch_SocialBox";
//import Mouse from "../Mouse";

const Coffeehost = () => {
  return (
    <>
      <HomeIcon/>
      <Title title = "CoffeeHost 超大咖託管"/>
      <Subtitle/>
      <div className="mt-20">
        {/* 調整不重疊的間距 */}
        <Textbox/>
      </div>
      <div className="mt-8">
        {/* 調整不重疊的間距 */}
        <SocialBox/>
      </div>
    </>
  );
};

export default Coffeehost;
