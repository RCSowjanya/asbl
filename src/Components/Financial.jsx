import React from "react";
import img1 from "../Images/Why-1.webp";
import img2 from "../Images/Why-2.webp";
import img3 from "../Images/Why-3.webp";
import img4 from "../Images/Why-4.webp";

const Financial = () => {
  const data = [
    {
      img: img1,
      heading: "Favorite of IT Giants.",
      description:
        "As the name suggests, Financial District boasts of the biggest names in the commercial world. From Apple, to Amazon, to Capgemini, you name it and you'll find it here!",
    },
    {
      img: img2,
      heading: "Connectivity like never before.",
      description:
        "Connectivity can't get better than Financial District. Just 5 minutes from Hyderabad's lifelines like the ORR, ISB road, and Wipro circle.",
    },
    {
      img: img3,
      heading: "Great Infrastructure.",
      description:
        "Being the most developed part of Hyderabad, Financial District is home to great social and public infrastructure.",
    },
    {
      img: img4,
      heading: "Best Investment Opportunity.",
      description:
        "Investing in the best location that Hyderabad has to offer is bound to yield returns!",
    },
  ];
  return (
    <div id="whyfinacialdistrict">
      <h2 className="text-4xl mb-[4%] mx-[3%]">
        Why Financial <br /> District?
      </h2>
      <div className="grid grid-cols-4 items-center mx-[3%] justify-center gap-4 max-[600px]:grid-cols-1">
        {data.map((e, index) => {
          const { img, heading, description } = e;
          return (
            <div
              key={index}
              className={`relative p-4 space-y-4 ${
                index !== data.length - 1 ? "border-r-2 border-[#AE8F56]" : ""
              }`}
            >
              <img src={img} className="" alt="" />
              <h3 className="text-xl ">{heading}</h3>
              <p className="text-sm">{description}</p>
            </div>
          );
        })}
      </div>
      {/*---are you intreated ---*/}
      <div className="bg-[#ae8f56] my-[5%] h-24 flex items-center justify-between px-[4%] max-[600px]:flex-col max-[600px]:h-28 max-[600px]:py-[5%]">
        <p className="text-white">Are you Interested In Property</p>
        <button className="rounded-full bg-white py-2 px-6 text-sm">
          connect With Us &rarr;
        </button>
      </div>
    </div>
  );
};

export default Financial;
