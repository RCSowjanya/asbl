import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 bg-white text-black px-2 py-1 rounded"
          onClick={onClose}
        >
          <FaRegWindowClose />
        </button>
        <img src={imageSrc} alt="Zoomed" className="max-w-full max-h-screen" />
      </div>
    </div>
  );
};

export default ImageModal;
