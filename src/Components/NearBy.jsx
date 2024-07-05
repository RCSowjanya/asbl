import React from "react";
import { GrLocation } from "react-icons/gr";

const NearBy = () => {
  return (
    <div id="nearby">
      <h2 className="text-5xl un ml-[4%] mb-[5%]">Nearby ASBL Loft</h2>
      <div className="flex items-center justify-between mx-[6%]">
        <div>
          <div class="flex gap-2">
            <h1 className="text-6xl un text-[#9D5088]">5</h1>
            <p className="text-[10px] mt-3">
              Mins <br /> from
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GrLocation size={22} className="mb-[16%]" />
            <div className="h-6 w-1 bg-[#9D5088]"></div>
            <p className="text-[10px]">
              ORR,ISB Road & <br /> Wipro Circle
            </p>
          </div>
        </div>
        <div>
          <div class="flex gap-2">
            <h1 className="text-6xl un text-[#9D5088]">10</h1>
            <p className="text-[10px] mt-3">
              Mins <br /> from
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GrLocation size={22} className="mb-[16%]" />
            <div className="h-6 w-1 bg-[#9D5088]"></div>
            <p className="text-[10px]">Hitech City</p>
          </div>
        </div>
        <div>
          <div class="flex gap-2">
            <h1 className="text-6xl un text-[#9D5088]">15</h1>
            <p className="text-[10px] mt-3">
              Mins <br /> from
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GrLocation size={22} className="mb-[16%]" />
            <div className="h-6 w-1 bg-[#9D5088]"></div>
            <p className="text-[10px]">
              Raidurg Metro <br /> Station
            </p>
          </div>
        </div>
        <div>
          <div class="flex gap-2">
            <h1 className="text-6xl un text-[#9D5088]">30</h1>
            <p className="text-[10px] mt-3">
              Mins <br /> from
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GrLocation size={22} className="mb-[16%]" />
            <div className="h-6 w-1 bg-[#9D5088]"></div>
            <p className="text-[10px]">Airport</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearBy;
