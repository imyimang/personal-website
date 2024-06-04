import React, { useState } from "react";
import HomeIcon from "../Homeicon";
import Title from "./ch_Title";
import Subtitle from "./ch_Subtitle";
import Textbox from "./ch_Textbox";
import SocialBox from "./ch_SocialBox";

const Coffeehost = () => {
  return (
    <>
      <HomeIcon/>
      <Title/>
      <Subtitle/>
      <div className="mt-20">
        {/* 調整不重疊的間距 */}
        <Textbox/>
      </div>
      <div className="mt-16">
        {/* 調整不重疊的間距 */}
        <SocialBox/>
      </div>
    </>
  );
};

export default Coffeehost;
