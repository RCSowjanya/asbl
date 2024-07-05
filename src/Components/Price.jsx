import React from "react";
import paymentlines from "../Images/Payment-element-lines.png";
import OtherProjects from "./OtherProjects";

const Price = () => {
  const data = [
    {
      id: 1,
      number: 1,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 2,
      number: 2,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 3,
      number: 3,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 4,
      number: 4,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 5,
      number: 5,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 6,
      number: 6,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 7,
      number: 7,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 8,
      number: 8,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 9,
      number: 9,
      heading: "Booking Advance",
      percentage: "10%",
    },
    {
      id: 10,
      number: 10,
      heading: "Booking Advance",
      percentage: "10%",
    },
  ];

  return (
    <div className="relative p-6">
      <img
        src={paymentlines}
        className="absolute inset-0  w-full object-cover z-0"
        alt="paymentlines"
      />
      <div className="">
        <h2 className="text-center text-4xl text-[#9D5088] my-8">
          Milestone Details
        </h2>
        <div className="milestone space-y-4">
          {data.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div className="flex items-center">
                <span className="circle bg-[#9D5088] mr-4 border rounded-full border-b-[#9D5088] text-white w-8 h-8 flex items-center justify-center">
                  {e.number}
                </span>
                <p>{e.heading}</p>
              </div>
              <p className="text-[#9D5088]">{e.percentage}</p>
            </div>
          ))}

          <div className="flex justify-between">
            <p className="un font-bold text-lg mt-[3%]">
              Total Payable Amount On or Before Registration
            </p>
            <p className="text-[#9D5088] mt-[3%]">100%</p>
          </div>
        </div>
      </div>
      
      <div className="mt-[5%]">
        <OtherProjects />
      </div>
    </div>
  );
};

export default Price;
