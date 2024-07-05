import React, { useState, useEffect } from "react";
import img1 from "../Images/Tower-plan-thumb-v2.webp";
import img2 from "../Images/Tower-plan-thumb-v2-1.webp";
import ImageModal from "./ImageModal";
import { FiZoomIn } from "react-icons/fi";
const UrbanCorridor = () => {
  const [selectedImage, setSelectedImage] = useState(img1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeTower, setActiveTower] = useState("A"); // Tracks the active tower

  const handleTowerClick = (tower) => {
    setSelectedImage(tower === "A" ? img1 : img2);
    setActiveTower(tower); // Update the active tower
  };

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseClick = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100">
      <p className="text-web pt-4 mb-[4%] ml-[5%]">
        At Loft we have integrated convenience-based social pockets even under
        the towers, in the form of a bustling Urban Corridor. Tower A would have
        the business centre and supermarket, while Tower B would have the ATM
        locker facility, Creche, hobby centre, and tuition centres.
      </p>
      <div className="mb-4">
        <button
          className={`px-4 py-2 m-2 rounded hover:bg-[#9D5088] ${
            activeTower === "A"
              ? "bg-[#9D5088] text-white"
              : "border border-slate-600 text-black"
          }`}
          onClick={() => handleTowerClick("A")}
        >
          Tower A
        </button>
        <button
          className={`px-4 py-2 m-2  rounded hover:bg-[#9D5088] ${
            activeTower === "B"
              ? "bg-[#9D5088] text-white"
              : "border border-slate-600 text-black"
          }`}
          onClick={() => handleTowerClick("B")}
        >
          Tower B
        </button>
      </div>
      <div className="relative group">
        <img
          src={selectedImage}
          alt="Selected Tower"
          className="w-full h-full transition-transform duration-300 "
        />
        <button
          className="absolute bottom-4 right-4 px-4 py-2 text-white bg-black bg-opacity-50 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleImageClick}
        >
          Zoom to Click
        </button>
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full Screen Tower"
              className="w-full h-full"
            />
            <button
              className="absolute top-4 right-4 px-4 py-2 text-white bg-red-500 rounded"
              onClick={handleCloseClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrbanCorridor;
