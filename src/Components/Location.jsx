import React from "react";
import location from "../Images/Location-BG.webp";
import location1 from "../Images/Location-BG-mob.jpg";
const Location = () => {
  return (
    <div>
      <div className="relative flex flex-row max-[600px]:flex-col-reverse max-[600px]:static">
        <img
          src={location}
          className="w-full h-full max-[600px]:hidden"
          alt="location-bg"
        />
        <img
          src={location1}
          className="w-full h-full min-[601px]:hidden mt-[10%]"
          alt="location-bg"
        />
        {/*---desktop content---*/}
        <div className="max-[600px]:hidden absolute top-[30%] left-[6%]">
          <h1 className="un text-5xl font-[200] text-[#0F1520] text-left leading-[60px]">
            Get Used to the
          </h1>
          <h1 className="un text-5xl text-left font-[200] text-[#0F1520] leading-[60px]">
            downtown life
          </h1>
          <p className="tracking-[.3vw] max-[600px]:tracking-[0vw] text-left text-[#0F1520] text-[1.4vw] my-[3%] uppercase leading-[35px]">
            Unmatched Connectivity Of
          </p>
          <p className="tracking-[.3vw] max-[600px]:tracking-[0vw] text-left text-[#0F1520] text-[1.4vw] my-[3%] uppercase leading-[35px]">
            Financial District
          </p>
          <div className="text-left">
            <button className="px-6 py-2 bg-[#9D5088] text-white rounded-full mt-[6%]">
              Explore Location
            </button>
          </div>
        </div>
        {/*---desktop content close---*/}
        {/*--Mobile content---*/}
        <div className="min-[601px]:hidden order-1 mt-[14%]">
          <h1 className="un text-4xl  text-[#0F1520] text-center font-[200]">
            Get Used to the <br /> downtown life
          </h1>
          <p className="text-[#0F1520] text-xl my-[5%] uppercase text-center font-[300]">
            Unmatched Connectivity Of Financial District
          </p>
          <div className="text-center">
            <button className="px-6 py-2 bg-[#9D5088] text-white rounded-full mt-[6%]">
              Explore Location
            </button>
          </div>
        </div>
        {/*---mobile content close---*/}
      </div>
    </div>
  );
};

export default Location;
