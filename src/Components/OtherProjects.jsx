import React from "react";
import { useNavigate } from "react-router-dom";
import spectrabg from "../Images/Spectra-bg.webp";
import springbg from "../Images/Springs-bg.webp";
import spirabg from "../Images/Spire-bg.webp";
import lakesidebg from "../Images/Lakeside-bg.webp";

import { MdArrowOutward } from "react-icons/md";
const OtherProjects = () => {
  const navigate = useNavigate();
  const data = [
    {
      img: spectrabg,
      heading: "ASBL Spectra",
      sub: "3BHK",
      description: "Financial District, Gachibowli",
      subdescription: "December 2025",
      link: "/spectra",
    },
    {
      img: springbg,
      heading: "ASBL Spring",
      sub: "3BHK",
      description: "Financial District, Gachibowli",
      subdescription: "December 2025",
      link: "/spring",
    },
    {
      img: spirabg,
      heading: "ASBL Spire",
      sub: "3BHK",
      description: "Financial District, Gachibowli",
      subdescription: "December 2025",
      link: "/spire",
    },
    {
      img: lakesidebg,
      heading: "ASBL Lakeside",
      sub: "2 & 3BHK",
      description: "Khajaguda",
      subdescription: "Completed",
      link: "/lakeside",
    },
  ];

  return (
    <div className="px-10">
      <h1 className="un text-left text-5xl text-[#0F1520] mb-[3%]">
        Other projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((e, index) => (
          <div
            key={index}
            className="relative h-full w-full overflow-hidden rounded-lg group"
          >
            <div
              className="relative cursor-pointer h-44 w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${e.img})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4">
              <h3 className="text-white text-xl mb-2 flex items-center">
                {e.heading}
                <button
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white ml-2"
                  onClick={() => navigate(e.link)}
                >
                  <MdArrowOutward size={28} />
                </button>
              </h3>
              <h4 className="text-white text-sm mb-2 text-left">{e.sub}</h4>
              <p className="text-white text-sm mb-2 text-left">
                {e.description}
              </p>
              <p className="text-white text-sm text-left">{e.subdescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
