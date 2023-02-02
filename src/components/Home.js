import React from "react";
import Buttons from "./Buttons";

const Home = () => {
  return (
    <div className="flex justify-evenly h-screen">
      <div className="w-[50%] border-black border-2"></div>
      <div className="w-[50%] flex flex-col justify-center">
        <div className="text-center flex flex-col items-center gap-3">
            <Buttons alphabet="A" placeholder="Campaign Structure" />
            <Buttons alphabet="B" placeholder="Learn FaceBook Basics" />
            <Buttons alphabet="C" placeholder="3rd Choice" />
        </div>
      </div>
    </div>
  );
};

export default Home;
