import React from "react";
import img1 from "../Images/Childcare-1.webp";
import img2 from "../Images/Childcare-amenities-2.webp";
import Threelines from "./Threelines";
import OtherProjects from "./OtherProjects";
const Childcare = () => {
  return (
    <section id="childcare">
      <h3 className="tracking-[3vw] text-2xl font-[300] uppercase text-center mb-[3%]">
        Child care
      </h3>
      {/*---image and content---*/}
      <div className="flex max-[600px]:flex-col">
        <div className="w-1/2 flex flex-col gap-3 max-[600px]:w-full ml-[5%] justify-center">
          <h3 className="text-[#AE8F56] text-2xl tracking-[1px] my-[3%] font-[600] un uppercase">
            22,000 SQ.FT OF CHILDCARE AMENITIES
          </h3>
          <p className="mb-6 text-md pr-[3%]">
            At Loft, childcare facilities have been methodically organised to
            include indoor as well as outdoor spaces to ensure holistic
            development of the little ones
          </p>
          <div class="flex flex-wrap gap-8 max-[600px]:flex-col text-[#AE8F56] text-xl">
            #Creche #KidsPlayArea #HobbyCentre #TuitionCentre
          </div>
        </div>
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img1} className="w-full h-full" alt="party-hall" />
        </div>
      </div>

      <div className="flex max-[600px]:flex-col mt-11 ">
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img2} className="w-full h-full" alt="party-hall" />
        </div>
        <div className="w-1/2 flex flex-col gap-3 max-[600px]:w-full ml-[5%] justify-center">
          <h3 className="text-[#AE8F56] text-2xl tracking-[1px] my-[3%] font-[600] un uppercase">
            5,500 SQ FT CRECHE SPACE
          </h3>
          <p className="mb-6 text-md">
            We understand the needs of working parents, and so we will be
            providing one of the biggest creches in the segment, that too with
            flexible timings!
          </p>
          <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56]">
            #ToddlersNapArea #CrechePlayArea
          </div>
        </div>
      </div>
      {/*----image and content close----*/}
      {/*---3lines---*/}
      <div className="my-11">
        <Threelines />
      </div>
      <OtherProjects />
    </section>
  );
};

export default Childcare;
