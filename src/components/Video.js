import React, { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
import useHover from "./hooks/useHover";

const Video = () => {
  const videoRef = useRef();
  const { ref: hoverRef, hovered } = useHover();
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      onClick={() => {
        if (triggered) return;
        setTriggered(true);
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0;
      }}
      className="w-full h-full relative cursor-pointer"
    >
      <video
        ref={videoRef}
        onClick={() => {
          setPlaying(!playing);
          playing ? videoRef.current.pause() : videoRef.current.play();
        }}
        onTimeUpdate={() => {
          setDuration(videoRef.current.duration);
          setPlayed(videoRef.current.currentTime / videoRef.current.duration);
        }}
        autoPlay
        muted
        controls={false}
        loop
        onEnded={() => {
          setPlaying(false);
        }}
        className="w-full h-full object-cover"
        src="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY3NTc4OTkwNH0.aOYpLnsEkGkbn7NmuCDTFNOBG34Fd-rfbX0f4gV6Y5mzOHU7nMMm11S9W1n1A3YiGD3_T_uqwnE1WNvt3XMliesPwh5RCVUnmJ8ZNlLszN0QXutxuv69ImpGq6Vbvn0mbuScHreHPbd0ob1QM6BDRcZ521Lqx1Lf1xByuIj32Dl_P4I0bekilKCnI9BsuJAtH9ntRzCdok3-5BUXnAQ4586cNvn_8b5f5b6QSzGm3M3GvHIjpJnvYZkx8BxRFdJKooGaY66AbzV8bKui3rnOhn9GKhHwCOqIqiMeHJo_-VCyX3X0WmvEiAskWaw-HMt0Nx8z1olQy1340BDB1zJ5iD3CDMepndI6DmGkV-E_79a9gaZAzau1x-2ZwAhM-OEP32eAAz2O5F_iksyNUM0ImNKqeZQwe03yTmrZfaaeBGSXEZ_cenGGi6TnKNnVkkKie-_-FjO4oa7nczW1DnSErlVZfAtkh6RNokpLy_rBBaKTMgS8gz9p7fUVgmj9f-jvDh8rahHc_Dhrbml5flXhZ6ucW5ZHVzQTzCb7ThPDspMouJjOkjY8SAi_-yHfT-d8R3F8bY68HqrKvL-RgddefqL_vmRp6588jMl_6C_doGT2v2zV5apOl0nUgCrxorZQlR9kiZaBMTjKcp_ClWTs6yTQ53H-8Nj1Xb1gqL41BOI"
      ></video>
      {!playing && (
        <div
          ref={hoverRef}
          onClick={() => {
            setPlaying(!playing);
            videoRef.current.play();
          }}
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div
            className={`${
              hovered && "scale-125 bg-opacity-80"
            } bg-gray-200 h-16 w-16 rounded-full flex justify-center items-center transition-all duration-200 delay-200 bg-opacity-70`}
          >
            <IoPlay className="text-3xl text-black" />
          </div>
        </div>
      )}

      <div className="absolute top-2 left-0 right-0">
        <div
          onClick={(e) => {
            const clickPosition = e.clientX;
            const progressBar = e.target.getBoundingClientRect();
            const newTime =
              (clickPosition - progressBar.left) / progressBar.width;
            videoRef.current.currentTime = newTime * videoRef.current.duration;
          }}
          className="bg-gray-200 bg-opacity-50 cursor-pointer h-2 hover:h-4 transition-all duration-200 "
        >
          <div
            style={{ width: `${played * 100}%` }}
            className="w-full h-full bg-purple-500 "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Video;
