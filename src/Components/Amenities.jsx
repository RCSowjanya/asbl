import React from "react";
import img1 from "../Images/Arrival-landing.webp";
import img2 from "../Images/Childcare-landing.webp";
import img3 from "../Images/Fitness-landing.webp";
import img4 from "../Images/Guest-experience-landing.webp";
import img5 from "../Images/Practical-luxury-landing.webp";
import Threelines from "./Threelines";
import ArrivalExp from "./ArrivalExp";
import GuestExp from "./GuestExp";
import PracticalLuxury from "./PracticalLuxury";
import Childcare from "./Childcare";
import Fitness from "./Fitness";
const Amenities = () => {
  return (
    <div>
      {/*--Life style aminities---*/}
      <section className="flex items-center justify-center gap-5 max-[600px]:flex-col">
        <div className="w-1/3 max-[600px]:w-full max-[600px]:text-center min-[601px]:ml-[5%]">
          <h2 className="text-5xl font-[600] un text-[#212529] mb-[5%]">
            Lifestyle Amenities,
          </h2>
          <h2 className="text-4xl font-[300]">Only at Loft!</h2>
        </div>
        <div className="w-2/3 max-[600px]:w-full">
          {/*---flex two images---*/}
          <div className="flex gap-3">
            <div className="">
              <img src={img1} className="" alt="arrival-landing" />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <img src={img2} className="" alt="childcare-landing" />
              </div>
              <div>
                <img src={img3} className="" alt="fitness-landing" />
              </div>
            </div>
          </div>
          {/*---flex first two images---*/}
          <div className="flex gap-3 mt-3 max-[600px]:flex-col">
            <div>
              <img src={img4} className="" alt="guest-experience" />
            </div>
            <div>
              <img src={img5} className="" alt="practical-luxury" />
            </div>
          </div>
        </div>
      </section>
      {/*---Life style aminities close---*/}
      {/*---three lines---*/}
      <div className="mt-8">
        <Threelines />
      </div>
      {/*---three lines close---*/}
      <ArrivalExp />
      <Fitness />
      <GuestExp />
      <PracticalLuxury />
      <Childcare />
    </div>
  );
};

export default Amenities;
