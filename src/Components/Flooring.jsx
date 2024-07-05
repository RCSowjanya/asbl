import React from "react";
import flooring from "../Images/Flooring.webp";
const Flooring = () => {
  return (
    <div>
      <div className="flex gap-2 max-[600px]:flex-col">
        <div className="w-1/2 max-[600px]:w-full max-[600px]:h-screen">
          <h2 className="text-3xl border-b-4 border-[#c19451] mb-5 w-auto  font-bold leading-[60px] ">
            Specifications
          </h2>
          <p className="text-xl mb-4">Internal</p>
          <div className="">
            <ul className="list-disc space-y-4 text-sm">
              <li>
                Flat Flooring : 800 x 800 mm Double Charged Vitrified, Designer
                tiles with Spacer Joint
              </li>
              <li>
                Master bathroom flooring : 600 x 1,200 mm Anti Skid, Matte
                Finish, Designer Tiles with Spacer Joint
              </li>
              <li>
                Other Bathroom Flooring : 600 x 600 mm Anti Skid, Matte Finish,
                Designer Tiles with Spacer Joint
              </li>
              <li>
                Balcony Flooring : Wood finish Anti-Skid Vitrified tiles with
                Spacer Joint
              </li>
            </ul>
          </div>
          <h2 className="text-xl my-6">External</h2>
          <ul className="list-disc text-sm">
            <li>
              Corridor : 600 x 1,200 mm Vitrified GVT/Terrazzo Designer Tiling
            </li>
          </ul>
        </div>
        <div className="w-1/2 max-[600px]:hidden">
          <img src={flooring} className="" alt="flooring-img" />
        </div>
      </div>
    </div>
  );
};

export default Flooring;
