import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { PiPlayThin } from "react-icons/pi";
import videoframe from "../Images/Loft-location-thumbnail-New-2.webp";
import video1 from "../Videos/Loft-Landing-Progress.mp4";
import img1 from "../Images/Location-element-lines-new.webp";
import CircleTo from "./CircleTo";
const RoadTo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center h-full">
        <img
          src={videoframe}
          className="w-[75%] h-full mt-[5%]"
          alt="video-frame"
        />
        {!isPlaying && (
          <div className="absolute left-[50%] top-[55%] border border-white p-6 rounded-full transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={playVideo} className="text-white">
              <PiPlayThin size={44} />
            </button>
          </div>
        )}
      </div>
      {isPlaying && (
        <div className="fixed inset-0 flex items-center w-full h-full justify-center bg-black bg-opacity-75 z-50">
          <div className="relative flex items-center justify-center h-auto">
            <video src={video1} controls autoPlay className="w-[75%] h-auto" />
            <div className="">
              <button
                onClick={closeVideo}
                className="absolute top-[5%] right-[16%] text-white text-4xl bg-black p-1"
              >
                <IoCloseSharp size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="flex justify-center gap-2">
          <div className="h-16 w-2 bg-[#AE8F56]"></div>
          <div className="h-16 w-2 bg-[#AE8F56]"></div>
          <div className="h-16 w-2 bg-[#AE8F56]"></div>
        </div>
      </div>
      <div className="mt-[-5%]">
        <CircleTo />
      </div>
      <div className="flex justify-center gap-2">
        <div className="h-24 w-2 bg-[#AE8F56]"></div>
        <div className="h-24 w-2 bg-[#AE8F56]"></div>
        <div className="h-24 w-2 bg-[#AE8F56]"></div>
      </div>
    </div>
  );
};

export default RoadTo;
