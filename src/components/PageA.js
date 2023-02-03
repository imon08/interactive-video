import React from "react";

const PageA = () => {
  return (
    <div className="flex justify-evenly h-screen">
      <div className="w-[50%]"></div>
      <div className="w-[50%] flex flex-col justify-center">
        <div className="text-center">
          <button className="border-violet-700 border-2 bg-[#7d00FE] text-xl text-white font-semibold h-20 rounded-3xl px-6 hover:scale-105">
            Download "Campaign Structure Guide"
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageA;
