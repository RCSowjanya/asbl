import React, { useState } from "react";
import videobg from "../Images/Video-Thumbnail.webp";
import videothumbnail from "../Videos/Web-Teaser-Nov.mp4";
import { PiPlayThin } from "react-icons/pi";
import lines from "../Images/video-side-lines.webp";
import { IoIosPhoneLandscape } from "react-icons/io";
const VideoThumbnail = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/*----video thumbnail bg----*/}
      <div className="">
        <img src={videobg} className="w-full h-full" alt="video-thumbnail" />
        {/*----lines right---*/}
        <div className="absolute top-0 left-[48.5%] w-[80vw]">
          <img src={lines} className="w-full object-contain" alt="lines" />
        </div>
        {/*----lines right close---*/}
        {/*----video thumbnail bg----*/}
        {!isVideoOpen && (
          <div className="absolute top-[30%] left-[10cqw] max-[600px]:top-[10%]">
            <button
              onClick={openVideo}
              className="p-6 max-[1000px]:p-2 text-white left-[10cqw]  border-2 border-white rounded-full  z-[999]"
            >
              <PiPlayThin
                size={window.innerWidth <= 640 ? 30 : 64}
                className="font-[200]"
              />
            </button>
          </div>
        )}

        {isVideoOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full h-full max-w-3xl max-h-[500px] mx-auto z-[999]">
              <button
                onClick={closeVideo}
                className="absolute top-2 right-5 text-white text-2xl"
              >
                &times;
              </button>
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={videothumbnail}
                  title="video thumbnail"
                  frameBorder="0"
                  allow="accelerometer; autoplay;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <div className="absolute  left-[10cqw] top-[50%] text-white text-left max-[600px]:top-[37%]">
          <h2 className="uppercase text-5xl font-[100]  max-[600px]:text-xl">
            The key
          </h2>
          <h2 className="uppercase text-5xl font-[100] max-[600px]:text-xl">
            To
            <span className="italic font-[200] un text-4xl max-[600px]:text-xl">
              ENVY
            </span>
          </h2>
          <h4 className="text-[2vw] font-[100]">UNLOCKING THE</h4>
          <h4 className="text-[2vw] italic font-[100]">UNPARALLELED</h4>
        </div>
        {/*---full screen video----*/}
        {!isVideoOpen && (
          <div className="absolute bottom-[3%]  left-[10cqw]">
            <div className="flex flex-row text-left gap-4">
              <IoIosPhoneLandscape
                size={window.innerWidth <= 640 ? 30 : 44}
                className="font-[200] text-white"
              />
              <p
                onClick={openVideo}
                className="text-white font-[400] text-sm mt-[3%] cursor-pointer max-[600px]:mt-[2%]"
              >
                GO FULL SCREEN FOR ENVIABLE EXPERIENCE
              </p>
            </div>
          </div>
        )}
        {isVideoOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-[999] w-full h-full">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full h-full max-w-3xl mx-auto z-[999]">
              <button
                onClick={closeVideo}
                className="absolute top-[20%] right-5 text-white text-2xl"
              >
                &times;
              </button>
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src={videothumbnail}
                  title="video thumbnail"
                  frameBorder="0"
                  allow="accelerometer; autoplay;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*---full screen video closed----*/}
    </div>
  );
};

export default VideoThumbnail;
