import React from "react";
import plansbg from "../Images/Plans-BG.webp";
import bglines from "../Images/Plans-lines-element.webp";
const UnitPlans = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={plansbg}
          className="w-full h-full max-[600px]:aspect-square"
          alt="plans-bg"
        />
        <img
          src={bglines}
          className="absolute top-[14%]"
          alt="location-elet-lines"
        />
        <div className="absolute top-[13%]  h-full w-full flex flex-col items-center  gap-6 text-white">
          <h1 className="un text-4xl font-[200] max-[600px]:text-2xl max-[600px]:font-[400]">
            More Life
          </h1>
          <h1 className="un text-4xl font-[200] max-[600px]:text-2xl max-[600px]:font-[400]">
            Per Sq. ft.
          </h1>
          <p className="tracking-[.5vw]">THOUGHTFULLY DESIGNED APARTMENTS</p>
          <button className="px-6 py-2 bg-[#9D5088] text-white rounded-full">
            Explore Unit plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitPlans;
