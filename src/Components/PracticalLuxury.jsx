import React from "react";
import img1 from "../Images/UC-1.webp";
import img2 from "../Images/UC-2.webp";
import img3 from "../Images/Convenience.webp";
import img4 from "../Images/Business-centre.webp";
import Threelines from "./Threelines";
const PracticalLuxury = () => {
  return (
    <section id="practcalluxury">
      <h3 className="tracking-[3vw] text-2xl font-[300] uppercase text-center mb-[3%]">
        Practical Luxury
      </h3>
      {/*--images--*/}
      <div className="flex gap-4 mx-[3%]">
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img1} className="w-full h-full" alt="Uc-1" />
        </div>
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img2} className="w-full h-full" alt="Uc-2" />
        </div>
      </div>
      {/*--content--*/}
      <div className="mt-[2%] mb-[4%] mx-[3%]">
        <h3 className="text-[#AE8F56] text-3xl tracking-[1px] my-[3%] font-[600] un uppercase">
          urban Corridor
        </h3>
        <p className="mb-6">
          The 'Urban Corridor' has been conceptualized with the vision of
          integrating essential elements for residents' usage. All these
          amenities have been carefully handpicked and placed under the towers
          to enable easy access and, at the same time, allow different
          activities in the tower as well
        </p>

        <button className="px-6 py-2 bg-[#9D5088] text-white rounded-full mb-4">
          Explore Location
        </button>

        <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56]">
          #GrandEntranceLobby #BusinessCentre
        </div>
      </div>
      {/*---image and content---*/}
      <div className="flex max-[600px]:flex-col">
        <div className="w-1/2 flex flex-col gap-3 max-[600px]:w-full ml-[5%] justify-center">
          <h3 className="text-[#AE8F56] text-3xl tracking-[1px] my-[3%] font-[600] un uppercase">
            THOUGHTFUL CONVENIENCE
          </h3>
          <p className="mb-6 text-lg">
            At ASBL Loft, we remain mindful that offering luxurious living gets
            better with convenience.
          </p>
          <div class="flex flex-wrap gap-8 max-[600px]:flex-col text-[#AE8F56] text-xl">
            #Salon #Supermarket #PetPark #EVCharging #ATM #LockerFacility
            #Laundry #Clinic #Pharmacy #BanquetHall
          </div>
        </div>
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img3} className="w-full h-full" alt="party-hall" />
        </div>
      </div>

      <div className="flex max-[600px]:flex-col mt-11 ">
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img4} className="w-full h-full" alt="party-hall" />
        </div>
        <div className="w-1/2 flex flex-col gap-3 max-[600px]:w-full ml-[5%] justify-center">
          <h3 className="text-[#AE8F56] text-3xl tracking-[1px] my-[3%] font-[600] un uppercase">
            5,500 SFT BUSINESS CENTRE WITH COWORKING SPACES
          </h3>
          <p className="mb-6 text-lg">
            The 5,500 sq ft Business Centre is well-equipped with meeting rooms
            that allows working professionals to be productive even when they
            are working from home
          </p>
          <div class="flex gap-4 max-[600px]:flex-col text-[#AE8F56]">
            #MeetingRooms #CoworkingSpace #NetworkingSpace
          </div>
        </div>
      </div>
      {/*----image and content close----*/}
      {/*---3lines---*/}
      <div className="my-11">
        <Threelines />
      </div>
    </section>
  );
};

export default PracticalLuxury;
