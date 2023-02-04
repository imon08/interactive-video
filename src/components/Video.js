import React, { useEffect, useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
import useHover from "./hooks/useHover";
import { BiFullscreen } from "react-icons/bi";
import useFullscreenStatus from "./hooks/useFullScreen";
import { parseVtt, convertTimeToSeconds } from "../utils/utils";

const Video = ({ subtitleFile, videoUrl }) => {
  const videoRef = useRef();
  const containerRef = useRef(null);
  const { ref: hoverRef, hovered } = useHover();
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useFullscreenStatus(containerRef);
  const [subtitles, setSubtitles] = useState([]);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const handleExitFullScreen = () => document.exitFullscreen();

  const increaseVideoRate = () => {
    if (videoRef.current.playbackRate == 2) {
      videoRef.current.playbackRate = 1;
    } else {
      videoRef.current.playbackRate = videoRef.current.playbackRate + 0.5;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.ontimeupdate = () => {
        const currentTime = videoRef.current.currentTime;

        const subtitle = subtitles.find(
          (cue) =>
            convertTimeToSeconds(cue.start) <= currentTime &&
            convertTimeToSeconds(cue.end) >= currentTime
        );

        if (subtitle) {
          setCurrentSubtitle(subtitle.text);
        } else {
          setCurrentSubtitle("");
        }
      };
    }
  }, [subtitles, videoRef]);

  useEffect(() => {
    fetch(subtitleFile)
      .then((res) => {
        return res.text();
      })
      .then((subtitleData) => {
        const parsedSubtitles = parseVtt(subtitleData);
        setSubtitles(parsedSubtitles);
      });
  }, []);

  return (
    <div
      ref={containerRef}
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
        loop={!triggered}
        onEnded={() => {
          setPlaying(false);
        }}
        className="w-full h-full object-cover"
        src={videoUrl}
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
      {triggered && (
        <>
          <div className="absolute top-0 left-0 right-0">
            <div
              onClick={(e) => {
                const clickPosition = e.clientX;
                const progressBar = e.target.getBoundingClientRect();
                const newTime =
                  (clickPosition - progressBar.left) / progressBar.width;
                videoRef.current.currentTime =
                  newTime * videoRef.current.duration;
              }}
              className="bg-gray-200 bg-opacity-50 cursor-pointer h-2 hover:h-4 transition-all duration-200 "
            >
              <div
                style={{ width: `${played * 100}%` }}
                className="w-full h-full bg-purple-500 "
              ></div>
            </div>
          </div>
          <div className="absolute top-4 left-0 right-0 ">
            <div className="text-right flex justify-end gap-2 px-5">
              <p
                onClick={() => {
                  setShowSubtitles(!showSubtitles);
                }}
                className={`text-white text-md border-white border-2 px-2 rounded-md font-semibold ${
                  showSubtitles && "bg-white text-black"
                } `}
              >
                CC
              </p>
              <p
                onClick={increaseVideoRate}
                className={`text-white text-md border-white border-2 px-2 rounded-md font-semibold ${
                  videoRef.current.playbackRate > 1 && "bg-white text-black"
                }`}
              >
                {videoRef.current?.playbackRate}x
              </p>
              <p
                onClick={isFullScreen ? handleExitFullScreen : setIsFullScreen}
                className="text-white text-md border-white border-2 px-2 rounded-md font-semibold active:bg-white active:text-black pt-1"
              >
                <BiFullscreen />
              </p>
            </div>
          </div>
        </>
      )}
      {showSubtitles && currentSubtitle && (
        <div className="absolute bottom-10 flex justify-center w-full">
          <p className="text-white w-fit text-center bg-black px-2 text-lg">
            {currentSubtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default Video;
