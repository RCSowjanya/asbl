import React from "react";
import img1 from "../Images/Party-hall.webp";
import img2 from "../Images/Guest-room.webp";
import Threelines from "./Threelines";
const GuestExp = () => {
  return (
    <section id="guestexp">
      <h3 className="tracking-[3vw] text-2xl font-[300] uppercase text-center mb-[3%]">
        Guest Experience
      </h3>

      <div className="flex max-[600px]:flex-col">
        <div className="w-1/2 flex flex-col gap-3 max-[600px]:w-full ml-[5%] justify-center">
          <h3 className="text-[#AE8F56] text-3xl tracking-[1px] my-[3%] font-[600] un uppercase">
            Party Hall
          </h3>
          <p className="mb-6 text-lg">
            Spacious party hall to make every celebration more special.
          </p>
          <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56]">
            #GrandEntranceLobby #CascadingWaterfall #GrandTowerLobby
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
          <h3 className="text-[#AE8F56] text-3xl tracking-[1px] my-[3%] font-[600] un uppercase">
            Guest Room
          </h3>
          <p className="mb-6 text-lg">
            Your guests would experience the epitome of comfort in these
            exceptional guest rooms
          </p>
          <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56]">
            #AttachedBalconies #SpaciousRooms
          </div>
        </div>
      </div>
      {/*---flex completed---*/}
      {/*---3 lines----*/}
      <div className="my-[5%]">
        <Threelines />
      </div>
    </section>
  );
};

export default GuestExp;
