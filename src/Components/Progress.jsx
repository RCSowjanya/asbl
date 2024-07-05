import React, { useState } from "react";
import video from "../Videos/Loft-Landing-Progress.mp4";
import { PiPlayThin } from "react-icons/pi";
import video1 from "../Videos/Loft-Landing-Progress.mp4";
import Threelines from "./Threelines";

const Progress = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const stopVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div>
      <div className="mt-[8%] mb-[8%] flex flex-row items-center justify-center max-[600px]:flex-col gap-5 mx-[4%] h-full">
        {/* Text Wrapper */}
        <div className="w-1/2 flex flex-col items-center justify-center  max-[600px]:w-full ">
          <h2 className="text-2xl font-[300] tracking-[.5cqw]">
            POSSESSION DATE
          </h2>
          <h1 className="text-[3vw] font-[500] mt-[3%] my-[6%]">
            December 2026
          </h1>
          <div className="h-1 bg-[#9D5088] w-20 mx-auto"></div>
        </div>

        {/* Video Wrapper */}
        <div className="relative w-2/3 mt-[10%] max-[600px]:w-full">
          <div className="">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={video}
              className="w-full h-full object-cover"
            />
          </div>
          {!isVideoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center custom-gradient bg-opacity-80">
              <div className="flex flex-col items-center">
                <button
                  onClick={playVideo}
                  className="p-6 text-white border-2  border-white rounded-full cursor-pointer"
                >
                  <PiPlayThin size={64} className="font-[200]" />
                </button>
                <div className="desc text-white mt-2">
                  watch the live progress video
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Video */}
      {isVideoPlaying && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-full max-w-3xl mx-auto">
            <button
              onClick={stopVideo}
              className="absolute top-[20%] right-5 text-white text-2xl z-50"
            >
              &times;
            </button>
            <video controls autoPlay className="w-full h-full ">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <Threelines />
    </div>
  );
};

export default Progress;
