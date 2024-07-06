import React from "react";

const ExperienceBox = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 w-full xl:max-w-10xl h-40 mx-auto flex flex-col justify-center items-center experience-box transition-transform duration-300 hover:scale-110">
      <h2 className="text-black text-2xl font-bold text-center font-sans">
        經歷
      </h2>
      <p className="text-gray-700 text-center font-sans">
        <a href="/coffeehost" className="text-blue-500 hover:underline">
          CoffeeHost超大咖託管
        </a>{" "}
        創辦人
      </p>
      <p className="text-gray-700 text-center font-sans">
        <a href="https://www.instagram.com/dacsc26th/" target="_blank" className="text-blue-500 hover:underline">
          大安高工第26屆電腦研究社
        </a>{" "}
        副社/軟教
      </p>
    </div>
  );
};

export default ExperienceBox;
