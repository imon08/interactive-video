import React from "react";

const Buttons = ({ alphabet, placeholder }) => {
  return (
    <div className="h-18">
      <div className="flex justify- gap-3 bg-[#1111111A] hover:border-violet-700 border-2 rounded-3xl px-5 py-3 h-14 w-80 text-lg font-semibold ">
        <p className="bg-[#7d00FE] text-white rounded-3xl h-7 w-7">{alphabet}</p>
        <p>{placeholder}</p>
      </div>
    </div>
  );
};

export default Buttons;
