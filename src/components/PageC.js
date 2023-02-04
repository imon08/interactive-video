import React from "react";
import VideoASubtitle from "../captions/videoC.vtt";
import Video from "./Video";

const PageC = () => {
  return (
    <div className="flex justify-evenly h-screen">
      <div className="w-full lg:w-[50%] bg-black">
        <Video
          subtitleFile={VideoASubtitle}
          videoUrl="https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY3NTc4OTkwNH0.A71m_kEUuU_v7PeHJJCD4XIAQapWdXyWfz6N5A_RBDNXrRtrtTZO-x_wAPfrQYINSOCyR3iHVgYvNgk1hqRzVBc7o4bx7sO_Nb1qwtskCMrUlPZXOM_CtZTjn2UArnli6f3o7gO0CpJGlerPXT6WTHt9Bq0vs4vZbbHh0T-C-3z7sIGK5c-O1YYfEFNl0aDIaY46xYZ5EsJB2X3e3JnQeMLUztHtyf3Ddjoh2KxzQNBgcW2sufzgzJe_0FtLlWr1Y_zQCzZ8KdAcbgJIgsCYQFHhmt5mJKK-TveKqwke1nIvWfh32vNRckCo6kWyNxIpd3DpNCAbHrH8w7-N1V8rO2nrwjP0sKA4PUTV6hqeNANtmgTbuilBtm66yTLVYLNWLCt4qbc0HW9Q0RvH3acNWF77M1DY5_SpttM0a5qL5nKa_qoB4kre5SoYEEPMC68MgOeWbAtxyl9MvLQ6psxb3u73fQF7UYcXNkrsxE5DCkEDMHLaib3ijOzwbPD78dZnoMjjhRb-8MI4vNt6joU-uyoGyRrXTWMDyNO6oXsmBrBRcX72dIjLL6YmPX_Zfl7FhFSorhn_YHMmNBZVzLC3KLYd8UT9bzbc4GcO9h43YZ9oy9CXeh6X8PTsf4kfFcoIEe8S9OsNckijCxcP_KwtKLTbZdook4fs6PULigtH3wk"
        />
      </div>
      <div className="lg:w-[50%] lg:flex flex-col justify-center hidden">
        <div className="text-center">
          <button className="border-violet-700 border-2 bg-[#7d00FE] text-xl text-white font-semibold h-20 rounded-3xl px-6 hover:scale-105 ">
            Download "Campaign Structure Guide"
          </button>
        </div>
      </div>
      <div className="text-center flex flex-col items-center absolute bottom-16 text-white lg:hidden">
        <button className="border-violet-700 border-2 bg-[#7d00FE]  opacity-70 text-xl text-white font-semibold h-20 rounded-3xl px-6 hover:scale-105 lg:hidden">
          Download "Campaign Structure Guide"
        </button>
      </div>
    </div>
  );
};

export default PageC;
