import React, { useState } from "react";
import img1 from "../Images/Tower-plan-thumb-v2.webp";
import img2 from "../Images/Tower-plan-thumb-v2-1.webp";
import { FiZoomIn } from "react-icons/fi";

const TowerPlan = () => {
  const [selectedImage, setSelectedImage] = useState(img1);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = {
    towerA: img1,
    towerB: img2,
  };

  const handleClick = (tower) => {
    setSelectedImage(images[tower]);
    setIsZoomed(false);
  };

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="flex mx-[5%] max-[600px]:flex-col">
      <div className="w-1/3 p-4 max-[600px]:w-full">
        <p className="mb-4">
          Click on the button below to view the tower plan in detail!
        </p>
        <button
          className={`px-4 py-2 m-2 rounded ${
            selectedImage === images.towerA
              ? "bg-[#9D5088] text-white"
              : "border text-black"
          }`}
          onClick={() => handleClick("towerA")}
        >
          Tower A
        </button>
        <button
          className={`px-4 py-2 m-2 rounded ${
            selectedImage === images.towerB
              ? "bg-[#9D5088] text-white "
              : "border text-black"
          }`}
          onClick={() => handleClick("towerB")}
        >
          Tower B
        </button>
      </div>
      <div className="w-2/3 relative border-2 border-[#d1c1a3]  max-h-[50vh] max-[600px]:w-full">
        {selectedImage && (
          <div
            className={`h-auto w-full transition-transform duration-500 transform translate-x-0`}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="h-auto w-full object-cover"
            />
            <div className="absolute bottom-0 inset-0 flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button
                className="text-black p-2 rounded flex gap-2"
                onClick={handleZoom}
              >
                <FiZoomIn className="mt-1" />
                Click to Zoom
              </button>
            </div>
          </div>
        )}
      </div>
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="h-auto w-full object-cover"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded"
              onClick={handleCloseZoom}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TowerPlan;
