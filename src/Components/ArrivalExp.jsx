import React from "react";
import img1 from "../Images/Arrival-landing.webp";
import img2 from "../Images/Entrance-2.webp";
import img3 from "../Images/Clubhouse-new.webp";
import Threelines from "./Threelines";
const ArrivalExp = () => {
  return (
    <section id="arrivalexperience">
      <div className="mt-[6%]">
        <h3 className="tracking-[3vw] text-2xl font-[300] uppercase text-center mb-[3%]">
          Arrival Experience
        </h3>
        <div className="flex gap-5 mx-[3%] max-[600px]:flex-col">
          <div className="w-1/2 max-[600px]:w-full">
            <img src={img1} className="" alt="arrival-landing" />
          </div>
          <div className="w-1/2 max-[600px]:w-full">
            <img src={img2} className="" alt="entrance" />
          </div>
        </div>
      </div>
      {/*---content---*/}
      <div className="mx-[3%]">
        <h3 className="text-[#AE8F56] text-2xl tracking-[1px] my-[3%] font-[600] un">
          GRAND ENTRANCE WITH CASCADING WATER BODY
        </h3>
        <p className="mb-6">
          You are welcomed into Loft through a grand entrance with cascading
          water body which sets the tone for luxurious designs that are
          continued in the double highted tower lobby.
        </p>
        <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56] mb-[4%]">
          #GrandEntranceLobby #CascadingWaterfall #GrandTowerLobby
        </div>
      </div>
      {/*---content close---*/}
      {/*---club house image---*/}
      <div>
        <img src={img3} className="w-full h-full" alt="club-house" />
        {/*---content---*/}
        <div className="mx-[3%]">
          <h3 className="text-[#AE8F56] text-2xl tracking-[1px] my-[3%] font-[600] un uppercase">
            Club House
          </h3>
          <p className="mb-6 text-xl">
            Spread over a 55,000 sq.ft area, the Clubhouse at ASBL Loft is the
            convergence of design and desire. Amenities strategically zoned
            vertically, prioritizing a transition from public to private
            functions as the user moves up
          </p>
          <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56] mb-[3%]">
            #GrandClubhouseEntrance #LoungeAreas
          </div>
        </div>
        {/*---content close---*/}
      </div>
      {/*---club house image close---*/}
      {/*---3 lines---*/}
      <div className="mt-8">
        <Threelines />
      </div>
      {/*---3 lines close---*/}
    </section>
  );
};

export default ArrivalExp;
