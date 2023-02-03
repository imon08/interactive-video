import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Video from "./Video";

const Home = () => {
  return (
    <div className="flex justify-evenly h-screen">
      <div className="w-[50%] bg-black"><Video /></div>
      <div className="w-[50%] flex flex-col justify-center">
        <div className="text-center flex flex-col items-center gap-3">
          <Link to="/pageA">
            <Buttons alphabet="A" placeholder="Campaign Structure" />
          </Link>
          <Buttons alphabet="B" placeholder="Learn FaceBook Basics" />
          <Buttons alphabet="C" placeholder="3rd Choice" />
        </div>
      </div>
    </div>
  );
};

export default Home;
