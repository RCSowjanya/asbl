import React from "react";
import aminities from "../Images/Amenities-bg.webp";
const Lifecycle = () => {
  return (
    <div>
      <div className="flex max-[600px]:flex-col bg-[#F9EDE2] w-full h-full max-[600px]:gap-11">
        <div className="w-1/2 flex flex-col gap-5 items-center justify-center max-[600px]:w-full">
          <h1 className="un text-6xl text-[#AE8F56] leading-[90px] max-[600px]:text-xl max-[600px]:mt-[8%]">
            Carefully Curated <span className="text-left">Lifecycle</span>
          </h1>
          <button className="px-6 py-2 bg-[#9D5088] text-white rounded-full">
            Explore Aminities
          </button>
        </div>
        <div className="w-1/2  max-[600px]:w-full">
          <img src={aminities} className="w-full h-full" alt="aminities-bg" />
        </div>
      </div>
    </div>
  );
};

export default Lifecycle;
