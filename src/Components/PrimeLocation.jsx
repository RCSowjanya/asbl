import React from "react";
import img1 from "../Images/Location-landing.webp";
import Threelines from "./Threelines";
import RoadTo from "./RoadTo";
import Financial from "./Financial";
import NearBy from "./NearBy";
import Distance from "./Distance";
const PrimeLocation = () => {
  return (
    <div>
      <div className="text-center text-sm mt-6 " id="connectivity">
        <p className="mb-3">
          Visit our Sales Office, now at Sheraton Hotel - Financial District.
        </p>
        <a
          className="text-[#9D5088] border border-b-[#9D5088]"
          href="https://maps.app.goo.gl/BqE91Ffzo3m27a3AA"
        >
          Click Here TO Directions
        </a>
      </div>
      {/*---prime location----*/}
      <div className="relative">
        <img
          src={img1}
          className="w-full h-full mt-[3%]"
          alt="location-landing"
        />
        <div className="absolute top-[34%] left-11 h-full max-[600px]:top-[10%]">
          <h2 className="text-4xl mb-[3%] un max-[600px]:text-2xl">
            Prime Location,
          </h2>
          <h2 className="text-4xl un  max-[600px]:text-2xl">
            Limitless Possibilities
          </h2>
          <p className="mt-7 text-md  max-[600px]:mt-2">
            The perfect destination for your ideal lifestyle
          </p>
        </div>
      </div>
      {/*---prime location close---*/}
      {/*---counting----*/}
      <div className="flex  items-center justify-center gap-10 max-[600px]:flex-col my-[5%]">
        <div className="text-center">
          <h1 className="text-4xl mb-4 ">
            20<span className="text-[#9D5088]">+</span>
          </h1>
          <p className="text-md">IT Parks</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl mb-4">
            8<span className="text-[#9D5088]">+</span>
          </h1>
          <p className="text-md">International Schools</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl mb-4">
            11<span className="text-[#9D5088]">+</span>
          </h1>
          <p className="text-md">Entertainment zones</p>
        </div>
      </div>
      {/*---counting close----*/}
      {/*---3 lines---*/}
      <div className="">
        <Threelines />
      </div>
      {/*---first video---*/}
      <RoadTo />
      <Financial />
      <NearBy />
      <Distance />
    </div>
  );
};

export default PrimeLocation;
